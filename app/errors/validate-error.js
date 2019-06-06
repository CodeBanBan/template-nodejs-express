'use strict'

class ValidateError extends Error {
  constructor (message) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidateError)
    }

    this.name = 'ValidateError'
    this.date = new Date()
  }
}

module.exports = ValidateError
