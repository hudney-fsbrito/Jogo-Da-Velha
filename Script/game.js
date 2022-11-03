//variáveis do jogo
let board = ['', '', '', '', '', '', '', '', ''];
let playerTame = 0;
let symbols = ["o", "x"];

//Faz o movimento do jogador
function handleMove(position) {

    if (board[position] == '') {

        board[position] = symbols[playerTame]

        if (playerTame == 0) {
            playerTame = 1
        } else {
            playerTame = 0
        };

    };
};