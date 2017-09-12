'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const logic = require('./game/logic')
const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName('close')[0]
btn.onclick = function () {
  modal.style.display = 'block'
}
span.onclick = function () {
  modal.style.display = 'none'
}
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  $('.box').attr('disabled', 'disabled')
  $('#resetBoard').attr('disabled', 'disabled')
  $('#display').text('Please Sign In')
  $('.initial-hide').hide()
  $('.box').on('click', logic.playerGo)
  $('#resetBoard').on('click', logic.newGame)
})
