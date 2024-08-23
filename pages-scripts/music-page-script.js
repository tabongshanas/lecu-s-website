"use strick"

const loader = document.querySelector('.loader');

const rateContainer = document.querySelector('.rate-container');
const rate = document.getElementById('rate');
const rateBtn = document.getElementById('rate-btn');
const rateLatter = document.getElementById('rate-latter');
const rateLayer = document.querySelector('.rate-layer');

rateContainer.classList.toggle('rate--hidden');

window.setTimeout(function() {
    // window.addEventListener('load' , function() {
      loader.classList.add('loader--hidden');
    // });
  } , 6000);

  
window.setTimeout(function () {
    rateContainer.classList.toggle('rate--bring');
} , 8000);

rateBtn.addEventListener('click' , function (e) {
    e.preventDefault();
    // rateContainer.classList.toggle('rate--remove');
    const rateResult = confirm("Thanks for Rating!\nAre you sure that's your rating?\nCancel --> No\nOK --> Yes");

    if (rateResult) {
        rateContainer.classList.toggle('rate--remove');
        alert('Thanks for the Rate!');
    }
    else {
        rateContainer.classList.toggle('rate--hidden');
    }

});

rateLayer.addEventListener('click' , function () {
    rateContainer.classList.toggle('rate--remove');
});

rateLatter.addEventListener('click' , function (e) {
    e.preventDefault();
    rateContainer.classList.toggle('rate--remove');
});