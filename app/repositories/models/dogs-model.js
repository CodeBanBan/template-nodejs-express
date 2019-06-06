const Dynamoose = require('dynamoose')

const Dogs = new Dynamoose.Schema({
  id: Number,
  name: String,
  info: {
    color: String
  }
})

// Create cat model with default options
module.exports = Dynamoose.model('Dogs', Dogs)
