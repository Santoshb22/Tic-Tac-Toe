const boxes = document.querySelectorAll(".box");
const newGame = document.getElementById("new-game");

newGame.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = ""
        box.disabled = false;
    });

    turnO = true;
    document.getElementById("winner").innerText =  "";
})

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "X";
            turnO = false;
            box.disabled = true;
        } else  {
            box.innerText = "O";
            turnO = true;
            box.disabled = true;
        }

        checkWinner();
    })

})

function checkWinner() {
    const winner = document.getElementById("winner");

    for(let pattern of winningPatterns) {
        const [a, b, c] = pattern;

        if(boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[c].innerText === boxes[b].innerText) {
            winner.innerText = `Winner is ${boxes[a].innerText}`;
            disableAllBoxes();
            return 
        }
    }

    const checkDraw = Array.from(boxes).every(box => box.innerText !== "");

    if(checkDraw) {
        winner.innerText = "Match Draw";
    }
}

function disableAllBoxes() {
    boxes.forEach(box => box.disabled = true);
}