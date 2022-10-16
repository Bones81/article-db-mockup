const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

const PORT = process.env.PORT || 3003

const clothingController = require('./controllers/clothing')
app.use('/clothing', clothingController)

app.get('/', (req, res) => {
    res.json({'message':'Express is connected!'})
})

app.listen(PORT, () => {
    console.log('Express is listening on PORT: ' + PORT);
});
