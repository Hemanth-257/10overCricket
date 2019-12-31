////////////////TEAM 1//////////////////////

var t1count = 0;
var t1outcount = 0;
var t1ar = [];
let sc;

var i = 0;
var arr = 0;
let t1inbalc = 60;
var t1ballcount = 6;
var aew = 0;

document.getElementById("b1").disabled = false;
document.getElementById("b2").disabled = true;

let players = ["player1", "player2", "player3", "player4", "player5", "player6", "player7", "player8", "player9", "player10"];
document.getElementById("team1scr").value = 0;

document.getElementById("player1t1").value = "";
document.getElementById("player2t1").value = "";
document.getElementById("player3t1").value = "";
document.getElementById("player4t1").value = "";
document.getElementById("player5t1").value = "";
document.getElementById("player6t1").value = "";
document.getElementById("player7t1").value = "";
document.getElementById("player8t1").value = "";
document.getElementById("player9t1").value = "";
document.getElementById("player10t1").value = "";
function t1bat() {


    if (t1inbalc != 0 && t2ballcount>0 && t1outcount < 10) {
        sc = Math.floor(Math.random() * 7);
        t1ar.push(sc);
        t1ballcount--;
        document.getElementById(players[t1outcount] + "t1").value += sc + " ";


        if (sc == 0 || t1ballcount == 0) {
            t1ballcount = 6;
            t1outcount++

        }

        t1inbalc--
        arr = t1ar.reduce((so, os) => {
            return os + so;
        }, 0)
        document.getElementById("team1scr").value = arr;
        console.log(arr)

    }
    else if (t1outcount == 10 || t1inbalc == 0) {
        console.warn("innings Over");
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = false;
        t1ballcount = 0;
        return;
    }


    let t1scoreoj = {
        arr,
        pl1scr: document.getElementById("player1t1").value,
        pl2scr: document.getElementById("player2t1").value,
        pl3scr: document.getElementById("player3t1").value,
        pl4scr: document.getElementById("player4t1").value,
        pl5scr: document.getElementById("player5t1").value,
        pl6scr: document.getElementById("player6t1").value,
        pl7scr: document.getElementById("player7t1").value,
        pl8scr: document.getElementById("player8t1").value,
        pl9scr: document.getElementById("player9t1").value,
        pl10scr: document.getElementById("player10t1").value,
    }

    localStorage.setItem("team1ScrCard", JSON.stringify(t1scoreoj));


}


////////////////TEAM 2//////////////////////

var t2count = 0;
var t2outcount = 0;
var t2ar = [];
let sc2;
let t2ballcount=6;
var arr2 = 0;
var t2inbalc = 60;
let players2 = ["player1", "player2", "player3", "player4", "player5", "player6", "player7", "player8", "player9", "player10"];

document.getElementById("team2scr").value = 0;


document.getElementById("player1t2").value = "";
document.getElementById("player2t2").value = "";
document.getElementById("player3t2").value = "";
document.getElementById("player4t2").value = "";
document.getElementById("player5t2").value = "";
document.getElementById("player6t2").value = "";
document.getElementById("player7t2").value = "";
document.getElementById("player8t2").value = "";
document.getElementById("player9t2").value = "";
document.getElementById("player10t2").value = "";
function t2bat() {


    if (t2inbalc != 0 && t2ballcount>0 && t2outcount < 10) {
        sc2 = Math.floor(Math.random() * 7);
        t2ballcount--;
        t2ar.push(sc2)
        document.getElementById(players2[t2outcount] + "t2").value += sc2 + " "

        if (sc2 == 0 || t2ballcount==0) {
            t2outcount++;
            t2ballcount=6;
        }
        t1inbalc--;
        arr2 = t2ar.reduce((so, os) => {
            return os + so;
        }, 0)
        document.getElementById("team2scr").value = arr2;
        console.log(arr2)
    }
    else if (t2outcount == 10 || t2inbalc == 0) {
        console.warn("innings Over");
        document.getElementById("b2").disabled = true;
        window.open("./scorecard.html");
        return;
    }

    let t2scoreoj = {
        arr2,
        pl1scr: document.getElementById("player1t2").value,
        pl2scr: document.getElementById("player2t2").value,
        pl3scr: document.getElementById("player3t2").value,
        pl4scr: document.getElementById("player4t2").value,
        pl5scr: document.getElementById("player5t2").value,
        pl6scr: document.getElementById("player6t2").value,
        pl7scr: document.getElementById("player7t2").value,
        pl8scr: document.getElementById("player8t2").value,
        pl9scr: document.getElementById("player9t2").value,
        pl10scr: document.getElementById("player10t2").value,
    }

    localStorage.setItem("team2ScrCard", JSON.stringify(t2scoreoj));
}


let timeout;
(function delayedAlert() {
    timeoutID = setTimeout(showAlert, 60000);
  })()
   
  function showAlert() {
    alert(" GAME OVER , Time's UP");
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
  }

