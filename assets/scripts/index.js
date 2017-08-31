'use strict'

// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
const turn = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
let i = 0
$(() => {
  $('button').on('click', function () {
    event.preventDefault()
    console.log('button works')
    // replace x w a variable with value of 'X' or 'O' (turn?)
    $(this).text(turn[i])
    $(this).attr('disabled', 'disabled')
    i++
  })
})

// find a way to record which is where
// 'X's

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
