setTimeout(() => {
    console.log('Two seconds aree up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) =>{
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        latitude: 0,
        logitude: 0
    }

    callback(data)
}, 2000)
}

geocode('Philadelphia', (data) => {
console.log(data)
}

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}

// Goal: Mess around with the callback pattern
add(1,4, (sum) => {
    console.log(sum) // Should print: 5
})