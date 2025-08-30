// Defines an arrow function named greeter. It takes two parameters: name with a default value of 'user', and age which does not have a default value.

const greeter = (name = 'user', age) => {
    console.log('Hello'+ name)
}

greeter('Andrew')
greeter()