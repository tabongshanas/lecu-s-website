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


rate.addEventListener('click' , function(e) {
    e.preventDefault();
    rateContainer.classList.toggle('rate--bring');
    rateContainer.classList.remove('rate--remove');
});

rateLayer.addEventListener('click' , function (e) {
  e.preventDefault();
  rateContainer.classList.toggle('rate--bring');
});

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

rateLayer.addEventListener('click' , function (e) {
  e.preventDefault();
  rateContainer.classList.toggle('rate--remove');
});

rateLatter.addEventListener('click' , function (e) {
  e.preventDefault();
  rateContainer.classList.toggle('rate--remove');
});

window.addEventListener('keydown' , (e) => {
  e.preventDefault();
  if (e.key === 'Escape') {
    rateContainer.classList.add('rate--remove');
  }

  if (e.key === 'r' && e.ctrlKey) {
    rateContainer.classList.add('rate--bring');
  }
});




const processBtn = document.getElementById('process-btn');
const cancelBtn = document.getElementById('cancel-btn');
const shanasBtn = document.getElementById('shanas-btn');
const proveName = document.querySelector('.prove-name');
const proveInfo = document.querySelector('.prove-info');
const proveLayer = document.querySelector('.prove-layer');
const videoContent = document.querySelector('.video-content');
const myVideo = document.querySelector('.my-video');
const videoLayer = document.querySelector('.video-layer');


proveInfo.classList.add('prove-info--hidden');
videoContent.classList.add('video--hidden');


shanasBtn.addEventListener('click' , function (e) {
  e.preventDefault();
  proveInfo.classList.add('prove-info--bring');
});


window.addEventListener('keydown' , (e) => {
  e.preventDefault();
  if (e.key == 'Escape') {
    proveInfo.classList.add('prove-info--hidden');
    proveInfo.classList.remove('prove-info--bring');

    // videoContent.classList.add('video--hidden');
    // videoContent.classList.remove('video--bring');
  }
});


proveLayer.addEventListener('click' , (e) => {
  e.preventDefault();
  proveInfo.classList.add('prove-info--hidden');
  proveInfo.classList.remove('prove-info--bring');
});


processBtn.addEventListener('click' , (e) => {
  e.preventDefault();

  const userName = prompt('Please, what is your First name?');
  if (userName.trim().length >= 6) {
    // process
    videoContent.classList.add('video--bring');
    videoContent.classList.remove('video--hidden');

    setTimeout(function () {
      alert('Please, play the video.\nThis video is about findind our talent, motivating us in life\nand also inspiring us\nEnjoy!!!');
    }, 1000);

    setTimeout(function () {
      // rateContainer.classList.remove('rate--hidden');
      rateContainer.classList.add('rate--bring');
      myVideo.pause();
    }, 10000);
  }
  else {
    alert(`Your name was NOT up too Six (6) characters\nYou enter your name to have ${userName.trim().length} Character(s)\nTry again later`);
  }
}); 



cancelBtn.addEventListener('click' , (e) => {
  e.preventDefault();
  proveInfo.classList.add('prove-info--hidden');
  proveInfo.classList.remove('prove-info--bring');
})



videoLayer.addEventListener('click' , (e) => {
  e.preventDefault();
  videoContent.classList.add('video--hidden');
  videoContent.classList.remove('video--bring');
});



// playing the video when rate page is close
rateLatter.addEventListener('click' , function (e) {
  e.preventDefault();
  myVideo.play();
});
// rateBtn.addEventListener('click' , function (e) {
//   e.preventDefault();
//   myVideo.play();
// });
rateLayer.addEventListener('click' , function (e) {
  e.preventDefault();
  myVideo.play();
});