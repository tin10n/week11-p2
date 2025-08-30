// A function that executes a callback function after a specified delay.
// It takes two main arguments
setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

// Geocode function to properly pass data to the callback
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

// Corrected call to geocode with the missing parenthesis added
geocode('Philadelphia', (data) => {
    console.log(data)
})

// Another example of an asynchronous function.
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

// Goal: Mess around with the callback pattern
add(1,4, (sum) => {
    console.log(sum) // Should print: 5
})