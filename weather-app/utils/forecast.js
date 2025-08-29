const request = require('request')

const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bb&query=37.8267,-122.4233&units=f' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)

        } else if (body.error) {
            callback(('Unable to find location',undefined))

        } else {
            callback(undefined, body.daily.data[0].summary +  'It is currently' + response.body.current.temperature + 'degrees out. There is a' + body.current.precipProbaility + '% chance of rain.')

        }
    })
}

module.exports = forecast