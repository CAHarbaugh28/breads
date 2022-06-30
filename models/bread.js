// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://static01.nyt.com/images/2013/03/03/magazine/03wmt1/03wmt1-articleLarge-v2.jpg?year=2013&h=453&w=600&s=a17b1fd9a5c5b0e8ffac0039cee9ef7a2f0eb929e810e3c1968d0b6a4a4997b4&k=ZQJBKqZ0VN&tw=1' }
})

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
