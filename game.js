let turn = 1; //initial player is 1
let isgameover = false;
let resetButton = document.querySelector(".reset"); //refresh the game from start
const winsConditions = [ //Array of all the possibile conditions of winds. 0,1,3,4...till 8 denotes indexes of 9 boxes 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    //loop throught all winnning conditing to check if any of 8 wining conditions is matched
    winsConditions.forEach( (condition) => {
        if((boxtext[condition[0]].innerText === boxtext[condition[1]].innerText) && (boxtext[condition[2]].innerText === boxtext[condition[1]].innerText) && (boxtext[condition[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[condition[0]].innerText + " Won"
            alert(`Player ${boxtext[condition[0]].innerText} Won`)
            isgameover = true
        }
    });
};


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            if(turn === 1) turn = 2; else turn = 1;
            checkWin();
            if (!isgameover) document.getElementsByClassName("info")[0].innerText  = "Current turn: Player " + turn; 
        }
    })
});


resetButton.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Current turn: Player " + turn;
});