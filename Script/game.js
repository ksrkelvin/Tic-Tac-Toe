// iniciar as variaveis
var board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o','x'];
let gameOver = false;
let p1Score = 0;
let p2Score = 0;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function handleMove(position){
    
    if(gameOver){
        return
    }

    if(board[position] == ''){

        board[position] = symbols[playerTime];

        gameOver = isWin();
        if(gameOver == false){
            /* Versao Optimizada */
            playerTime = (playerTime == 0) ? 1 : 0;

            /* if(playerTime == 0){
                playerTime = 1
            }else{
                playerTime = 0
            } */
        }
    }   

    return gameOver;
}

function isWin(){

    for(let i = 0; i<winStates.length; i++){
        let seq = winStates[i];

        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];


        if( board[pos0] == board[pos1] &&
            board[pos0] == board[pos2] &&
            board[pos0] != ''){
                return true
            }
    }
    return false
}

function resetando(){
    for (i in board){
        board[i] ='';
    }
    gameOver = false;
    playerTime = 0;
    
    
}

function resultado (){
    if(playerTime == 0){
        p1Score +=1;
    }else{
        p2Score +=1;
    }

    return atualizarResultado()
}

