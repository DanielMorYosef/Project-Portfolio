const gameboard= document.getElementById("gameboard");
let playerLifeCount= document.querySelector("span");
let playerLifeNum= 5;
const btnReset= document.getElementById("restarter");
let clickedCard=[];
let counter=0;
let winCounter=0;
let playerWins= document.getElementById('playerWins');


playerWins.innerHTML=`Wins: ${winCounter}`
playerLifeCount.textContent= `${playerLifeNum}`;

const getData=()=> [
    {imgSrc:'img/Bulbasaur.png', name:'Bulbasor'},
    {imgSrc:'img/Charmander.png', name:'Charmander'},
    {imgSrc:'img/Squirtle.png', name:'Squirtle'},
    {imgSrc:'img/Pikachu.png', name:'Pikachu'},
    {imgSrc:'img/Jigglypuff.png', name:'Jigglypuff'},
    {imgSrc:'img/Abra.png', name:'Abra'},
    {imgSrc:'img/Dartini.png', name:'Dartini'},
    {imgSrc:'img/Mew.png', name:'Mew'},
    {imgSrc:'img/Bulbasaur.png', name:'Bulbasor'},
    {imgSrc:'img/Charmander.png', name:'Charmander'},
    {imgSrc:'img/Squirtle.png', name:'Squirtle'},
    {imgSrc:'img/Pikachu.png', name:'Pikachu'},
    {imgSrc:'img/Jigglypuff.png', name:'Jigglypuff'},
    {imgSrc:'img/Abra.png', name:'Abra'},
    {imgSrc:'img/Dartini.png', name:'Dartini'},
    {imgSrc:'img/Mew.png', name:'Mew'},
]

const randomize=()=> {
    const cardData= getData();
    cardData.sort(() =>Math.random()-0.5);
    return cardData
}

const cardMaker= () =>{
    const cardData= randomize();
    cardData.forEach((item)=> {
        const card= document.createElement("div");
        const face= document.createElement("img");
        const back= document.createElement("img");
        card.classList="card";
        face.classList="face";
        back.classList="back";
        gameboard.appendChild(card);
        card.appendChild(face);
        face.src= item.imgSrc;
        back.src= './img/cardBack.png';
        card.addEventListener('click',checkMatch);
        
        setTimeout(()=>{
        face.classList.add('flip');
        card.appendChild(back);
        },1000)
    })
}


function checkMatch(){
    let chosenCardSrc= this.querySelector('.face').src;
    let chosenCardFace=this.querySelector('.face');
    let chosenCardBack=this.querySelector('.back');
    chosenCardBack.classList.add('flip');
    chosenCardFace.classList.remove('flip');

    clickedCard.push({
        face:chosenCardFace,
        back:chosenCardBack,
        src:chosenCardSrc
    });
    if(clickedCard.length==2){
        if(clickedCard[0].src==clickedCard[1].src){
            clickedCard=[];
            counter++;
            if (counter==8){
                setTimeout(()=>{
                    winCounter++;
                    saveWin();
                alert("YOU WIN!!")
                    setTimeout(init,1500);    
                },1000)
            }
        } else{
            setTimeout(()=>{
                clickedCard.forEach((clicked)=>{
                    clicked.face.classList.add('flip')
                    clicked.back.classList.remove('flip')
                })
                clickedCard=[];
            },1000)
            playerLifeNum=playerLifeNum-1;
            playerLifeCount.textContent= `${playerLifeNum}`;
            checkLose()
        }
    }
}


function checkLose(){
    if(playerLifeNum==0){
        alert('YOU LOST!');
        init()
    }
}
function saveWin(){
    localStorage.setItem('WinCount',winCounter)
}

function loadWins(){
    let savedWins=parseInt(localStorage.getItem('WinCount'));
    if (!isNaN(savedWins)) {
        winCounter = savedWins;
        playerWins.innerHTML = `Wins: ${savedWins}`;
    }
}

function clearGameboard() {
    while(gameboard.firstChild){
        gameboard.removeChild(gameboard.firstChild);
    }
    playerLifeNum=5;
    playerLifeCount.textContent=playerLifeNum;
    counter=0;
}

function init(){
    clearGameboard()
    loadWins()
    cardMaker()
}


cardMaker();
btnReset.addEventListener("click",init);

document.addEventListener('DOMContentLoaded', loadWins);