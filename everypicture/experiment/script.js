(function(){
    
    'use strict';
    console.log('reading js');

    const mainImage = document.querySelector('.main-image');
    const hotspot = document.querySelector('.hotspot');
    const overlay = document.querySelector('.overlay-image');

    hotspot.addEventListener('mouseenter', () => {
        mainImage.style.transform = 'scale(1.2)';
        overlay.style.opacity = '1';
    });

    hotspot.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
        overlay.style.opacity = '0';
    });

})();