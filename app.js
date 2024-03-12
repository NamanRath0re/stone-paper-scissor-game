const choices= document.querySelectorAll(".choice")
const userScorePrint= document.querySelector('#user-score')
const compScorePrint= document.querySelector('#comp-score')
const msg = document.querySelector('#msg')


//user Input
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute('id')
        playGame(userChoice)
    })
})

//Randon computer Input
const genComp=()=>{
    let options=["rock","paper","scissors"]
    const optInd=Math.floor(Math.random()*3)
    return options[optInd]
}

const playGame= (userChoice)=>{
    console.log(userChoice)
    const compChoice= genComp()
    console.log(compChoice)

    if(userChoice === compChoice)
    {
       msg.textContent='Game Drawn! Start New Game';
       msg.style.backgroundColor="#610F74"
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            userWin=compChoice === "paper" ? false : true;
        }else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice)
    }
}


let userScore=0;
let compScore=0;
const showWinner = (userWin,userChoice,compChoice )=>{
    if(userWin){
        userScore++
        userScorePrint.textContent=userScore
        msg.textContent=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++
        compScorePrint.textContent=compScore
       msg.textContent=`You lost! ${compChoice} beats Your ${userChoice}`;
       msg.style.backgroundColor="red"
    }
}

