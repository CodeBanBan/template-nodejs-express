const Dynamoose = require('dynamoose')

const Cats = new Dynamoose.Schema({
  id: Number,
  name: String,
  info: {
    color: String
  }
})

// Create cat model with default options
module.exports = Dynamoose.model('Cats', Cats)
