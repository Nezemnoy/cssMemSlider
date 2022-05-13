const WRAPPER = document.querySelector('.wrapper');
WRAPPER.innerHTML = '';

const BACK = document.createElement('div');
BACK.classList.add("back");

WRAPPER.appendChild(BACK);

const IMAGE_SCREEN = document.createElement('div');
IMAGE_SCREEN.classList.add("image_screen");
BACK.appendChild(IMAGE_SCREEN);

const IMAGE_WRAP = document.createElement('div');
IMAGE_WRAP.classList.add("image_wrap");
IMAGE_SCREEN.appendChild(IMAGE_WRAP);

const IMAGE_CONTAINER_1 = document.createElement('div');
const IMAGE_CONTAINER_2 = document.createElement('div');
const IMAGE_CONTAINER_3 = document.createElement('div');
const IMAGE_CONTAINER_4 = document.createElement('div');

IMAGE_CONTAINER_1.classList.add("image_container");
IMAGE_CONTAINER_2.classList.add("image_container");
IMAGE_CONTAINER_3.classList.add("image_container");
IMAGE_CONTAINER_4.classList.add("image_container");


IMAGE_CONTAINER_1.setAttribute("id","img_container_1")
IMAGE_CONTAINER_2.setAttribute("id","img_container_2")
IMAGE_CONTAINER_3.setAttribute("id","img_container_3")
IMAGE_CONTAINER_4.setAttribute("id","img_container_4")



IMAGE_WRAP.appendChild(IMAGE_CONTAINER_1);
IMAGE_WRAP.appendChild(IMAGE_CONTAINER_2);
IMAGE_WRAP.appendChild(IMAGE_CONTAINER_3);
IMAGE_WRAP.appendChild(IMAGE_CONTAINER_4);



const IMG_1 = document.createElement('img'); 
IMG_1.classList.add('img');
IMG_1.setAttribute("src","../cssMemSlider/asets/власть пса.jpeg")
IMAGE_CONTAINER_1.appendChild(IMG_1);

const IMG_2 = document.createElement('img'); 
IMG_2.classList.add('img');
IMG_2.setAttribute("src","../cssMemSlider/asets/дюна.jpeg")
IMAGE_CONTAINER_2.appendChild(IMG_2);

const IMG_3 = document.createElement('img'); 
IMG_3.classList.add('img');
IMG_3.setAttribute("src","../cssMemSlider/asets/игра в кальмара.jpeg")
IMAGE_CONTAINER_3.appendChild(IMG_3);

const IMG_4 = document.createElement('img'); 
IMG_4.classList.add('img');
IMG_4.setAttribute("src","../cssMemSlider/asets/полседня дуэль.jpeg")
IMAGE_CONTAINER_4.appendChild(IMG_4);


const TEXT_AND_BUTTONS = document.createElement ('div');
TEXT_AND_BUTTONS.classList.add('text_buttons')
BACK.appendChild(TEXT_AND_BUTTONS);

const TEXT_SCREEN = document.createElement('div');
TEXT_SCREEN.classList.add('text_screen');
TEXT_AND_BUTTONS.appendChild(TEXT_SCREEN);

const TEXT_WRAP = document.createElement('div');
TEXT_WRAP.classList.add('text_wrap');
TEXT_SCREEN.appendChild(TEXT_WRAP);

const TEXT_CONTAINER_1 = document.createElement('div')
TEXT_CONTAINER_1.classList.add('text_container');
TEXT_CONTAINER_1.setAttribute("id","txt_container_1");
TEXT_CONTAINER_1.innerText = 'Власть пса';
TEXT_WRAP.appendChild(TEXT_CONTAINER_1);

const TEXT_CONTAINER_2 = document.createElement('div')
TEXT_CONTAINER_2.classList.add('text_container');
TEXT_CONTAINER_2.setAttribute("id","txt_container_2");
TEXT_CONTAINER_2.innerText = 'Дюна';
TEXT_WRAP.appendChild(TEXT_CONTAINER_2);

const TEXT_CONTAINER_3 = document.createElement('div')
TEXT_CONTAINER_3.classList.add('text_container');
TEXT_CONTAINER_3.setAttribute("id","txt_container_3");
TEXT_CONTAINER_3.innerText = 'Игра в кальмара';
TEXT_WRAP.appendChild(TEXT_CONTAINER_3);

const TEXT_CONTAINER_4 = document.createElement('div')
TEXT_CONTAINER_4.classList.add('text_container');
TEXT_CONTAINER_4.setAttribute("id","txt_container_4");
TEXT_CONTAINER_4.innerText = 'Последняя дуэль';
TEXT_WRAP.appendChild(TEXT_CONTAINER_4);
   
const BUTTONS_WRAP = document.createElement('div');
BUTTONS_WRAP.classList.add('buttons_wrap');
TEXT_AND_BUTTONS.appendChild(BUTTONS_WRAP);

const BUTTON_CONTAINER_1 = document.createElement('div');
BUTTON_CONTAINER_1.classList.add('button_container');
BUTTON_CONTAINER_1.setAttribute("id","button_container_1")
BUTTONS_WRAP.appendChild(BUTTON_CONTAINER_1);

const BUTTON_CONTAINER_2 = document.createElement('div');
BUTTON_CONTAINER_2.classList.add('button_container');
BUTTON_CONTAINER_2.setAttribute("id","button_container_2")
BUTTONS_WRAP.appendChild(BUTTON_CONTAINER_2);

const BUTTON_CONTAINER_3 = document.createElement('div');
BUTTON_CONTAINER_3.classList.add('button_container');
BUTTON_CONTAINER_3.setAttribute("id","button_container_3")
BUTTONS_WRAP.appendChild(BUTTON_CONTAINER_3);

const BUTTON_CONTAINER_4 = document.createElement('div');
BUTTON_CONTAINER_4.classList.add('button_container');
BUTTON_CONTAINER_4.setAttribute("id","button_container_4")
BUTTONS_WRAP.appendChild(BUTTON_CONTAINER_4);



const BUTTON_1 = document.createElement('div');
BUTTON_1.classList.add('button');
BUTTON_1.setAttribute("id","button_1");
BUTTON_1.classList.add('active_btn');
BUTTON_CONTAINER_1.appendChild(BUTTON_1);

const BUTTON_2 = document.createElement('div');
BUTTON_2.classList.add('button');
BUTTON_2.setAttribute("id","button_2");
BUTTON_CONTAINER_2.appendChild(BUTTON_2);

const BUTTON_3 = document.createElement('div');
BUTTON_3.classList.add('button');
BUTTON_3.setAttribute("id","button_3");
BUTTON_CONTAINER_3.appendChild(BUTTON_3);

const BUTTON_4 = document.createElement('div');
BUTTON_4.classList.add('button');
BUTTON_4.setAttribute("id","button_4");
BUTTON_CONTAINER_4.appendChild(BUTTON_4);


const move = (button) => {
    console.log(button);

    if (button === 'button_container_1')
{
    IMAGE_WRAP.classList.add('active_img_0');
    TEXT_WRAP.classList.add('active_txt_0');

    IMAGE_WRAP.classList.remove('active_img_100');
    TEXT_WRAP.classList.remove('active_txt_100')

    IMAGE_WRAP.classList.remove('active_img_200');
    TEXT_WRAP.classList.remove('active_txt_200');

    IMAGE_WRAP.classList.remove('active_img_300');
    TEXT_WRAP.classList.remove('active_txt_300');

    BUTTON_1.classList.add('active_btn');
    BUTTON_2.classList.remove('active_btn');
    BUTTON_3.classList.remove('active_btn');
    BUTTON_4.classList.remove('active_btn');
}

else if (button === 'button_container_2')
{
    IMAGE_WRAP.classList.add('active_img_100');
    TEXT_WRAP.classList.add('active_txt_100')


    IMAGE_WRAP.classList.remove('active_img_0');
    TEXT_WRAP.classList.remove('active_txt_0')

    IMAGE_WRAP.classList.remove('active_img_200');
    TEXT_WRAP.classList.remove('active_txt_200');

    IMAGE_WRAP.classList.remove('active_img_300');
    TEXT_WRAP.classList.remove('active_txt_300');

    BUTTON_2.classList.add('active_btn');
    BUTTON_1.classList.remove('active_btn');
    BUTTON_3.classList.remove('active_btn');
    BUTTON_4.classList.remove('active_btn');
}
else if (button === 'button_container_3')
{
    IMAGE_WRAP.classList.add('active_img_200');
    TEXT_WRAP.classList.add('active_txt_200')

    IMAGE_WRAP.classList.remove('active_img_100');
    TEXT_WRAP.classList.remove('active_txt_100')

    IMAGE_WRAP.classList.remove('active_img_0');
    TEXT_WRAP.classList.remove('active_txt_0');

    IMAGE_WRAP.classList.remove('active_img_300');
    TEXT_WRAP.classList.remove('active_txt_300');

    BUTTON_3.classList.add('active_btn');
    BUTTON_2.classList.remove('active_btn');
    BUTTON_1.classList.remove('active_btn');
    BUTTON_4.classList.remove('active_btn');
}
else if (button === 'button_container_4')

{
    IMAGE_WRAP.classList.add('active_img_300');
    TEXT_WRAP.classList.add('active_txt_300');

    IMAGE_WRAP.classList.remove('active_img_100');
    TEXT_WRAP.classList.remove('active_txt_100')

    IMAGE_WRAP.classList.remove('active_img_200');
    TEXT_WRAP.classList.remove('active_txt_200');

    IMAGE_WRAP.classList.remove('active_img_0');
    TEXT_WRAP.classList.remove('active_txt_0');

    BUTTON_4.classList.add('active_btn');
    BUTTON_2.classList.remove('active_btn');
    BUTTON_3.classList.remove('active_btn');
    BUTTON_1.classList.remove('active_btn');
}

}

BUTTON_CONTAINER_1.addEventListener("click", () =>{

let id = BUTTON_CONTAINER_1.getAttribute('id');

move(id)

});

BUTTON_CONTAINER_2.addEventListener("click", () =>{

    let id = BUTTON_CONTAINER_2.getAttribute('id');
    
move(id)
    
    });

BUTTON_CONTAINER_3.addEventListener("click", () =>{

let id = BUTTON_CONTAINER_3.getAttribute('id');
        
move(id)
        
});

BUTTON_CONTAINER_4.addEventListener("click", () =>{

let id = BUTTON_CONTAINER_4.getAttribute('id');
            
move(id)
});










    






