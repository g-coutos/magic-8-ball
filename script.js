// Array de Frases
const eightBallPhrases = [
    'It is Certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
]

const randomInt = (max) => {

    return Math.floor(Math.random() * max);
}

const pickAPhrase = () => {

    return eightBallPhrases[randomInt(eightBallPhrases.length)];
}

// Capturando elementos
const eightBall = document.getElementById('eightBall');
const divResponse = document.getElementById('divResponse');
const spanAnswer = document.getElementById('spanAnswer');
const header = document.getElementById('header');

const resetResults = () => {
    divResponse.classList = 'answer__none';
    spanAnswer.classList = 'answer__none';
}

const shakeBall = () => {
    eightBall.style.animation = 'shake 1s';
}

const resetShake = () => {
    eightBall.style.animation = '';
}

const showResults = () => {
    spanAnswer.innerText = pickAPhrase();

    divResponse.classList = 'div__response';
    spanAnswer.classList = 'box__answer';
}

window.onload = function() {
    eightBall.style.animation = 'arising 3s';
    header.style.animation = 'arising 5s';
}

const disabledTrueButton = () => {
    document.getElementById('activateButton').disabled = true;
}

const disabledFalseButton = () => {
    document.getElementById('activateButton').disabled = false;
}



// Selecionando o button
const bttn = document.getElementById('activateButton');

// Mostrando os resultados
bttn.addEventListener('click', () => {
    shakeBall();
    disabledTrueButton();
    setTimeout(resetShake, 2000);
    setTimeout(showResults, 2000);
    setTimeout(resetResults, 7000);
    setTimeout(disabledFalseButton, 8000);
});


