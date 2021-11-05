const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

// middleware for parsing string to json
app.use(express.json({ extended: true }))
// routes for logic of authorization
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

// giving the frontend from server with one NODE
if (process.env.NODE_ENV === 'prodaction') {
    // new middleware -> make path for loading statics from folder client
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    // for any get-request is sent to the file 'index.html' in folder 'build'
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// const PORT = config.get('port') || 5000
const PORT = process.env.PORT || 80 // for Heroku

async function start() {
    try{
        // Add DB and wait, when it loaded
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    }catch (e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

