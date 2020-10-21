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

