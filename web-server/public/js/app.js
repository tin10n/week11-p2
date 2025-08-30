console.log('Client side javascript file is loaded!')

//This selects the first <form> element found in the HTML document and assigns it to a constant variable.
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From JavaScript'

// Goal: Render content to paragraphs

// Goal: Fetch weather!

// This adds an event listener to the weatherForm that "listens" for a submit event, which occurs when a user submits the form.
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    // It uses the fetch API to make an asynchronous HTTP GET request to a local server.
    fetch('http://localhost:3000/weather?address=!' +location).then((response) => {
        response.json().then((data) => {
        if (data.error) {
            messageOne.textContent= data.error
        } else {
            messageOne.textContent= data.location
            messageTwo.textContent= data.forecast

            console.log(data.location)
            console.log(data.forecast)
        }
        })
    })
})


