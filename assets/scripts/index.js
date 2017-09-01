'use strict'

// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
const checkForWin = function () {
  let player
  if (i < 10 && i % 2 === 0) {
    player = 'O'
  } else {
    player = 'X'
  }
  if (i < 10) {
    if (($('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (($('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (($('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (($('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (($('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (($('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text()) && ($('#box7').text() === 'X' || $('#box7').text() === 'O')) {
      $('#display').text(player + ' wins!')
      i = 10
    } else if (i === 9) {
      $('#display').text('no winner this time 😢')
    }
  }
}

const turn = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
let i = 0
$(() => {
  $('.box').on('click', function () {
    event.preventDefault()
    $(this).text(turn[i])
    $(this).attr('disabled', 'disabled')
    i++
    checkForWin()
  })
})

// find a way to record which is where
// 'X's will all be even and O will all be odd
// find way to pull value as content and store in new variable that can be compared
// for click function

// $(() => {
//   setAPIOrigin(location, config)
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

/*
Once turn is over Value of player is set to = to
the following will be code that will check which player is passed in
 function (player) {
    turn = null
    if (player = player_x){
    turn = 'X'
  } else {
  turn = 'O'
  //now variable turn will be passed into new function tentatively called post()
  post(turn)
}
}

let turn = x
*/
