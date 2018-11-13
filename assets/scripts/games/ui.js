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

'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}
