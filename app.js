var express = require('express')
var app = express()

app.use('/receiver', express.static('src/receiver'))

app.use('/sender', express.static('src/sender'))

app.use('/static', express.static('src/static'))

app.listen(80, () => {
    console.log("All routes ready! Running at port " + 80)
})