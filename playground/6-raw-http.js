// Importing the module
const https = require('https')
const url = 'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bb&query=37.8267,-122.4233&units=f' + latitude + ',' + longitude + '&units=f'

// Callback function will listen for two events.
const request = https.request(url, (response) =>{
    let data = ''
    response.on('data',(chunk) =>{
        data = data + chunck.toString()

    })

    // Incoming chunks of data and parse complete data string as JSON, then printing to console.
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()