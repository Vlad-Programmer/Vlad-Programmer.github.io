'use strict';

let vper = document.querySelector('.vpravo');
let naza = document.querySelector('.vlevo');
let slay = document.querySelectorAll('.slider');
let kartin1 = document.querySelector('.kartin1');
let kartin2 = document.querySelector('.kartin2');
let kartin3 = document.querySelector('.kartin3');
let kartin4 = document.querySelector('.kartin4');
let kartin5 = document.querySelector('.kartin5');
let logoimg = document.querySelector('.logoimg');
let slayIndex = 1;

pokaz(slayIndex);

function pokaz(n) {
    if (n > slay.length) {
        slayIndex = 1;
    }

    if (n < 1) {
        slayIndex = slay.length;
    }

    slay.forEach(item => item.style.display = 'none');

    slay[slayIndex - 1].style.display = 'block';
}

function uvelichenie(n) {
    pokaz(slayIndex += n);
}

vper.addEventListener('click', () => {
    uvelichenie(1);
    vper.classList.add('svet');
    let timerInterval = setTimeout(function () {
        vper.classList.remove('svet');
    }, 100);
    
});

naza.addEventListener('click', () => {
    uvelichenie(-1);
    naza.classList.add('svet');
    let timerInterval = setTimeout(function () {
        naza.classList.remove('svet');
    }, 100);
});

kartin1.addEventListener('click', () => {    
    uvelichenie(1);
});

kartin2.addEventListener('click', () => {    
    uvelichenie(1);
});

kartin3.addEventListener('click', () => {    
    uvelichenie(1);
});

kartin4.addEventListener('click', () => {    
    uvelichenie(1);
});

kartin5.addEventListener('click', () => {    
    uvelichenie(1);
});

logoimg.addEventListener('click', () => {    
    document.location.href = "https://www.zeeebra.ru";
});

// ======== тачи===========

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            uvelichenie(1);
        } else {
            /* left swipe */
            uvelichenie(-1);
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


































