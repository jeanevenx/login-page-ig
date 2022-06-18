let imageIndex = 0;
const imageId = [first, second, third, fourth];


setInterval(() => {
    imageId[2].classList.remove('hide-img');
    makeImageTransition(imageId[imageIndex]);

    imageIndex++;

    if(imageIndex > 3) {
        imageIndex = 0;
    } 

}, 5000);




imageId[imageIndex].classList.add('show-img');

const makeImageTransition = (imageElement) => {
    console.log('Above:', imageIndex);

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


