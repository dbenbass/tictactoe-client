'use strict'

const store = require('../store.js')

const createGameSuccess = data => {
  $('#newGame').click(function () {
    console.log = ('sfdjkafdjjsf')
    $('.box').show()
    $('#authMessage').hide()
    store.user = data.user
  })
}

module.exports = {
  createGameSuccess
}
