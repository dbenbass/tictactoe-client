'use strict'

const store = require('../store.js')

const onCreateGameSuccess = data => {
  console.log(data)
  store.gameId = data.game.id
  // $('#newGame').click(function () {
  //   console.log = ('sfdjkafdjjsf')
  //   $('.box').show()
  //   $('#authMessage').hide()
  //   const gameId = data.game.id
  //   store.gameId = gameId
  // })
}

module.exports = {
  onCreateGameSuccess
}
