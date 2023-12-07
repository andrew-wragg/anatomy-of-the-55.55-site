export function init() {

    const inOptions = {
        root: null,
        rootMargin: '0px 300% 0px 300%',
        threshold: 0.25
    };

    const outOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    let theVideo = document.getElementById('theVideo');

    let elementList = document.querySelectorAll('#thenecklace, .fade-in, .from-bottom, .from-left, .from-right, .blur');
    console.log(elementList);   
    
    /*let fadeOutList = document.querySelectorAll('.fade-out');
    let slideInList = document.querySelectorAll('.slide-in');
    let slideOutList = document.querySelectorAll('.slide-out');
    let scaleInList = document.querySelectorAll('.scale-in');
    let scaleOutList = document.querySelectorAll('.scale-out');
    let rotateInList = document.querySelectorAll('.rotate-in');
    let rotateOutList = document.querySelectorAll('.rotate-out');
    let skewInList = document.querySelectorAll('.skew-in');
    let skewOutList = document.querySelectorAll('.skew-out');
    let blurInList = document.querySelectorAll('.blur-in');
    let blurOutList = document.querySelectorAll('.blur-out');
    */


    const callbacks = enteries => {
        enteries.forEach(entry => {
            console.log(entry.target);
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                if (entry.target.id == 'thenecklace') {
                    playVid(theVideo);
                }
            } 
        });
    }

    const videoObserver = new IntersectionObserver(callbacks, inOptions);
    videoObserver.oserve = theVideo;
    const observer = new IntersectionObserver(callbacks, inOptions);



    elementList.forEach(element => {
        observer.observe(element);
    });


}


function playVid(vidElement) {
    vidElement.play();
}

function pauseVid(vidElement) {
    vidElement.pause();
}