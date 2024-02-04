let scoreOne = document.querySelector(".scoreOne");
let scoreTwo = document.querySelector(".scoreTwo");
let info = document.querySelector(".info");
let end = false;

const winCondition = document.querySelector("#winValues");
let winConditionChangeCheck = ""

winCondition.addEventListener ('focus', function (e) {
    winCheck = winCondition.value;
} )

winCondition.addEventListener ('input', function (e) {
    if (winCheck.value !== winCondition.value){
        reset()
    }
} )

//sets the default starting value for winCondition
const startingValue = document.querySelector(".eleven");
startingValue.selected = true;

const tableButtons = document.querySelectorAll(".tableButtons");

for (button of tableButtons) {
    button.addEventListener("click", buttonClicked);
}

function whoIsWining(playerOne, playerTwo) {
    let one = parseInt(playerOne.innerText) + 1;
    let two = parseInt(playerTwo.innerText) + 1;
    if (one > two) {
        info.innerText = "Player One Is winning";
    } else {
        info.innerText = "Player Two Is winning";
    }
}

function reset() {
    scoreOne.innerText = "0";
    scoreTwo.innerText = "0";
    end = false;
    scoreOne.style.color = "";
    scoreTwo.style.color = "";
    info.innerText = "Use the buttons below to keep score";
}

function buttonClicked(e) {
    if (e.target.className === "tableButtons reset") {
        reset()
    } else if (end === true) {
        info.innerText = "Game ended, please click the reset button";
    } else {
        if (e.target.className === "tableButtons playerOne") {
            let value = parseInt(scoreOne.innerText);
            value += 1;
            scoreOne.innerText = value;
            if (scoreOne.innerText === winCondition.value) {
                scoreOne.style.color = "green";
                scoreTwo.style.color = "red";
                info.innerText = "Player One has won";
                end = true;
            }
        } else if (e.target.className === "tableButtons playerTwo") {
            let value = parseInt(scoreTwo.innerText);
            value += 1;
            scoreTwo.innerText = value;
            if (scoreTwo.innerText === winCondition.value) {
                scoreOne.style.color = "red";
                scoreTwo.style.color = "green";
                info.innerText = "Player Two has won";
                end = true;
            }
        }
        whoIsWining(scoreOne, scoreTwo);
    }
}

