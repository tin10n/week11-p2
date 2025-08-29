// Object Property Shorthand

const name = 'Sally'
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'Boston'
}

console.log(user)

// Object destructuring 

const product = {
    label: 'Red notbook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

const {label:productLabel, stock, rating =5 } = product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
    const {label} = myProduct
}

transaction('order',product)