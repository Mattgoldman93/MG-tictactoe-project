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
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (($('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      $('#display').text(player + ' wins!')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      $('#display').text(player + ' wins!')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
      $('#display').text(player + ' wins!')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (($('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
      $('#display').text(player + ' wins!')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (($('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
      $('#display').text(player + ' wins!')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (($('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
      $('#display').text(player + ' wins!')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (($('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text()) && ($('#box7').text() === 'X' || $('#box7').text() === 'O')) {
      $('#display').text(player + ' wins!')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
      i = 10
    } else if (i === 9) {
      $('#display').text('no winner this time 😢')
      jQuery('#resetBoard').addClass('btn-success').removeClass('btn-danger')
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
  $('#resetBoard').on('click', function () {
    event.preventDefault()
    $('.box').text(null)
    $('.box').attr('disabled', false)
    $('#display').text(null)
    jQuery('#resetBoard').addClass('btn-danger')
    i = 0
  })
})
