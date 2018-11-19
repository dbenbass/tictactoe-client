'use strict'

const store = require('../store.js')
// const gameApi = require('./api.js')
// const gameUi = require('./ui.js')

const onCreateGameSuccess = data => {
  // console.log(data)
  store.gameId = data.game.id
  // $('#newGame').click(function () {
  //   console.log = ('sfdjkafdjjsf')
  //   $('.box').show()
  //   $('#authMessage').hide()
  //   const gameId = data.game.id
  //   store.gameId = gameId
  // })
}

const onGetAllGamesSuccess = game => {
  const getGames = game.games.length
  $('#allGamesMessage').text(`You are on game number ${getGames} on this account.`).addClass('allgames')
  // console.log('onGetAllGamesSuccess ran. Data is :', game)
}

module.exports = {
  onCreateGameSuccess,
  onGetAllGamesSuccess
}
