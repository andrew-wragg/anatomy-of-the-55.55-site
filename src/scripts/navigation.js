export function init() {

    var btnList = document.querySelectorAll('nav button');

    for (var i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click', function() {
            var nav = this.parentElement;
            nav.classList.toggle('active');

            if (nav.style.maxHeight){
                nav.style.maxHeight = null;
            } else {
                nav.style.maxHeight = nav.scrollHeight + 'px';
            }
        });
    }

}
