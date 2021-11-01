const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()

// get dynamic code on get-request without authorization check and middleware
router.get('/:code', async (req, res) => {
    try{
        // get the link with which we work by code (from params)
        const link = await Link.findOne({ code: req.params.code })

        if(link) {
            link.clicks++
            await  link.save()
            return res.redirect(link.from)
        }

        res.status(404).json('Link not found')
    }catch (e){
        //  Internal Server Error
        res.status(500).json({message:'Something went wrong. Try again'})
    }
})
module.exports = router