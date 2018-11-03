'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const authEvents = require('./auth/events.js')
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // authentication

  let move = 1
  // game starts at move 1, odd number
  let play = true

  $('.row .square').click(function () {
  // when you click on a square
    if ($(this).text() === '' && play) {
    // if square is blank and game is in session
      if ((move % 2) === 1) {
        // and move is an odd number, write X
        $(this).append('X')
      } else {
        $(this).append('O')
        // if not, O
      }
      move++
      if (checkForWinner() !== -1 && checkForWinner() !== '') {
      // continue playing if checkForWinner is not equal to -1 and is not blank
        if (checkForWinner() === 'X') {
          console.log('X wins!')
        } else if (checkForWinner() === 'O') {
          console.log('O wins')
        // if checkForWinner = x,  x wins, if o, o wins...
        } else if (checkForWinner() === 'draw') { console.log('draw') }
        play = false
      }
    }
  })

  const checkForWinner = function () {
    const space1 = $('#topLeft').text()
    const space2 = $('#topMid').text()
    const space3 = $('#topRight').text()
    const space4 = $('#midLeft').text()
    const space5 = $('#midMid').text()
    const space6 = $('#midRight').text()
    const space7 = $('#bottomLeft').text()
    const space8 = $('#bottomMid').text()
    const space9 = $('#bottomRight').text()

    // check rows
    if ((space1 === space2) && (space2 === space3)) {
      return space3
    } else if ((space4 === space5) && (space5 === space6)) {
      return space6
    } else if ((space7 === space8) && (space8 === space9)) {
      return space9
    // check columns
    } else if ((space1 === space4) && (space4 === space7)) {
      return space7
    } else if ((space2 === space5) && (space5 === space8)) {
      return space8
    } else if ((space3 === space6) && (space6 === space9)) {
      return space9
    // check diagonal
    } else if ((space1 === space5) && (space5 === space9)) {
      return space9
    } else if ((space3 === space5) && (space5 === space7)) {
      return space7
    } else if ((space1 !== '') && (space2 !== '') && (space3 !== '') && (space4 !== '') &&
      (space5 !== '') && (space6 !== '') && (space7 !== '') && (space8 !== '') && (space9 !== '')) {
      return 'draw'
    }
    return -1
  }
})
