"use strick"

const loader = document.querySelector('.loader');
  

window.setTimeout(function() {
  // window.addEventListener('load' , function() {
    loader.classList.add('loader--hidden');
  // });
} , 6000);