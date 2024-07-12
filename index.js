let homeScore = 0
let guestScore = 0

function reset(){
    homeScore = 0
    guestScore = 0
    document.getElementById("homeScore").textContent = homeScore;
    document.getElementById("guestScore").textContent = guestScore;
}

function incrementHome1(){
    homeScore += 1;
    document.getElementById("homeScore").textContent = homeScore;
}
function incrementHome2(){
    homeScore += 2;
    document.getElementById("homeScore").textContent = homeScore;
}
function incrementHome3(){
    homeScore += 3;
    document.getElementById("homeScore").textContent = homeScore;
}
function incrementGuest1(){
    guestScore += 1;
    document.getElementById("guestScore").textContent = guestScore;
}
function incrementGuest2(){
    guestScore += 2;
    document.getElementById("guestScore").textContent = guestScore;
}
function incrementGuest3(){
    guestScore += 3;
    document.getElementById("guestScore").textContent = guestScore;
}


//   function leaderHighlight() {
//             document.querySelector(".incBtn")
//                 .addEventListener("click", function () {
//                     if ((homeScore > guestScore)){
//                          console.log("HOME LIGHTING!!")
//                         }
//                     if (guestScore > homeScore){
//                      console.log("GUEST LIGHTING!!")
// }
//                     alert("Button Clicked");
//                 });
//         }


// if ((homeScore > guestScore)){
//     homeLeaderHighlight()
// }
// if (guestScore > homeScore){
//     guestLeaderHighlight()
// }

// function homeLeaderHighlight(){
//     console.log("HOME LIGHTING!!")
// }
// function guestLeaderHighlight(){
//     console.log("GUEST LIGHTING!!")
// }

// document.getElementById("incBtn").addEventListener("click", function() {
// //   alert("Hello World!");
//   console.log("working")
// });