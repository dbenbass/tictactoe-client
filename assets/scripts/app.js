'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // const store = require('../store.js')
  const authEvents = require('./auth/events.js')
  // const gamesEvents = require('./games/events.js')
  const gameApi = require('./games/api.js')
  const gameUi = require('./games/ui.js')
  // const gameEvents = require('./games/events.js')
  // const getGames = require('./games/ui.js')
  const playerTurn = $('checkForWinner').val()
  console.log(playerTurn)
  const boardMove = $(this).attr('id')
  console.log(boardMove)

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut) // authentication
  $('.box').hide()
  $('#newGame').hide()
  $('#pastGames').hide()
  $('#sign-out').hide()
  $('#reset').hide()
  $('#change-password').hide()

  // $('#create-game').on('click', gamesEvents.onNewGame)

  $('#pastGames').click(function (onGetAllGames) {
    gameApi.getAllGames()
    // store.games = data.games
      .then(gameUi.onGetAllGamesSuccess)
      // .catch(console.log)
    // $('#message').text('games.length')
    // const data = JSON.parse(console.log)

    // .catch  do console logs
    // save id that it gives back
  // hide stuff for pre-sign up
  })

  $('#newGame').click(function (newGame) {
    $('.box').show()
    $('#reset').show()
    $('#newGame').hide()
    $('#message').text('')
    gameApi.createGameSuccess()
    // store.games = data.games
      .then(gameUi.onCreateGameSuccess)
      // .catch(console.log)
    // .catch  do console logs
    // save id that it gives back
  // hide stuff for pre-sign up
  })

  let move = 1
  // game starts at move 1, odd number
  let play = true

  $('.row .square').click(function (event) {
  // when you click on a square
    let player
    if ($(this).text() === '' && play) {
    // if square is blank and game is in session
      if ((move % 2) === 1) {
        player = 'X'
        // and move is an odd number, write X
        $(this).append('X')
        // console.log('O it is your turn')
      } else {
        player = 'O'
        $(this).append('O')

        // if not, O
        // console.log('X it is your turn')
      }
      move++
      if (checkForWinner() !== -1 && checkForWinner() !== '') {
      // continue playing if checkForWinner is not equal to -1 and is not blank
        if (checkForWinner() === 'X') {
          $('#gameResultMessage').text('X wins')
          $('#newGame').show()
          // console.log('X wins!')
          $('#reset').hide()
          $('#newGame').show()
          // show new game button
          // hide reset
        } else if (checkForWinner() === 'O') {
          $('#gameResultMessage').text('O wins')
          $('#reset').hide()
          $('#newGame').show()
          // console.log('O wins')
        // if checkForWinner = x,  x wins, if o, o wins...
        } else if (checkForWinner() === 'draw') {
          $('#gameResultMessage').text('Draw!')
          $('#reset').hide()
          $('#newGame').show()
          // console.log('draw')
        }
        play = false
      }

      const boardMove = $(this).attr('data-index')
      // console.log(play)
      // const playerTurn = $(this).attr
      const data =
      {
        'game': {
          'winner': gameWinner,
          'cell': {
            'index': boardMove,
            'value': player
          },
          'over': isGameOver
        }
      }
      gameApi.updateGameSuccess(data)
      // .then(console.log)
      // .catch(console.err)

    //  const playerTurn = $('checkForWinner').val()
    //  const playerTurn = $(this).attr
      // check if game is over??
    }
  })

  $('#newGame').click(function () {
    $('#topLeft').html('')
    $('#topMid').html('')
    $('#topRight').html('')
    $('#midLeft').html('')
    $('#midMid').html('')
    $('#midRight').html('')
    $('#bottomLeft').html('')
    $('#bottomMid').html('')
    $('#bottomRight').html('')
    $('#message').text('')
    $('#gameResultMessage').text('')
    // $('#allGamesMessage').text(`You have played ${getGames} games so far on this account. Click
    //  past games button again to refresh!`)
    play = true
    // create empty board on reset, hide game result message
  })

  $('#reset').click(function () {
    $('#topLeft').html('')
    $('#topMid').html('')
    $('#topRight').html('')
    $('#midLeft').html('')
    $('#midMid').html('')
    $('#midRight').html('')
    $('#bottomLeft').html('')
    $('#bottomMid').html('')
    $('#bottomRight').html('')
    $('#message').text('')
    $('#gameResultMessage').text('')
    play = true
    // create empty board on reset, hide game result message
  })

  const isGameOver = function () {
    if (play === true) return false
    else if (play === false) {
      return true
    }
  //  console.log(isGameOver)
  }

  const gameWinner = function () {
    if (checkForWinner() === 'X') {
      return 'X'
    } else if (checkForWinner() === 'O') {
      return 'O'
    } else if (checkForWinner() === 'draw') {
      return 'draw'
    }
  }

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
    // check each space for x or o
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
      // if board is full but no matches
      return 'draw'
    }
    return -1
  }
})
