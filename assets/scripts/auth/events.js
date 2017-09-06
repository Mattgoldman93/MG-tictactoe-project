'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onCreateGame = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  console.log('oncreateGame function reached')
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.signInFailure)
}

const onUpdateGame = function (crntIndex, crntValue, over) {
  event.preventDefault()
  const data = {
    'game': {
      'cell': {
        'index': crntIndex,
        'value': crntValue
      },
      'over': over
    }
  }
  console.log(data)
  api.updateGame(data)
}
const onShowGames = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.showGames(data)
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#resetBoard').on('click', onCreateGame)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#show-games').on('click', onShowGames)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
