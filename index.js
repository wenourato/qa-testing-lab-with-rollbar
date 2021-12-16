const express = require('express')
const path = require('path')
const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'cb817f95872944b797d1e105fd2a37aa',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))

})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 4444



app.listen(port, () => console.log(`Take us to ward ${port}!`))