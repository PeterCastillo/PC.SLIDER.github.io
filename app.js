const container = document.querySelector('.slideone');
const img = document.querySelector('.slideone img')
const btn = document.querySelectorAll('.btn');
const fragment = document.createDocumentFragment();

let imgs = ['images/card1.jpg','images/card2.jpg','images/card3.jpg','images/card4.jpg','images/card5.jpg','images/card6.jpg','images/card7.jpg','images/card8.jpg','images/card9.jpg','images/card10.jpg'];

let counter = 0;

let imgout = container.children

btn.forEach(element => {
   element.addEventListener('click', () => {
    container.removeChild(imgout[1]);
    if(element === btn[0]){
        counter--;
        if(counter < 0){
            counter = imgs.length - 1;
        }
        let img = document.createElement('img');
        img.src = imgs[counter];
        fragment.appendChild(img);
        container.appendChild(img);
    } else if(element === btn[1]){
        counter++;
        if(counter > imgs.length - 1){
            counter = 0 ;
        }
        let img = document.createElement('img');
        img.src = imgs[counter];
        fragment.appendChild(img);
        container.appendChild(img);
    };
   }); 
});