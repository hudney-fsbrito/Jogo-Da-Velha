//Evento de click
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    });

});

//Clica e faz o movimento do jogador
function handleClick(event) {
    let square = event.target
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert(`O jogo terminou! \nO ganhador foi ${playerTame == 0 ? "\🛡️" : "\⚔️"} \nCom a jogada: ${sequencia}`);
        });
    };

    uppdateSquare(position);
};

function uppdateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    if (symbols != '') {
        square.innerHTML = `<div class="${symbols}"></div>`
    };
};

//Reinicia o jogo

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("btn");
    button.addEventListener("click", restartGame)
});

function restartGame(event) {
    let button = event.target.id;
    resetGame(button);
    uppdateSquares();
};

function uppdateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.innerHTML = '';
    });
};