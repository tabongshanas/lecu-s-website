
const closeUl = document.getElementById('#close-ul');
const mainUl = document.querySelector('.main-ul');

closeUl.classList.add('hidden');

closeUl.addEventListener('click' , function() {
    mainUl.classList.add('hidden');
})