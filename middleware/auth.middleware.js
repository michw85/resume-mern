const jwt = require('jsonwebtoken')
const config = require('config')
module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        // get object TOKEN from request headers -> string of authorization from frontend
        // take first element in array - token -> [1]
        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN

        if(!token) {
            return res.status(401).json({ message: 'No authorization' })
        }

        // library jsonwebtoken help decoded token
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()

    } catch (e) {
        res.status(401).json({ message: 'No authorization' })
    }
}