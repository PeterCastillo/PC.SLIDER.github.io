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
    };
    if(element === btn[1]){
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

/**/
const btns = document.querySelectorAll('.hola');
const contimg = document.querySelector('.slidermulti-imgs');
const circle = document.querySelectorAll('.butons div');

let child= contimg.children;

const imagenes = [['images/card1.jpg','images/card2.jpg','images/card3.jpg'],['images/card4.jpg','images/card5.jpg','images/card6.jpg'],['images/card8.jpg','images/card9.jpg','images/card10.jpg']]

let contador = 0;

btns.forEach (element => {
    element.addEventListener('click', () => {
        contimg.removeChild(child[0]);
        if(element === btns[0]){
            contador--;
            if(contador < 0){
                contador = imagenes.length - 1;
            }
            add();
        }else if(element === btns[1]){
            contador++;
            if(contador > imagenes.length - 1){
                contador = 0 ;
            }
            add();
        };
        object();
    });
});

circle.forEach(element => {
    element.addEventListener('click', () => {
        contimg.removeChild(child[0]);
        circle.forEach(element => {
            element.classList.remove('active')
        });
        element.classList.add('active')
        if(element === circle[0]){
            contador =0;
            add();
        }else if(element === circle[1]){
            contador =1;
            add();
        }else if(element === circle[2]){
            contador =2;
            add();
        };
    });
});

let add = () => {
    let content = `
    <img src="${imagenes[contador][0]}" alt="img">
    <img src="${imagenes[contador][1]}" alt="img">
    <img src="${imagenes[contador][2]}" alt="img">
    `
    let div = document.createElement('div')
    div.innerHTML = content;
    fragment.appendChild(div);
    contimg.appendChild(div);
};

const  object = () => {
    circle.forEach(element => {
        element.classList.remove('active')
    });
    if(contador == 0){
        circle[0].classList.add('active')
    }else if(contador == 1){
        circle[1].classList.add('active')
    }else if(contador == 2){
        circle[2].classList.add('active')
    }
}