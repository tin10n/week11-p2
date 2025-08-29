
const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pv0G8ybW90MDFhazNxcnJ40TYydzJl0SJ9.njY7HvaalLEVhEOIghPTlw&limit=1"

    // making a call to library
    // first arugement, second arguement
    request({url, json:true}, (error, {body})) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            // if no issues then will grab the extracted data
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.feature[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode