const toggle = document.getElementById('toggleDark');
const main = document.querySelector('main');
const right_container_content = document.getElementById('content-container');
const right_container_talent = document.getElementById('talents-container')
const right_container_images = document.getElementById('image-container');
const left_container = document.getElementById('left-container');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        main.style.background = 'lightblue';
        main.style.transition = '2s';
        left_container.style.boxShadow = '5px 10px 5px black';
        right_container_content.style.boxShadow = '5px 10px 5px black';
        right_container_talent.style.boxShadow = '5px 10px 5px black';
        right_container_images.style.boxShadow = '5px 10px 5px black';
    }else{
        main.style.background = 'black';
        main.style.transition = '2s';
        left_container.style.boxShadow = '5px 10px 5px lightblue';
        right_container_content.style.boxShadow = '5px 10px 5px lightblue';
        right_container_talent.style.boxShadow = '5px 10px 5px lightblue';
        right_container_images.style.boxShadow = '5px 10px 5px lightblue';
    }
});

