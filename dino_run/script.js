const dino = document.querySelector('.dino');
const back = document.querySelector('.back');
let position = 0;
let isJumping = false

function userKey(event) {

    if (event.keyCode == 32) {
        if(!isJumping) {
            jump();
        }
    }   
}

function jump() {
    isJumping = true

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval)
                    isJumping = false
                }else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }  
            }, 15)
        } else {
            //Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        } 
    }, 20);  
}

function createCactos() {
    const cactos = document.createElement('div');
    let cactosPosition = 1400;
    let randomTime = Math.random() * 6000;

    cactos.classList.add('cactos');
    cactos.style.left = 1400 + 'px';
    back.appendChild(cactos);

    let leftInterval = setInterval(() => {
        
        if(cactosPosition < -60) {
            clearInterval(leftInterval);
            back.removeChild(cactos)
        }else if  (cactosPosition > 0 && cactosPosition < 60 && position < 60) {
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo </h1>'; 
        } 
        else {
            cactosPosition -= 10;
            cactos.style.left = cactosPosition + 'px';
        }
    }, 20)

    setTimeout(createCactos, randomTime);
}


createCactos();
document.addEventListener('keyup', userKey);


