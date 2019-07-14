var treasureLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)
var counter = 9


if (treasureLocation === bombLocation) {
    bombLocation = Math.floor(Math.random()*9)
}

function treasure (location) {

    counter = counter - 1
    document.getElementById("counter").innerHTML = counter

    if (treasureLocation === location){
        document.getElementById(location).innerHTML =  window.location.reload() (alert ("YOU WIN 😁"))
    } else if (location === bombLocation){
        document.getElementById(location).innerHTML = window.location.reload() (alert ("YOU LOST 🤡"))
    } else if (counter === 0){
        alert ("OUT OF TURNS")
    } else {
        document.getElementById(location).innerHTML = "Try Again &#x1f332"
    }
}
