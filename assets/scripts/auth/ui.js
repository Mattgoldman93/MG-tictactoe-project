'use strict'
const store = require('../store')
// const logic = require('../game/logic')
const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up, go ahead and sign in!')
  $('#message').fadeOut()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('You messed up')
  $('#message').fadeOut()
}
const signInSuccess = function (data) {
  $('#siMessage').text('Success!')
  $('#resetBoard').attr('disabled', false)
  $('#resetBoard').addClass('btn-success').removeClass('btn-danger')
  $('#resetBoard').text('Play')
  $('#display').text('Press Play!')
  $('.initial-hide').show()
  $('.secondary-hide').hide()
  $('#siMessage').fadeOut()
  store.user = data.user
}
const signInFailure = function (error) {
  console.error(error)
  $('#siMessage').text('You messed up')
  $('#siMessage').fadeOut()
}

const changePasswordSuccess = function (data) {
  $('#cpwMessage').text('Password changed!')
  $('#cpwMessage').fadeOut()
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#cpwMessage').text('You messed up')
  $('#spwMessage').fadeOut()
}

const signOutSuccess = function (data) {
  $('#soMessage').text('Signed out!')
  $('.box').attr('disabled', 'disabled')
  $('#resetBoard').attr('disabled', 'disabled')
  $('#resetBoard').addClass('btn-danger').removeClass('btn-success')
  $('#resetBoard').text('Please sign in to play again')
  $('#display').text('Thanks for Playing')
  $('.initial-hide').hide()
  $('.secondary-hide').show()
  $('#soMessage').fadeOut()
  store.user = null
}
const signOutFailure = function (error) {
  console.error(error)
  $('#soMessage').text('You messed up')
  $('#soMessage').fadeOut()
}
const createGameSuccess = function (data) {
  console.log('game created Successfully')
  store.game = data.game
  console.log(store.game.id)
  $('#display').text('X\'s turn')
  $('.box').attr('disabled', false)
  $('#resetBoard').addClass('btn-danger').removeClass('btn-success')
  $('#resetBoard').text('Reset')
}

const createGameFailure = function (error) {
  console.error(error)
  $('#resetBoard').text('Please try again')
}
const showGamesSuccess = function (data) {
  $('#sgMessage').text('Take a Look! ' + data.games.length + ' games played')
  $('#sgMessage').fadeOut()
}
const showGamesFailure = function (error) {
  console.error(error)
  $('#sgMessage').text('Something went wrong.')
  $('#sgMessage').fadeOut()
}
const updateGameSuccess = function (data) {
}
const updateGameFailure = function (error) {
  console.error(error)
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
  createGameSuccess,
  createGameFailure,
  showGamesSuccess,
  showGamesFailure,
  updateGameSuccess,
  updateGameFailure
}
