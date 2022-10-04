// OLD FUNC THAT CHANGES IMAGES RANDOMLY:


// var active = Math.floor(Math.random() * (urls.length));
// setInterval(function() {
//   let rand = Math.floor(Math.random() * 8);
//   document.getElementsByClassName('dynamic')[rand].style.background = urls[active];
//   active++;
//   if (active == urls.length) active = 0;
//   //})
// }, 2000);

var images = [
  'url(https://i.postimg.cc/MG6yxbxn/picture-1.png)',
  'url(https://i.postimg.cc/7LH3mSZn/picture-10.jpg)',
  'url(https://i.postimg.cc/VLXXwKSF/picture-11.jpg)',
  'url(https://i.postimg.cc/DZD1vDdx/picture-12.jpg)',
  'url(https://i.postimg.cc/SQ2WTSk3/picture-13.jpg)',
  'url(https://i.postimg.cc/QCT1Hbfh/picture-14.jpg)',
  'url(https://i.postimg.cc/htgTtVTR/picture-15.jpg)',
  'url(https://i.postimg.cc/dVKmZbMX/picture-16.jpg)',
  'url(https://i.postimg.cc/RZQ17g40/picture-17.jpg)',
  'url(https://i.postimg.cc/yNLF5WJ4/picture-18.jpg)',
  'url(https://i.postimg.cc/MTXy8xRc/picture-19.jpg)',
  'url(https://i.postimg.cc/s2pSQRcw/picture-2-min.png)',
  'url(https://i.postimg.cc/mgwMzhyz/picture-21.jpg)',
  'url(https://i.postimg.cc/Ls8PzRxy/picture-22.jpg)',
  'url(https://i.postimg.cc/3rvvjtZH/picture-23.jpg)',
  'url(https://i.postimg.cc/vm2VhjjG/picture-24.jpg)',
  'url(https://i.postimg.cc/HxJ7hzDX/picture-25.jpg)',
  'url(https://i.postimg.cc/hvTQSGGG/picture-26.jpg)',
  'url(https://i.postimg.cc/Y9JmKFMV/picture-27.jpg)',
  'url(https://i.postimg.cc/x1T8Z5L8/picture-28.jpg)',
  'url(https://i.postimg.cc/hP8Q6hwy/picture-29.jpg)',
  'url(https://i.postimg.cc/ZnqyMvhM/picture-3-min.png)',
  'url(https://i.postimg.cc/bNf2m16S/picture-30.jpg)',
  'url(https://i.postimg.cc/jSsnbtYs/picture-31.jpg)',
  'url(https://i.postimg.cc/0jRrHqC1/picture-32.jpg)',
  'url(https://i.postimg.cc/W1XFpCs0/picture-33.jpg)',
  'url(https://i.postimg.cc/7YNbXdGj/picture-34.jpg)',
  'url(https://i.postimg.cc/LXZnTsLV/picture-35.jpg)',
  'url(https://i.postimg.cc/PqJLCyq9/picture-36.jpg)',
  'url(https://i.postimg.cc/KYW1BTkz/picture-37.jpg)',
  'url(https://i.postimg.cc/d323bSWk/picture-38.jpg)',
  'url(https://i.postimg.cc/BZHjPXqS/picture-39.jpg)',
  'url(https://i.postimg.cc/fLDdYgqZ/picture-4-min.png)',
  'url(https://i.postimg.cc/cJvHxJ9N/picture-40.jpg)',
  'url(https://i.postimg.cc/tCbY3pTh/picture-41.jpg)',
  'url(https://i.postimg.cc/NjJFvXx4/picture-42.jpg)',
  'url(https://i.postimg.cc/Y9gCFsBn/picture-43.jpg)',
  'url(https://i.postimg.cc/bv4vsjWS/picture-44.jpg)',
  'url(https://i.postimg.cc/bYxvNWTd/picture-45.jpg)',
  'url(https://i.postimg.cc/029y6nWn/picture-46.jpg)',
  'url(https://i.postimg.cc/2SKkKDz9/picture-47.jpg)',
  'url(https://i.postimg.cc/Jzn7xnWB/picture-48.jpg)',
  'url(https://i.postimg.cc/7hnPsJ6S/picture-49.jpg)',
  'url(https://i.postimg.cc/W38k86xZ/picture-5-min.png)',
  'url(https://i.postimg.cc/ZnSKxxTT/picture-50.jpg)',
  'url(https://i.postimg.cc/yxjBXqQP/picture-51.jpg)',
  'url(https://i.postimg.cc/15M5DFbQ/picture-52.jpg)',
  'url(https://i.postimg.cc/ZqvbkMnb/picture-53.jpg)',
  'url(https://i.postimg.cc/W3R2swqM/picture-54.jpg)',
  'url(https://i.postimg.cc/sXp3xG5b/picture-55.jpg)',
  'url(https://i.postimg.cc/m2ZTZDk6/picture-56.jpg)',
  'url(https://i.postimg.cc/bN6pZh2Y/picture-57.jpg)',
  'url(https://i.postimg.cc/gcHYPRzZ/picture-58.jpg)',
  'url(https://i.postimg.cc/8z9GbmHq/picture-59.png)',
  'url(https://i.postimg.cc/KjsgScGv/picture-6-min.png)',
  'url(https://i.postimg.cc/vZcM9NWr/picture-60.png)',
  'url(https://i.postimg.cc/5tzVKQKj/picture-61.png)',
  'url(https://i.postimg.cc/KcfyW2f7/picture-63.png)',
  'url(https://i.postimg.cc/15Y19rLf/picture-64.png)',
  'url(https://i.postimg.cc/D0xk4r0p/picture-65.png)',
  'url(https://i.postimg.cc/G2J1dwCC/picture-66.png)',
  'url(https://i.postimg.cc/dVkPDTYn/picture-67.png)',
  'url(https://i.postimg.cc/RV0z5Dpk/picture-68.png)',
  'url(https://i.postimg.cc/G3MDsKFw/picture-69-min.png)',
  'url(https://i.postimg.cc/sfqJsBT3/picture-7.jpg)',
  'url(https://i.postimg.cc/gcnKCyqM/picture-8.jpg)',
  'url(https://i.postimg.cc/NfXkMgnm/picture-9.jpg)'
];


function changeBg() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic').css('background-image', bg);
}

function changeBg1() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic1').css('background-image', bg);
}

function changeBg2() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic2').css('background-image', bg);
}

function changeBg3() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic3').css('background-image', bg);
}

function changeBg4() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic4').css('background-image', bg);
}

function changeBg5() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic5').css('background-image', bg);
}

function changeBg6() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic6').css('background-image', bg);
}

function changeBg7() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic7').css('background-image', bg);
}

function changeBg8() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic8').css('background-image', bg);
}

function changeBg9() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic9').css('background-image', bg);
}

function changeBg10() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic10').css('background-image', bg);
}

function changeBg11() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic11').css('background-image', bg);
}

function changeBg12() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic12').css('background-image', bg);
}

function changeBg13() {
  const bg = images[Math.floor(Math.random() * images.length)];
  $('.dynamic13').css('background-image', bg);
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var queens = [
  'https://i.ibb.co/t2b5RzY/ruby-reign-min.png',
  'https://i.postimg.cc/PxY4YM8H/queen-1-min-new.png',
  'https://i.postimg.cc/GmqxDPZG/queen-2-min.png',
  'https://i.postimg.cc/0ygz3mHz/red-dress-small.png',
  'https://i.postimg.cc/pddyntGH/twomb.png',
  'https://i.postimg.cc/1XwKVkQ3/queen-5-min.png',
  'https://i.postimg.cc/MTcVNXGR/queen-cards.png',
  'https://i.postimg.cc/NFnbnMwt/Miss-Cherri-ayd.png',
  'https://i.postimg.cc/rySQq8Cf/Regina-Mc-Queen.png',
  'https://i.postimg.cc/0yjc7Fhm/Microsoft-Teams-image-7-removebg-min.png',
  'https://i.postimg.cc/fyhM9xLt/debs-min.png',
  'https://i.postimg.cc/DwGxwDDc/kiki-taller.png'
];

// function changeQueen() {
//   const myQueens = queens[Math.floor(Math.random() * images.length)];
//   $('.queen').attr("src", myQueens).load(function(){
//     this.width;
// });


var current = 0;
setInterval(function() {

  $('.queen').attr('src', queens[current]);
  current = (current < queens.length - 1) ? current + 1 : 0;

}, 2000); /*1000 = 1 sec*/



// same with fadein fadeout bit buggy
// var current = 0;
// setInterval(function() {
//       $('.queen').fadeOut('fast').attr('src', queens[current]).fadeIn('fast');
// current = (current < queens.length - 1)? current + 1: 0; }, 3000); /*1000 = 1 sec*/
