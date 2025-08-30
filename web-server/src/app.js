const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__direname)
// console.log(path.join__direname, '../..')

// Goal: Create a partial for the footer

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__direname,'../public')
const viewsPath = path.join(__direname,'../templates/views')
const partialsPath = path.join(__direname,'../templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

app.get('about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

// Goal: Create a template for help page

app.get('help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

// Goal: Create two moree HTML files
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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geocode(req.query.address, (error, {latitude, longitue, locatiom}) => {
        if (error) {
            return res.send({ error})
        }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address

            })   
            //  error: 'You must provide an address!'
        }) 
    })
//         res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia',
//         address: req.query.address
// })

//Goal: Update weather endpoint to accept address

// Goal: Wire up weather
app.get('/products*', (req,res) => {
    if (req.query.search) {
        req.send({
            error: 'You must provie a search term'
        })
    }
    console.log(req.query.search)
        res.send({
            product: []
        })
    })

app.get('/help/*', (req,res) => {
    res.render('404',{
        title:'404',
        name:'Andrew Mead',
        errorMessage: 'Help article not found.'
})
})

app.get('/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

// Goal: Create add render a 404 page with handlebars

// Goal:  Set up new route

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

