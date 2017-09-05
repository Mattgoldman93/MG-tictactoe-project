'use strict'
const store = require('../store')
// const logic = require('../game/logic')
const signUpSuccess = function (data) {
  console.log(data)
  console.log('success')
  $('#message').text('Successfully signed up!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('You messed up')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('success')
  $('#siMessage').text('Success!')
  $('#resetBoard').attr('disabled', false)
  $('#resetBoard').addClass('btn-success').removeClass('btn-danger')
  $('#display').text('Press Play!')
  store.user = data.user
}
const signInFailure = function (error) {
  console.error(error)
  $('#siMessage').text('You messed up')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  console.log('success')
  $('#cpwMessage').text('Password changed!')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#cpwMessage').text('You messed up')
}

const signOutSuccess = function (data) {
  console.log(data)
  console.log('signed out!')
  $('#soMessage').text('Signed out!')
  $('.box').attr('disabled', 'disabled')
  $('#resetBoard').attr('disabled', 'disabled')
  $('#resetBoard').addClass('btn-danger').removeClass('btn-success')
  $('#resetBoard').text('Please sign in to play again')
  $('#display').text('Thanks for Playing')

  store.user = null
}
const signOutFailure = function (error) {
  console.error(error)
  $('#soMessage').text('You messed up')
}
const createGameSuccess = function (data) {
  console.log(data)
  console.log('game created Successfully')
  store.game = data.game
  console.log(store.game.id)
  $('#display').text('X\'s turn')
  $('.box').attr('disabled', false)
  $('#resetBoard').addClass('btn-danger').removeClass('btn-success')
  $('#resetBoard').text('Reset')
}

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
}
