export function init() {

    let btnList = document.querySelectorAll('nav button');

    for (let i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click', function() {
            let nav = this.parentElement;
            nav.classList.toggle('active');

            if (nav.style.maxHeight){
                nav.style.maxHeight = null;
            } else {
                nav.style.maxHeight = nav.scrollHeight + 'px';
            }
        });
    }

}
