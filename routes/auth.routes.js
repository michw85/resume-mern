const {Router} = require('express')
const bicrypt = require('bcryptjs') // hash passwords
const {check, validationResult} = require('express-validator') // login/pass validation
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post('/register',
    // array of middlewares for validation
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum password length 6 characters')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
    try{
        // check for data validity
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Incorrect data during registration"
            })
        }

        // send email and password -> from requests fields
        const {email, password} = req.body

        // waiting for verification of email in DB and password hashing
        const candidate = await User.findOne({ email })
        if(candidate) {
            return res.status(400).json({ message: 'Such user already exists' })
        }
        const hashedPassword = await bicrypt.hash(password, 12)

        // create and wait for saving user
        const user = new User({ email, password: hashedPassword})
        await user.save()

        // answer for frontend
        res.status(201).json({ message: "User created" })

    }catch (e){
        //  Internal Server Error
        res.status(500).json({message:'Something went wrong. Try again'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Enter a valid email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try{
            // check for data validity
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400),json({
                    errors: errors.array(),
                    message: "incorrect login data"
                })
            }

            // getting and finding a user
            const {email, password} = req.body
            const user = await User.findOne({ email })
            if(!user){
                return res.status(400).json({message: 'User is not found'})
            }

            // comparison of passwords
            const isMatch = await bicrypt.compare(password, user.password)
            if(!isMatch) {
                // Try not to explain the error here. Exception for training now
                return res.status(400).json({message:'Wrong password, try again'})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'), // secret code from config
                { expiresIn: '1h' }  // created for 1 hour
            )

            res.json({ token, userId: user.id })

        }catch (e){
            //  Internal Server Error
            res.status(500).json({message:'Something went wrong. Try again'})
        }
})


module.exports = router
