//reading html elements
const body = document .querySelector('body');
const ba = document.getElementById('ba');
const bb = document.getElementById('bb');
const button = document.getElementsByClassName('buttonJ');
const bcb = document.querySelector('#bcb h2');
const bda = document.getElementsByClassName('bda');
const bdaa = document.getElementsByClassName('bdaa');
const bdab = document.getElementsByClassName('bdab');
const c = document.getElementById('c');
const caspan = document.querySelectorAll('#ca span');
const cb = document.getElementById('cb');
const cbbh = document.querySelector('#cb button h2');
const d = document.getElementById('d');
const daba = document.getElementsByClassName('daba');

// required varibles

var a = new Array(3);
var click = new Array(9);
var player = 0;
var turn = 0;
var result = "not won";
var routput = new Array(4);
var roundcounter = 1;
var score = [0, 0];

// sessionstoraage variables
var sessionstring = sessionStorage.getItem("sendvalues");
var getvalues = JSON.parse(sessionstring);

bcb.innerHTML = getvalues[1];

bdaa[0].innerHTML = getvalues[0][0];
bdaa[1].innerHTML = getvalues[0][1];

bdab[0].innerHTML = score[0];
bdab[1].innerHTML = score[1];

//styling html elements outside functions
bda[0].style.width = "300px";
bda[0].style.border = "1px solid black";


//2D array and intializing them
for (let i = 0; i < routput.length; i++) {
    routput[i] = new Array(4);
    
}

routput[0][0] = "WINNER";
routput[0][1] = "is";
routput[0][2] = "";
routput[0][3] = "Congrats !!"

routput[1][0] = "TIE"
routput[1][1] = "Plz play again"
routput[1][2] = ""
routput[1][3] = ""

routput[2][0] = "WINNER"
routput[2][1] = "of this round is"
routput[2][2] = ""
routput[2][3] = "Congrats !!"

routput[3][0] = "TIE"
routput[3][1] = "this round end in a tie"
routput[3][2] = ""
routput[3][3] = ""


for (let i = 0; i < a.length; i++) {
    a[i] = new Array(3);
}

for (let i = 0; i < click.length; i++) {
    click[i] = 0;
}


function initialize(){
    for(let i =0;i<9;i++)
    {  
            button[i].innerHTML = "";
            click[i] = 0;
        
    }
    for(let i =0;i<3;i++)
    {  
        for(let j =0;j<3;j++)
            a[i][j] = -1;
        
    }
    player = 0;
    result = "not won";
    turn = 0;
    c.style.display = "none";
    caspan[2].innerHTML = "";
}


// required functions
function styleoutput() {
    if (player == 0) {
        bda[0].style.width = "300px";
        bda[0].style.border = "1px solid black";
        bda[1].style.width = "270px";
        bda[1].style.border = "1px solid white";
    } else if (player == 1) {
        bda[1].style.width = "300px";
        bda[1].style.border = "1px solid black";
        bda[0].style.width = "270px";
        bda[0].style.border = "1px solid white";
    }
}

function input(row, column, clickValue) {
   if (clickValue == 0 && result === "not won" && turn < 10) {
    if (player == 0) {
        a[row][column] = 1
        console.log(turn + 1)
        turn++;
    } else if(player == 1){
        a[row][column] = 0;
        console.log(turn + 1)
        turn++;
    }
   }
}

function process(row, column) {
    if(turn > 4 && turn < 10) {
        if (row == 0 && column == 0) {
            if (a[0][0] == a[0][1] && a[0][1] == a[0][2]) {
                result = "won";
            }
            else if (a[0][0] == a[1][0] && a[1][0] == a[2][0]) {
                result = "won";
            }
            else if (a[0][0] == a[1][1] && a[1][1] == a[2][2]) {
                result = "won";
            }
        }
        else if (row == 0 && column == 1) {
            if (a[0][0] == a[0][1] && a[0][1] == a[0][2]) {
                result = "won";
            }
            else if (a[0][1] == a[1][1] && a[1][1] == a[2][1]) {
                result = "won";
            }
        }
        else if (row == 0 && column == 2) {
            if (a[0][0] == a[0][1] && a[0][1] == a[0][2]) {
                result = "won";
            }
            else if (a[0][2] == a[1][1] && a[1][1] == a[2][0]) {
                result = "won";
            }
            else if (a[0][2] == a[1][2] && a[1][2] == a[2][2]) {
                result = "won";
            }
        }
        else if (row == 1 && column == 0) {
            if (a[0][0] == a[1][0] && a[1][0] == a[2][0]) {
                result = "won";
            }
            else if (a[1][0] == a[1][1] && a[1][1] == a[1][2]) {
                result = "won";
            }
        }
        else if (row == 1 && column == 1) {
            if (a[0][0] == a[1][1] && a[1][1] == a[2][2]) {
                result = "won";
            }
            else if (a[0][1] == a[1][1] && a[1][1] == a[2][1]) {
                result = "won";
            }
            else if (a[0][2] == a[1][1] && a[1][1] == a[2][0]) {
                result = "won";
            }
            else if (a[1][0] == a[1][1] && a[1][1] == a[1][2]) {
                result = "won";
            }
        }
        else if (row == 1 && column == 2) {
            if (a[1][0] == a[1][1] && a[1][1] == a[1][2]) {
                result = "won";
            }
            else if (a[0][2] == a[1][2] && a[1][2] == a[2][2]) {
                result = "won";
            }
        }
        else if (row == 2 && column == 0) {
            if (a[0][0] == a[1][0] && a[1][0] == a[2][0]) {
                result = "won";
            }
            else if (a[0][2] == a[1][1] && a[1][1] == a[2][0]) {
                result = "won";
            }
            else if (a[2][0] == a[2][1] && a[2][1] == a[2][2]) {
                result = "won";
            }
        }
        else if (row == 2 && column == 1) {
            if (a[0][1] == a[1][1] && a[1][1] == a[2][1]) {
                result = "won";
            }
            else if (a[2][0] == a[2][1] && a[2][1] == a[2][2]) {
                result = "won";
            }
        }
        else if (row == 2 && column == 2) {
            if (a[0][2] == a[1][2] && a[1][2] == a[2][2]) {
                result = "won";
            }
            else if (a[2][0] == a[2][1] && a[2][1] == a[2][2]) {
                result = "won";
            }
            else if (a[0][0] == a[1][1] && a[1][1] == a[2][2]) {
                result = "won";
            }
        }
    }
}

function output(cell, clickValue) {
    if (result === "not won" && turn < 9) {
        if (clickValue == 0) {
            if (player == 0) {
                button[cell].innerHTML = "O";
                player = 1;
            } else if(player == 1) {
                button[cell].innerHTML = "X";
                player = 0;
            }
        }
        else if (clickValue == 1) {
            alert("Plz choose other button as its has been already clicked")
        }
    }
    else if (result === "not won" && turn == 9) {
        if (clickValue == 0 && roundcounter != getvalues[1]) {
            if (player == 0) {
                button[cell].innerHTML = "O";
                roundcounter += 1;
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[3][0];
                    caspan[1].innerHTML = routput[3][1];
                }, 500);
            } else if(player == 1) {
                button[cell].innerHTML = "X";
                roundcounter += 1;
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[3][0];
                    caspan[1].innerHTML = routput[3][1];
                }, 500);
            }
            cbbh.innerHTML = "START NEW ROUND";
        }
        else if (clickValue == 0 && roundcounter == getvalues[1]) {
            if (player == 0) {
                button[cell].innerHTML = "O";
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[1][0];
                    caspan[1].innerHTML = routput[1][1];
                }, 500);
            } else if(player == 1) {
                button[cell].innerHTML = "X";
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[1][0];
                    caspan[1].innerHTML = routput[1][1];
                }, 500);
            }
            cbbh.innerHTML = "START NEW GAME";
        }
    }
    else if (result === "won") {
        if (clickValue == 0 && roundcounter != getvalues[1]) {
            if (player == 0) {
                button[cell].innerHTML = "O";
                score[0]++;
                bdab[0].innerHTML = score[0];
                roundcounter += 1;
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[2][0];
                    caspan[1].innerHTML = routput[2][1];
                    caspan[2].innerHTML = getvalues[0][0];
                    caspan[3].innerHTML = routput[2][3];
                }, 500);
            } else if(player == 1) {
                button[cell].innerHTML = "X";
                score[1]++;
                bdab[1].innerHTML = score[1];
                roundcounter += 1;
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[2][0];
                    caspan[1].innerHTML = routput[2][1];
                    caspan[2].innerHTML = getvalues[0][1];
                    caspan[3].innerHTML = routput[2][3]
                }, 500);
            }
            cbbh.innerHTML = "START NEW ROUND";
        }
        else if (clickValue == 0 && roundcounter == getvalues[1]) {
            if (player == 0) {
                button[cell].innerHTML = "O";
                score[0]++;
                bdab[0].innerHTML = score[0];
                roundcounter += 1;
            } else if(player == 1) {
                button[cell].innerHTML = "X";
                score[1]++;
                bdab[1].innerHTML = score[1];
                roundcounter += 1;
            }

            if (score[0] > score[1]) {
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[0][0];
                    caspan[1].innerHTML = routput[0][1];
                    caspan[2].innerHTML = getvalues[0][0];
                    caspan[3].innerHTML = routput[0][3];
                }, 500);
            }
            else if (score[0] < score[1]) {
                setTimeout(() => {
                    c.style.display = "flex";
                    caspan[0].innerHTML = routput[0][0];
                    caspan[1].innerHTML = routput[0][1];
                    caspan[2].innerHTML = getvalues[0][1];
                    caspan[3].innerHTML = routput[0][3]
                }, 500);
            }


            cbbh.innerHTML = "START NEW GAME";
        }
    }
}


// all the event listeners
button[0].addEventListener('click', () => {
    input(0, 0, click[0]);
    process (0, 0);
    output(0, click[0]);
    styleoutput();
    click[0] = 1;
})

button[1].addEventListener('click', () => {
    input(0, 1, click[1]);
    process (0, 1);
    output(1, click[1]);
    styleoutput();
    click[1] = 1
})

button[2].addEventListener('click', () => {
    input(0, 2, click[2]);
    process (0, 2);
    output(2, click[2]);
    styleoutput();
    click[2] = 1
})

button[3].addEventListener('click', () => {
    input(1, 0, click[3]);
    process (1, 0);
    output(3, click[3]);
    styleoutput();
    click[3] = 1;
})

button[4].addEventListener('click', () => {
    input(1, 1, click[4]);
    process (1, 1);
    output(4, click[4]);
    styleoutput();
    click[4] = 1;
})

button[5].addEventListener('click', () => {
    input(1, 2, click[5]);
    process (1, 2);
    output(5, click[5]);
    styleoutput();
    click[5] = 1;
})

button[6].addEventListener('click', () => {
    input(2, 0, click[6]);
    process (2, 0);
    output(6, click[6]);
    styleoutput();
    click[6] = 1;
})

button[7].addEventListener('click', () => {
    input(2, 1, click[7]);
    process (2, 1);
    output(7, click[7]);
    styleoutput();
    click[7] = 1;
    
})

button[8].addEventListener('click', () => {
    input(2, 2, click[8]);
    process(2, 2);
    output(8, click[8]);
    styleoutput();
    click[8] = 1;
})

cb.addEventListener('click', () => {
    if (roundcounter > getvalues[1]) {
        window.location.assign("./pages/test.html")
    }
    else if (roundcounter <= getvalues[1]) {
        initialize();
    }
})

ba.addEventListener('click', () => {
    d.style.display = "flex";
})

daba[0].addEventListener('click', () => {
    window.location.assign("./pages/test.html")
})

daba[1].addEventListener('click', () => {
    d.style.display= "none";
})

bb.addEventListener('click', () => {
    initialize();
})
