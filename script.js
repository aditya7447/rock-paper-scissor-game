let buttons=document.querySelectorAll("button");
let result=document.getElementById("result");
let userScore=document.getElementById("userScore");
let computerScore=document.getElementById("computerScore");
let userpoints=0;
let computerpoints=0;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        result_lose.innerText="";
        result_tie.innerText="";
        result_win.innerText="";
        matchTheCondition(button.id,computerRandomValue());
        userScore.innerText=userpoints;
        computerScore.innerText=computerpoints;
    })
})

function computerRandomValue(){
    let arr=['rock','paper','scissor'];
    let index=Math.floor(Math.random()*arr.length);
    return arr[index];
}

function matchTheCondition(userValue,computerValue){
    if(userValue==computerValue){
        result_tie.innerText= "It's a tie!";
        return;
    }
    else if(userValue=="paper" && computerValue=="rock" || userValue=="rock" && computerValue=="scissor" || userValue=="scissor" && computerValue=="paper"){
        userpoints++;
        result_win.innerText = "You Win! " + userValue + " beats "+computerValue;
        return;
    }
    else{
        computerpoints++;
        result_lose.innerText= "You lose! "+ computerValue + " beats "+userValue;
        return;
    }
}

