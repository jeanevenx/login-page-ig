let showPwd = document.querySelector('.show-pwd-btn');

inputText.addEventListener('beforeinput',showHintOfInputTxt);
inputText.addEventListener('beforeinput',activeLoginButton);

// pwd -> password
pwd.addEventListener('beforeinput',showHintOfInputPwd);
pwd.addEventListener('beforeinput',activeLoginButton);
pwd.addEventListener('beforeinput',displayShowBtn);

showPwd.addEventListener('click',showAndHidePwd);
reloaded();

const imageId = [
    document.querySelector('#first'), 
    document.querySelector('#second'), 
    document.querySelector('#third'), 
    document.querySelector('#fourth')
];

let imageIndex = 0;
imageId[imageIndex].classList.add('show-img');

// const columnA = document.querySelector('.col-a');
// const width = window.getComputedStyle(columnA).width;

setInterval(() => {
  imageId.forEach((image) => {
    image.classList.remove('show-img');
    image.classList.add('hide-img');
  });

  imageId[imageIndex].classList.remove('hide-img');
  imageId[imageIndex].classList.add('show-img');

  imageIndex = (imageIndex + 1) % imageId.length;
}, 5000);



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
