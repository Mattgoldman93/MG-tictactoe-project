'use strict'
const store = require('../store')
// const logic = require('../game/logic')
const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('Successfully signed up, go ahead and sign in!')
  $('#message').fadeOut(1800)
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').show()
  $('#message').text('You messed up')
  $('#message').fadeOut(1800)
}
const signInSuccess = function (data) {
  $('#siMessage').show()
  $('#siMessage').text('Success!')
  $('#resetBoard').attr('disabled', false)
  $('#resetBoard').addClass('btn-success').removeClass('btn-danger')
  $('#resetBoard').text('Play')
  $('#display').text('Press Play!')
  $('.initial-hide').show()
  $('.secondary-hide').hide()
  $('#siMessage').fadeOut(1800)
  store.user = data.user
}
const signInFailure = function (error) {
  console.error(error)
  $('#siMessage').show()
  $('#siMessage').text('You messed up')
  $('#siMessage').fadeOut(1800)
}

const changePasswordSuccess = function (data) {
  $('#cpwMessage').show()
  $('#cpwMessage').text('Password changed!')
  $('#cpwMessage').fadeOut(1800)
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#cpwMessage').show()
  $('#cpwMessage').text('You messed up')
  $('#cpwMessage').fadeOut(1800)
}

const signOutSuccess = function (data) {
  $('#soMessage').show()
  $('#soMessage').text('Signed out!')
  $('.box').attr('disabled', 'disabled')
  $('#resetBoard').attr('disabled', 'disabled')
  $('#resetBoard').addClass('btn-danger').removeClass('btn-success')
  $('#resetBoard').text('Please sign in to play again')
  $('#display').text('Thanks for Playing')
  $('.initial-hide').hide()
  $('.secondary-hide').show()
  $('#soMessage').fadeOut(1800)
  $('.box').text(null)
  store.user = null
}
const signOutFailure = function (error) {
  console.error(error)
  $('#soMessage').show()
  $('#soMessage').text('You messed up')
  $('#soMessage').fadeOut(1800)
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
  $('#sgMessage').show()
  $('#sgMessage').text('Take a Look! ' + data.games.length + ' games played')
  $('#sgMessage').fadeOut(5000)
}
const showGamesFailure = function (error) {
  console.error(error)
  $('#sgMessage').show()
  $('#sgMessage').text('Something went wrong.')
  $('#sgMessage').fadeOut(1800)
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
