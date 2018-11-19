'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#signupemail').val('')
  $('#signuppassword').val('')
  $('#signuppasswordconfirm').val('')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signInSuccess ran. Data is :', data)
  $('#newGame').show()
  $('#pastGames').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').hide()
  $('#password').val('')
  $('#email').val('')
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#oldpassword').val('')
  $('#newpassword').val('')
  // console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#oldpassword').val('')
  $('#newpassword').val('')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').show()
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess ran. Data is :', data)
  $('.box').hide()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#reset').hide()
  $('#newGame').hide()
  $('#allGamesMessage').hide()
  $('#sign-up').show()
  $('#pastGames').hide()
  $('#gameResultMessage').hide()
  $('#change-password').hide()
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const createGameSuccess = data => {
  store.game = data.game
  // console.log('createGameSuccess ran.  Data is :', data)
  // $('#allGamesMessage').text(`You have played ${data.games.length} games so far on this account`).addClass('allgames')
}

// const createGameFailure = error => {
// $('#message').text('Error on create game')
// $('#message').removeClass()
// $('#message').addClass('failure')
//  console.error('createGameFailure ran.  Error is :', error)
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess
  // createGameFailure
}
