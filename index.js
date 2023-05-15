require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('public'))

const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, ()=> {
    console.log('Listening on port elasticbeanstalk')
})