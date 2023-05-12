const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', (express.static('public')))

app.listen('fleetscoffeecodingtask.us-east-1.elasticbeanstalk.com', ()=> {
    console.log('Listening on port elasticbeanstalk')
})