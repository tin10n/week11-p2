const express = require('express')

console.log(__direname)
console.log(__filename)

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req,res) => {
    res.send([{
        name:'Andrew'
    }, {
        name: 'Sarah'
    }])
})

// Goal: Update routes

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req,res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
})
})

// Goal:  Set up new route

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

