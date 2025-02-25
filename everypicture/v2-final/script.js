(function(){
    
    'use strict';

    console.log("reading js");

    const hotspots = document.querySelectorAll('.hotspot');
    const overlays = document.querySelectorAll('.overlay-container');
    const mainImage = document.querySelector('.main-image');
    const mainTitle = document.querySelector('.main-title'); 
    let activeHotspot = null;

    hotspots.forEach((hotspot, index) => {
        hotspot.addEventListener('mouseenter', (e) => {
            if (!activeHotspot) {
                activeHotspot = hotspot;
                
                const rect = hotspot.getBoundingClientRect();
                const containerRect = mainImage.getBoundingClientRect();
                const offsetX = ((rect.left + rect.width / 2) - containerRect.left) / containerRect.width * 100;
                const offsetY = ((rect.top + rect.height / 2) - containerRect.top) / containerRect.height * 100;

                
                mainImage.style.transformOrigin = `${offsetX}% ${offsetY}%`;
                mainImage.style.transform = 'scale(1.5)';
                mainImage.style.filter = 'brightness(0.7) blur(5px)';

               
                overlays[index].style.opacity = '1';
                overlays[index].style.transform = 'translate(-50%, -50%) scale(1)';

                mainTitle.style.opacity = '0';
            }
        });

        hotspot.addEventListener('mouseleave', () => {
            if (activeHotspot === hotspot) {
                activeHotspot = null;

               
                mainImage.style.transform = 'scale(1)';
                mainImage.style.filter = 'brightness(1) blur(0px)';
                overlays[index].style.opacity = '0';
                overlays[index].style.transform = 'translate(-50%, -50%) scale(0.5)';

            
                mainTitle.style.opacity = '1';
            }
        });
    });

})();
