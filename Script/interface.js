document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener("click", handleClick);
        

    })


})

function handleClick(event){

    let square = event.target;
    let position = square.id;    

    if (handleMove(position)){  
        resultado()
        
        setTimeout(()=>{
            alert(`o vencedor é ${symbols[playerTime]}`)
        },10)
        
    }
    updateSquare(position);
    player(playerTime)
    
    

}
/* versao Optimizada */
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
    
}

let reset = document.getElementById("reset") 

reset.addEventListener("click", function updateSquares(){

    let player = document.getElementById('player')
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
            square.innerHTML = ``
            player.innerHTML = "<div class='o'></div>"
            resetando()
            
        
    })   

})

function player(playerTime){
    let player = document.getElementById('player')
    if (playerTime == 0){
        player.innerHTML = ""
        player.innerHTML = "<div class='o'></div>"

    }else{
        player.innerHTML = "<div class='x'></div>"
    }
    
    
}

function atualizarResultado(){
    let resultado1 = document.getElementById('resultado1')
    let resultado2 = document.getElementById('resultado2')

    resultado1.innerHTML = `Score: ${p1Score }`
    resultado2.innerHTML = `Score: ${p2Score }`
}