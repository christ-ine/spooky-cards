class AudioController {
    constructor(){
        this.bgMusic = new Audio("Assets/Audio/creepy.mp3");
        this.flipSound = new Audio("Assets/Audio/flip.mp3");
        this.matchSound = new Audio("Assets/Audio/match.wav");
        this.victorySound = new Audio("Assets/Audio/victory.mp3");
        this.gameOverSound = new Audio("Assets/Audio/gameover.mp3");
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }   

    startMusic(){
        this.bgMusic.play();
    }

    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }

    flip(){
        this.flipSound.play();
    }

    match(){
        this.matchSound.play();
    }

    victory(){
        this.stopMusic();
        this.victorySound.play();
    }

    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remainer');
        this.ticker = document.getElementById('flips');
        this.AudioController = new AudioController();
    }

    startGame(){
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.AudioController.startMusic();
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500)
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    
}



if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}



function ready (){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            //game.startGame();
        })
    })

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    })
}

