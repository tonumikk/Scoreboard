//Create 2 variables for holding score
//Create 2 variables for replacing scores
//Create 6 functions for adding scores
//Create 2 location to replace text
let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function add1Home(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log(homeScore)
}
function add2Home(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function add3Home(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function add1Guest(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function add2Guest(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function add3Guest(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}