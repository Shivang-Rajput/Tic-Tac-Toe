let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winPaterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    enableboxs();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
   box.addEventListener("click",() => {
    console.log("clicked")
    if(turnO){
       box.innerText = "O";
       turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
      box.disabled = true;

      chekWinner();
    
   })
});

const disableboxs = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxs = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxs();
};

const chekWinner = () =>{
    for(let pattern of winPaterns){
       let posVal1 = boxes[pattern[0]].innerText;
       let posVal2 = boxes[pattern[1]].innerText;
       let posVal3 = boxes[pattern[2]].innerText;

       if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if(posVal1 === posVal2 && posVal2 === posVal3){
            console.log("winner",posVal1);
            showWinner(posVal1);
        }
       }
    }
}

resetBtn.addEventListener("click",resetGame);
newGamebtn.addEventListener("click",resetGame);





