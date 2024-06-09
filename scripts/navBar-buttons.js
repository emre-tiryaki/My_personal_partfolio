const aboutLink = document.getElementById('aboutLink');
const talentsLink = document.getElementById('talentsLink');
const imagesLink = document.getElementById('imagesLink');

const contentContainer = document.getElementById('content-container');
const talentContainer = document.getElementById('talents-container');
const imageContainer = document.getElementById('image-container');

aboutLink.addEventListener('click',() => {
    if(talentContainer.style.display != 'none'){
        talentContainer.style.display = 'none';
        contentContainer.style.display = 'inline-block';
    }
    else if(imageContainer.style.display != 'none'){
        imageContainer.style.display = 'none';
        contentContainer.style.display = 'inline-block';
    }
});

talentsLink.addEventListener('click',() => {
    if(contentContainer.style.display != 'none'){
        contentContainer.style.display = 'none';
        talentContainer.style.display = 'inline-block';
    }
    else if(imageContainer.style.display != 'none'){
        imageContainer.style.display = 'none';
        talentContainer.style.display = 'inline-block';
    }
});

imagesLink.addEventListener('click',() => {
    if(contentContainer.style.display != 'none'){
        contentContainer.style.display = 'none';
        imageContainer.style.display = 'inline-block';
    }
    else if(talentContainer.style.display != 'none'){
        talentContainer.style.display = 'none';
        imageContainer.style.display = 'inline-block';
    }
});