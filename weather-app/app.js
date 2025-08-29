const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

// Goal: Use both destructuring and property shorthand in weather app


const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
        return console.log(error)
    }
    
    forecast(latitude, longtitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)

    })


// console.log('Starting')

// setTimeout(() => {
//     console.logg('2 Seconds Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 Seconds Timer')
// }, 0)

// console.log('Stopping')

// const request = require('request')
// const url = 'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bb&query=37.8267,-122.4233&units=f'

// Making a http request, parsing it
// request({ url:url, json: true}, (error, response) => {
//    if (error) {
//     console.log('Unable to connect to wather srevice!')
//     } else if (response.body.error) {
//     console.log('Unable to find location')
//     } else {
//     console.log(response.body.daily.data[0] +  'It is currently' + response.body.current.temperature + 'degrees out. It feels like' + response.body.current.feelslike + '% chance of rain.')
// })

//Goal: Print a small forecast to the user

// Goal: Handle errors for geocoding request 
// Geocoding
// // Address -> Lat/Long -> Weather
// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angels"
// pk.eyJ1IjoiYW5kcmVV3bWVhZDEiLChijoiY2pv0G8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7Hvaa

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to lccation services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//     const url = 'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bb&query=37.8267,-122.4233&units=f'


//     request({ url:url, json: true}, (error, response) => {
//     if (error) {
//      console.log('Unable to connect to wather srevice!')
//      } else if (response.body.error) {
//      console.log('Unable to find location')
//      } else {
//      console.log(response.body.daily.data[0] +  'It is currently' + response.body.current.temperature + 'degrees out. It feels like' + response.body.current.feelslike + '% chance of rain.')
// })
//     }

// const geocode = (address, callback) => {
//     const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pv0G8ybW90MDFhazNxcnJ40TYydzJl0SJ9.njY7HvaalLEVhEOIghPTlw&limit=1"
//     ? become %3F

//     request({url:url, json:true} () => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0]
//                 longitude: response.body.feature[0].center[1]
//                 location: response.body.features[0].place_name
//             })
//         }
//     })

// }

console.log(process.argv)

// Goal: Create a reusable function for getting the forecast

geocode(address, (error,data) => {
    if (error) {
        return console.log(error)
    }
//      console.log('Error', error)
//      console.log('Data', data)
//      forecast(data.latitude, 42.3605, (error,data) => {
//         console.log('Error', error)
//         console.log('Data', data)
//      })
// })

// Goal: Accept location via command line arguement

    forecast(data.latitude, data.longtitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)

    }
// forecast(-75.7088, 44.1545, (error,data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })