const page_1 = document.getElementById('page-1');
const next_page = document.getElementById('next-page');
const page_2 = document.getElementById('page-2');
const previous_page = document.getElementById('previous-page');

next_page.addEventListener('click',() => {
    page_1.style.display = 'none';
    page_2.style.display = 'flex'
});

previous_page.addEventListener('click',() => {
    page_2.style.display = 'none';
    page_1.style.display = 'flex'
});