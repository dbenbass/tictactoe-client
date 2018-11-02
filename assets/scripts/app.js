'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const authEvents = require('./auth/events.js')
  let move = 1
  let play = true
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // authentication

  $('.row .square').click(function () {
    if ($(this).text() === '' && play) {
      if ((move % 2) === 1) {
        $(this).append('X')
      } else {
        $(this).append('O')
      }
      move++
      if (checkForWinner() !== -1 && checkForWinner() !== '') {
        if (checkForWinner() === 'X') { console.log('X wins!') } if (checkForWinner() === 'O') { console.log('O wins') }
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
    if ((space1 === space2) && (space2 === space3)) { return space3 } else if ((space4 === space5) && (space5 === space6)) { return space6 } else if ((space7 === space8) && (space8 === space9)) { return space9 } else if ((space1 === space4) && (space4 === space7)) { return space7 } else if ((space2 === space5) && (space5 === space8)) { return space8 } else if ((space3 === space6) && (space6 === space9)) { return space9 } else if ((space1 === space5) && (space5 === space9)) { return space9 } else if ((space3 === space5) && (space5 === space7)) { return space7 }
    // no winnerspace7 }space7 }
    return -1
  }
})
