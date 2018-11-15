'use strict'

const config = require('../config.js')
const store = require('../store.js')
const createGameSuccess = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
    //  Authorization: 'Token token=BAhJIiVhMGRiNWM1YjkxNTNkNzNiNDc1NjAyMjVhOGZjNWQ0NgY6BkVG--a73b4ad6fac9e026c917fa9d10cc8e27ba902c97'
      Authorization: 'Token token=' + store.user.token
    },
    data: {}

  })
}
const updateGameSuccess = function (data) {
  return $.ajax({
    // url: config.apiUrl + '/games/4382',
    url: config.apiUrl + '/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      // Authorization: 'Token token=BAhJIiVhMGRiNWM1YjkxNTNkNzNiNDc1NjAyMjVhOGZjNWQ0NgY6BkVG--a73b4ad6fac9e026c917fa9d10cc8e27ba902c97' +
    //  store.user.token
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games[?over=]',

    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getAllGames
}
