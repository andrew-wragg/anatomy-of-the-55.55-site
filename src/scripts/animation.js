export function init() {

    const intersectionOptions = {
        root: null, // root element. Null is the viewport.
        rootMargin: '0px 110% 0px 110%', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 0.2 // trigger intersection callback when 25% of the element is visible
    };

    let theVideo = document.getElementById('theVideo');

    // Get a NodeList of all elements to add IntersectionObserver to.
    // #thenecklace is included in the selector so that the video can play when it is in view.
    let elementList = document.querySelectorAll('#thenecklace, .fade-in, .from-bottom, .from-left, .from-right, .blur');

    const callbacks = enteries => {
        enteries.forEach(entry => {
            if (entry.isIntersecting) {

                // Add the class 'active' to the element that is in view.  Triggering the CSS animation.
                entry.target.classList.add('active');

                if (entry.target.id == 'thenecklace') {
                    playVid(theVideo);
                }

            } else {

                // Remove the class 'active' from the element that is out of view.  Reversing the in-view CSS animation.
                entry.target.classList.remove('active');

            }
        });
    }

    const observer = new IntersectionObserver(callbacks, intersectionOptions);

    elementList.forEach(element => {
        observer.observe(element);
    });



    const myTimeout = setTimeout(animateOnLoad, 1000);

}

function playVid(vidElement) {

    vidElement.play();
}

function animateOnLoad() {

    let diamond = document.getElementById('img-diamond');
    diamond.classList.add('on-load-active');

}