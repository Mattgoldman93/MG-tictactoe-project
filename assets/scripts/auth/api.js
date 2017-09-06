'use strict'
const config = require('../config')
const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const createGame = function (data) {
  console.log('createGame function reached')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateGame = function (data) {
  console.log('updateGame api function reached')
  console.log(data)
  const apiUrl = config.apiOrigin + '/games/' + store.game.id
  const tkn = store.user.token
  console.log(tkn)
  console.log('data is ' + data)
  console.log('api url is ' + apiUrl)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const showGames = function (data) {
  console.log('showGames function reached')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  updateGame,
  showGames
}
