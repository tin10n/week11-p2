// import request library
const request = require('request')

// making an http call, using an arrow function
const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bb&query=37.8267,-122.4233&units=f' + latitude + ',' + longitude + '&units=f'

// callback function that executes when the request is complete
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        // checks if the API itself returned an error (e.g., invalid API key, bad location)
        } else if (body.error) {
            callback(('Unable to find location',undefined))

        } else {
            callback(undefined, body.daily.data[0].summary +  'It is currently' + response.body.current.temperature + 'degrees out. There is a' + body.current.precipProbability + '% chance of rain.')

        }
    })
}

module.exports = forecast