
let usescore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

const user_score=document.querySelector("#user_score");
const comp_score=document.querySelector("#comp_score");

const text=document.querySelector(".message");
// const message_container=document.querySelector(".message-container");

const generateComputerChoice=()=>{

    const arr=["rock" , "paper" , "sessiors"];

    const idx=Math.floor(Math.random() *3);
    return arr[idx];

}
const com_talk=document.querySelector("#com_talk");
const com_decission=(userChoice , userwin)=>{{

    if(userChoice==="rock"){
        com_talk.innerText = userwin ? `Computer choose scissors` : ` Computer choose paper`;
    }else if(userChoice==="paper"){
        com_talk.innerText = userwin ? `Computer choose rock` : ` Computer choose scissors`;
    }else{
        com_talk.innerText = userwin ? `Computer choose paper` : ` Computer choose rock`;
    }
}


}

const drawGame=()=>{
    text.innerText="Game is Draw"
    text.style.backgroundColor="rgb(255 , 255 , 0)"
}

const showmesSAGE=(userwin)=>{

    if(userwin){
        usescore++;
        text.innerText="you won"
        text.style.backgroundColor="green"
        user_score.innerText=usescore;
    }else{
        computerscore++;
        text.innerText="you lose"
        text.style.backgroundColor="red"
        comp_score.innerText=computerscore;
    }

}

const playgame=(userChoice)=>{

    const computerChoice=generateComputerChoice();

    console.log(userChoice , computerChoice);

    if(userChoice===computerChoice){
        com_talk.innerText=`Computer choose User's Value`
        drawGame();
    }else{
        let userwin=true; 
        if(userChoice==="rock"){
            userwin = computerChoice==="paper" ? false: true;
        }else if(userChoice=="paper"){
            userwin=computerChoice==="rock" ? true : false;
        }else{// sessiors
            userwin=computerChoice==="rock" ? false : true;
        }
        showmesSAGE(userwin);
        com_decission(userChoice , userwin);

    }




     
}

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {

        const userChoice  = choice.getAttribute("id");

        // const userChoice=event.currentTarget.getAttribute("id");

        playgame(userChoice);


    }, false);
});
