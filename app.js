let showPwd = document.querySelector('.show-pwd-btn');

inputText.addEventListener('beforeinput',showHintOfInputTxt);
inputText.addEventListener('beforeinput',activeLoginButton);

// pwd -> password
pwd.addEventListener('beforeinput',showHintOfInputPwd);
pwd.addEventListener('beforeinput',activeLoginButton);
pwd.addEventListener('beforeinput',displayShowBtn);

showPwd.addEventListener('click',showAndHidePwd);
reloaded();


let imageIndex = 0;
const imageId = [first, second, third, fourth];

const transitionInterval = setInterval(() => {
    imageId[2].classList.remove('hide-img');
    makeImageTransition(imageId[imageIndex]);
    
    imageIndex++;
    
    if(imageIndex > 3) {
        imageIndex = 0;
    } 
    
}, 5000);
const columnA = document.querySelector('.col-a');
const width = window.getComputedStyle(columnA).width;

width === 'auto' ? clearInterval(transitionInterval) : transitionInterval;


imageId[imageIndex].classList.add('show-img');

function makeImageTransition(imageElement){

    switch(imageElement){
        case first:
            imageId[3].classList.add('hide-img');
            imageId[3].classList.remove('show-img');
            imageElement.classList.add('show-img');
        break;
        case second:
            imageId[0].classList.remove('show-img');
            imageId[0].classList.add('hide-img');
            imageId[3].classList.remove('hide-img');
            imageElement.classList.add('show-img');
        break;
        case third:
            imageId[1].classList.remove('show-img');
            imageId[1].classList.add('hide-img');
            imageId[0].classList.remove('hide-img');
            imageElement.classList.add('show-img');
        break;
        case fourth:
            imageId[2].classList.remove('show-img');
            imageId[2].classList.add('hide-img');
            imageId[1].classList.remove('hide-img');
            imageElement.classList.add('show-img');
        break;

        }
}

function showHintOfInputTxt(event){
    const hint = document.querySelector('.input-hint');
    hint.classList.add('show-hint');
    inputText.classList.add('onwriting');
    
    if(!event.target.value){
        hint.classList.remove('show-hint');
        inputText.classList.remove('onwriting');
    }
}

function reloaded(){
        const hint = document.querySelector('.input-hint');

        if(inputText.value){
            hint.classList.add('show-hint');
            inputText.classList.add('onwriting');
        }
    
 }
function showHintOfInputPwd(event){
    hintPwd.classList.add('show-hint');
    pwd.classList.add('onwriting');

    if(!event.target.value){
        hintPwd.classList.remove('show-hint');
        pwd.classList.remove('onwriting');
    }
 }

function activeLoginButton(){
    let btnLogin = document.querySelector('.btn-login');
    let isEmailAndPwd = inputText.value !== '' && pwd.value !== '';
    
    if(isEmailAndPwd){
        btnLogin.style.backgroundColor = 'hsla(204, 100%, 48%, 1)'
        btnLogin.style.cursor = 'pointer';
    } else {
        btnLogin.style.backgroundColor = 'hsla(204, 100%, 48%, 0.3)'
        btnLogin.style.cursor = 'initial';
    }
}

function displayShowBtn(e){
    const show = document.querySelector('.show-pwd-btn');
    if(e.target.value){
        show.value = 'Show';
    } else {
        show.value = '';
    }

}     

function showAndHidePwd(){
    if(showPwd.value === 'Show'){
        pwd.type = 'text';
        showPwd.value = 'Hide';
    } else {
        pwd.type = 'password';
        showPwd.value = 'Show';
    }
}
