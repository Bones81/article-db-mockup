const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3003


app.get('/', (req, res) => {
    res.send('<h1>Express is connected!</h1>')
})

app.listen(PORT, () => {
    console.log('Express is listening on PORT: ' + PORT);
});
