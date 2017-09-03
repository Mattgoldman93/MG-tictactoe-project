'use strict'
const turn = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
let crntBoard = ['', '', '', '', '', '', '', '', '']
let i = 0
let player
let notPlayer
const gameWon = function (winner) {
  $('#display').text(winner + ' wins!')
  $('#resetBoard').addClass('btn-success').removeClass('btn-danger')
  i = 10
  $('.box').attr('disabled', 'disabled')
}
const tie = function () {
  $('#display').text('no winner this time 😢')
  $('.box').attr('disabled', 'disabled')
  $('#resetBoard').addClass('btn-success').removeClass('btn-danger')
}
const checkForWin = function () {
  if (i < 10 && i % 2 === 0) {
    player = 'O'
    notPlayer = 'X'
  } else {
    player = 'X'
    notPlayer = 'O'
  }
  if (i < 10) {
    if (($('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      gameWon(player)
    } else if (($('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      gameWon(player)
    } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      gameWon(player)
    } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
      gameWon(player)
    } else if (($('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
      gameWon(player)
    } else if (($('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
      gameWon(player)
    } else if (($('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
      gameWon(player)
    } else if (($('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text()) && ($('#box7').text() === 'X' || $('#box7').text() === 'O')) {
      gameWon(player)
    } else if (i === 9) {
      tie()
    } else {
      $('#display').text(notPlayer + '\'s turn')
    }
  }
}
const playerGo = function () {
  event.preventDefault()
  $(this).text(turn[i])
  crntBoard[i] = turn[i]
  console.log(crntBoard)
  $(this).attr('disabled', 'disabled')
  i++
  checkForWin()
}
const newGame = function () {
  event.preventDefault()
  crntBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').text(null)
  $('.box').attr('disabled', false)
  $('#display').text(null)
  $('#resetBoard').addClass('btn-danger')
  $('#display').text("X's turn")
  i = 0
}
const changeDisplay = function () {
  $('#display').text('Please Sign in')
}
module.exports = {
  playerGo,
  newGame,
  changeDisplay
}
