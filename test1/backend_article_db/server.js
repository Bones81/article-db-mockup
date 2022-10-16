const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send('<h1>Express is connected!</h1>')
})

app.listen(3001, console.log('Express is listening...'));
