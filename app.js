let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

let genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let randIdx=Math.floor(Math.random() * 3);//This will generate index between 0 to 2
    return options[randIdx];
}

let drawGame=()=>{
    
    msg.innerText="Game was drawn!! Play Again!!";
    msg.style.backgroundColor="aqua";
}

let showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`You win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
       
        msg.innerText=`You loose!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

let playGame=(userChoice)=>{
    
    //Generate Computer Choice
    let compChoice=genCompChoice();
   

    if(userChoice===compChoice)
    {
        //Draw Game
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissor,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            //rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else
        {
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((ele)=>{
    ele.addEventListener("click",() => {
        let userChoice=ele.getAttribute("id");
        playGame(userChoice);
    })
})