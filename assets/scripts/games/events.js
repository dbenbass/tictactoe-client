'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const gameApi = require('./api.js')
const ui = require('./ui.js')

// const onNewGame = event => {
// event.preventDefault()
// api.createGame()
// .then(ui.createGame)
// console.log('create game')
// }
const onGetAllGames = event => {
  // event.preventDefault()
  gameApi.getAllGames()
  console.log(event)
  console.log(event.games.length)
  $('#pastGames').click(function (getAllGames) {
    $('.box').hide()
      .then(ui.onGetAllGamesSuccess)
      .catch(console.log)
  }

  )
}
// const onGetAllGames = event => {
// event.preventDefault()
// api.getAllGames()
// .then(ui.onGetAllGamesSuccess)
// .catch(console.log('get all games'))
// }

module.exports = {
//   onNewGame,
  onGetAllGames
}
