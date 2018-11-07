'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGame)
  console.log('create game')
}

module.exports = {
  onNewGame
}
