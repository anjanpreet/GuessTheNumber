let againBtn=document.querySelector('#again');
let checkBtn=document.querySelector('#check');
let help=document.querySelector('.help');
let inputInput=document.querySelector('#inputNumber');
let magicNumber=document.querySelector('.scoreboard p');
let score=document.querySelector('.score input');
let highScore=document.querySelector('.highscore input');
let scoreValue=parseInt(score.value);
let highScoreValue=parseInt(highScore.value);
let pElement=document.querySelector('.help p');
let container=document.querySelector('.container');
let randomNumber=Math.floor(Math.random() * 20) + 1;
pElement.textContent="All the best 👍";
let count=0;
highscoreValue=0;
highScore.value=0;
scoreValue=20;
score.value=scoreValue;
console.log(typeof(highscoreValue));
console.log(typeof(scoreValue));
againBtn.disabled=true;
checkBtn.addEventListener('click',function(){
    if(inputInput.value>20){
        pElement.innerHTML="Please guess a number between 1 and 20.Click 'Again' to play.";
        return;
    }
    if(inputInput.value<1){
        pElement.innerHTML="Please guess a number between 1 and 20.Click 'Again' to play.";
        return;
    }
    count++;
    score.value=scoreValue;
    if(scoreValue===10){
        pElement.innerHTML="Game Over 😔";
        magicNumber.textContent=randomNumber;
        inputInput.readOnly=true;
        checkBtn.disabled=true;
        againBtn.disabled=false;;
        return;
    }
    if(inputInput.value==randomNumber){
        container.setAttribute('style','background-color:green');
        magicNumber.textContent=randomNumber;
        pElement.innerHTML="Congratulations🎉";
        score.value=scoreValue;
        inputInput.readOnly=true;
        if(scoreValue>highscoreValue){
            highscoreValue=scoreValue;
            highScore.value=highscoreValue;
        }
        againBtn.disabled=false;
        return;
    }else if(inputInput.value<randomNumber){
        pElement.innerHTML="Guess Higher☝️";
        scoreValue--;
        score.value=scoreValue;
    }else{
        pElement.innerHTML="Guess Lower👇";
        scoreValue--;
        score.value=scoreValue;
    }
});

againBtn.addEventListener('click',function(){
    container.setAttribute('style','background-color:black');
    checkBtn.disabled=false;
    pElement.innerHTML="All the best 👍";
    randomNumber=Math.floor(Math.random() * 20) + 1;
    magicNumber.textContent='?';
    count=0;
    inputInput.readOnly=false;
    inputInput.value=1;
    if(highScoreValue<scoreValue){
        highscoreValue=scoreValue;
        highScore.value=highscoreValue;
    }
    highScore.value=highscoreValue;
    scoreValue=20;
    score.value=scoreValue;
})