let cardNumber= [];
let randomNum=0;
let squareMaker=[];

let cardNumberRival= [];
let randomNumRival=0;
let squareMakerRival=[];

const maxRolls = 10;
let rolledNumbers = [];
let counter=0;

function cardGenerate(){
    for (i=0 ;i<25;i++){
        randomNum=Math.floor(Math.random() * 51);
        do {
            randomNum = Math.floor(Math.random() * 51);
        } while (cardNumber.includes(randomNum));
        cardNumber.push(randomNum);
        console.log(cardNumber[i]);
        squareMaker=document.createElement("div");
        squareMaker.id='box'+i;
        squareMaker.innerHTML=cardNumber[i];
        document.getElementById("card").appendChild(squareMaker);
    }
    for (i=0 ;i<25;i++){
        randomNumRival=Math.floor(Math.random() * 51);
        do {
            randomNumRival = Math.floor(Math.random() * 51);
        } while (cardNumberRival.includes(randomNumRival));
        cardNumberRival.push(randomNumRival);
        console.log(cardNumberRival[i]);
        squareMakerRival=document.createElement("div");
        squareMakerRival.id='xob'+i;
        squareMakerRival.innerHTML=cardNumberRival[i];
        document.getElementById("rival").appendChild(squareMakerRival);
    }
}

document.addEventListener('onload', cardGenerate());

let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetGame);

let winP=document.getElementById('winsP');

let btn= document.getElementById('btn');
btn.addEventListener('click',roll)


//reseting inputboxs
function inputReset(){
    document.getElementById('number-chosen').value=" ";
    document.getElementById('number-current').value=" ";
}
// rolling numbers

function roll(){
    let rolledNum= Math.floor(Math.random() * 51);
    console.log(rolledNum);
    rolledNumbers.push(rolledNum);
    if (rolledNumbers.length > maxRolls) {
        rolledNumbers.shift();
    }
    document.getElementById("number-chosen").value= rolledNumbers.join(", ");
    document.getElementById("number-current").value=rolledNum;
    
    for(j=0;j<25;j++){
        let currentBox = document.getElementById('box' + j);
        if(rolledNum==parseInt(cardNumber[j])){
            currentBox.classList.add('colored');
        }
    }
    // Rival
    for(j=0;j<25;j++){
        let currentXob = document.getElementById('xob' + j);
        if(rolledNum==parseInt(cardNumberRival[j])){
            currentXob.classList.add('coloredRival');
        }
    }
    // checking for win
function winCheck(){
    let PlayerRow0=box0.classList.contains('colored');
    let PlayerRow1=box1.classList.contains('colored');
    let PlayerRow2=box2.classList.contains('colored');
    let PlayerRow3=box3.classList.contains('colored');
    let PlayerRow4=box4.classList.contains('colored');
    let PlayerRow5=box5.classList.contains('colored');
    let PlayerRow6=box6.classList.contains('colored');
    let PlayerRow7=box7.classList.contains('colored');
    let PlayerRow8=box8.classList.contains('colored');
    let PlayerRow9=box9.classList.contains('colored');
    let PlayerRow10=box10.classList.contains('colored');
    let PlayerRow11=box11.classList.contains('colored');
    let PlayerRow12=box12.classList.contains('colored');
    let PlayerRow13=box13.classList.contains('colored');
    let PlayerRow14=box14.classList.contains('colored');
    let PlayerRow15=box15.classList.contains('colored');
    let PlayerRow16=box16.classList.contains('colored');
    let PlayerRow17=box17.classList.contains('colored');
    let PlayerRow18=box18.classList.contains('colored');
    let PlayerRow19=box19.classList.contains('colored');
    let PlayerRow20=box20.classList.contains('colored');
    let PlayerRow21=box21.classList.contains('colored');
    let PlayerRow22=box22.classList.contains('colored');
    let PlayerRow23=box23.classList.contains('colored');
    let PlayerRow24=box24.classList.contains('colored');
    
    if (PlayerRow0&&PlayerRow1&&PlayerRow2&&PlayerRow3&&PlayerRow4==1||PlayerRow5&&PlayerRow6&&PlayerRow7&&PlayerRow8&&PlayerRow9==1|| PlayerRow10&&PlayerRow11&&PlayerRow12&&PlayerRow13&&PlayerRow14==1||PlayerRow15&&PlayerRow16&&PlayerRow17&&PlayerRow18&&PlayerRow19==1||PlayerRow20&&PlayerRow21&&PlayerRow22&&PlayerRow23&&PlayerRow24==1) {
            alert("YOU WIN");
            counter++;
            saveWin();
            winP.innerHTML=`Wins: ${counter}`
            resetGame();
    }

    // Check for win column
    let PlayerColumn0=box0.classList.contains('colored');
    let PlayerColumn1=box1.classList.contains('colored');
    let PlayerColumn2=box2.classList.contains('colored');
    let PlayerColumn3=box3.classList.contains('colored');
    let PlayerColumn4=box4.classList.contains('colored');
    let PlayerColumn5=box5.classList.contains('colored');
    let PlayerColumn6=box6.classList.contains('colored');
    let PlayerColumn7=box7.classList.contains('colored');
    let PlayerColumn8=box8.classList.contains('colored');
    let PlayerColumn9=box9.classList.contains('colored');
    let PlayerColumn10=box10.classList.contains('colored');
    let PlayerColumn11=box11.classList.contains('colored');
    let PlayerColumn12=box12.classList.contains('colored');
    let PlayerColumn13=box13.classList.contains('colored');
    let PlayerColumn14=box14.classList.contains('colored');
    let PlayerColumn15=box15.classList.contains('colored');
    let PlayerColumn16=box16.classList.contains('colored');
    let PlayerColumn17=box17.classList.contains('colored');
    let PlayerColumn18=box18.classList.contains('colored');
    let PlayerColumn19=box19.classList.contains('colored');
    let PlayerColumn20=box20.classList.contains('colored');
    let PlayerColumn21=box21.classList.contains('colored');
    let PlayerColumn22=box22.classList.contains('colored');
    let PlayerColumn23=box23.classList.contains('colored');
    let PlayerColumn24=box24.classList.contains('colored');
    
    if (PlayerColumn0&&PlayerColumn5&&PlayerColumn10&&PlayerColumn15&&PlayerColumn20==1||PlayerColumn1&&PlayerColumn6&&PlayerColumn11&&PlayerColumn16&&PlayerColumn21==1|| PlayerColumn2&&PlayerColumn7&&PlayerColumn12&&PlayerColumn17&&PlayerColumn22==1||PlayerColumn3&&PlayerColumn8&&PlayerColumn13&&PlayerColumn18&&PlayerColumn23==1||PlayerColumn4&&PlayerColumn9&&PlayerColumn14&&PlayerColumn19&&PlayerColumn24==1) {
            alert("YOU WIN");
            counter++;
            saveWin();
            winP.innerHTML=`Wins: ${counter}`
            resetGame();
    }
}
    
    // check for win rival
function winCheckRival(){
    let PlayerRowRival0=xob0.classList.contains('coloredRival');
    let PlayerRowRival1=xob1.classList.contains('coloredRival');
    let PlayerRowRival2=xob2.classList.contains('coloredRival');
    let PlayerRowRival3=xob3.classList.contains('coloredRival');
    let PlayerRowRival4=xob4.classList.contains('coloredRival');
    let PlayerRowRival5=xob5.classList.contains('coloredRival');
    let PlayerRowRival6=xob6.classList.contains('coloredRival');
    let PlayerRowRival7=xob7.classList.contains('coloredRival');
    let PlayerRowRival8=xob8.classList.contains('coloredRival');
    let PlayerRowRival9=xob9.classList.contains('coloredRival');
    let PlayerRowRival10=xob10.classList.contains('coloredRival');
    let PlayerRowRival11=xob11.classList.contains('coloredRival');
    let PlayerRowRival12=xob12.classList.contains('coloredRival');
    let PlayerRowRival13=xob13.classList.contains('coloredRival');
    let PlayerRowRival14=xob14.classList.contains('coloredRival');
    let PlayerRowRival15=xob15.classList.contains('coloredRival');
    let PlayerRowRival16=xob16.classList.contains('coloredRival');
    let PlayerRowRival17=xob17.classList.contains('coloredRival');
    let PlayerRowRival18=xob18.classList.contains('coloredRival');
    let PlayerRowRival19=xob19.classList.contains('coloredRival');
    let PlayerRowRival20=xob20.classList.contains('coloredRival');
    let PlayerRowRival21=xob21.classList.contains('coloredRival');
    let PlayerRowRival22=xob22.classList.contains('coloredRival');
    let PlayerRowRival23=xob23.classList.contains('coloredRival');
    let PlayerRowRival24=xob24.classList.contains('coloredRival');
    if (PlayerRowRival0&&PlayerRowRival1&&PlayerRowRival2&&PlayerRowRival3&&PlayerRowRival4==1||PlayerRowRival5&&PlayerRowRival6&&PlayerRowRival7&&PlayerRowRival8&&PlayerRowRival9==1|| PlayerRowRival10&&PlayerRowRival11&&PlayerRowRival12&&PlayerRowRival13&&PlayerRowRival14==1||PlayerRowRival15&&PlayerRowRival16&&PlayerRowRival17&&PlayerRowRival18&&PlayerRowRival19==1||PlayerRowRival20&&PlayerRowRival21&&PlayerRowRival22&&PlayerRowRival23&&PlayerRowRival24==1) {
        alert("YOU LOSE");
        resetGame();
    }

    let PlayerColumnRival0=xob0.classList.contains('coloredRival');
    let PlayerColumnRival1=xob1.classList.contains('coloredRival');
    let PlayerColumnRival2=xob2.classList.contains('coloredRival');
    let PlayerColumnRival3=xob3.classList.contains('coloredRival');
    let PlayerColumnRival4=xob4.classList.contains('coloredRival');
    let PlayerColumnRival5=xob5.classList.contains('coloredRival');
    let PlayerColumnRival6=xob6.classList.contains('coloredRival');
    let PlayerColumnRival7=xob7.classList.contains('coloredRival');
    let PlayerColumnRival8=xob8.classList.contains('coloredRival');
    let PlayerColumnRival9=xob9.classList.contains('coloredRival');
    let PlayerColumnRival10=xob10.classList.contains('coloredRival');
    let PlayerColumnRival11=xob11.classList.contains('coloredRival');
    let PlayerColumnRival12=xob12.classList.contains('coloredRival');
    let PlayerColumnRival13=xob13.classList.contains('coloredRival');
    let PlayerColumnRival14=xob14.classList.contains('coloredRival');
    let PlayerColumnRival15=xob15.classList.contains('coloredRival');
    let PlayerColumnRival16=xob16.classList.contains('coloredRival');
    let PlayerColumnRival17=xob17.classList.contains('coloredRival');
    let PlayerColumnRival18=xob18.classList.contains('coloredRival');
    let PlayerColumnRival19=xob19.classList.contains('coloredRival');
    let PlayerColumnRival20=xob20.classList.contains('coloredRival');
    let PlayerColumnRival21=xob21.classList.contains('coloredRival');
    let PlayerColumnRival22=xob22.classList.contains('coloredRival');
    let PlayerColumnRival23=xob23.classList.contains('coloredRival');
    let PlayerColumnRival24=xob24.classList.contains('coloredRival');
    
    if (PlayerColumnRival0&&PlayerColumnRival5&&PlayerColumnRival10&&PlayerColumnRival15&&PlayerColumnRival20==1||PlayerColumnRival1&&PlayerColumnRival6&&PlayerColumnRival11&&PlayerColumnRival16&&PlayerColumnRival21==1|| PlayerColumnRival2&&PlayerColumnRival7&&PlayerColumnRival12&&PlayerColumnRival17&&PlayerColumnRival22==1||PlayerColumnRival3&&PlayerColumnRival8&&PlayerColumnRival13&&PlayerColumnRival18&&PlayerColumnRival23==1||PlayerColumnRival4&&PlayerColumnRival9&&PlayerColumnRival14&&PlayerColumnRival19&&PlayerColumnRival24==1) {
        alert("YOU LOSE");
        resetGame();
    }
}
    winCheck();
    winCheckRival();
}
function resetGame() {
    cardNumber = [];
    cardNumberRival = [];
    clearBoard('card');
    clearBoard('rival');
    inputReset();
    cardGenerate();
}
function clearBoard(containerId) {
    let container = document.getElementById(containerId);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function inputReset(){
    document.getElementById('number-chosen').value=" ";
    document.getElementById('number-current').value=" ";
}

function saveWin(){
    localStorage.setItem('winCount', counter);
}

function loadWins(){
    let savedWins=parseInt(localStorage.getItem('winCount'));
    counter=savedWins;
    winP.innerHTML=`Wins: ${savedWins}`;
}

document.addEventListener('DOMContentLoaded', loadWins);