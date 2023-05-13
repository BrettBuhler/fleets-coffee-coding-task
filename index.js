const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', (express.static('public')))

app.listen(5001, ()=> {
    console.log('Listening on port elasticbeanstalk')
})