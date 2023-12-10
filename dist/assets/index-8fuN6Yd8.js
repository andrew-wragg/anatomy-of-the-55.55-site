function init$1() {
  let btnList = document.querySelectorAll("nav button");
  for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click", function() {
      let nav = this.parentElement;
      nav.classList.toggle("active-nav");
      if (nav.style.maxHeight) {
        nav.style.maxHeight = null;
      } else {
        nav.style.maxHeight = nav.scrollHeight + "px";
      }
    });
  }
}
function init() {
  const intersectionOptions = {
    root: null,
    // root element. Null is the viewport.
    rootMargin: "0px 110% 0px 110%",
    // margin around root. Values are similar to css property. Unitless values not allowed
    threshold: 0.15
    // trigger intersection callback when 25% of the element is visible
  };
  let theVideo = document.getElementById("theVideo");
  let elementList = document.querySelectorAll("#thenecklace, .fade-in, .from-bottom, .from-left, .from-right, .blur");
  const callbacks = (enteries) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        if (entry.target.id == "thenecklace") {
          playVid(theVideo);
        }
      } else {
        entry.target.classList.remove("active");
      }
    });
  };
  const observer = new IntersectionObserver(callbacks, intersectionOptions);
  elementList.forEach((element) => {
    observer.observe(element);
  });
  setTimeout(animateOnLoad, 1e3);
}
function playVid(vidElement) {
  vidElement.play();
}
function animateOnLoad() {
  let diamond = document.getElementById("img-diamond");
  diamond.classList.add("on-load-active");
}
init$1();
init();
