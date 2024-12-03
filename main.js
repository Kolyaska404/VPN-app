let swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + "</span>"
        },
    },
})

const accordion = document.getElementsByClassName('quastions_item');

for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

function reg_log(){
    const a = document.getElementById('container')
    const b = document.getElementById('body_wrapper')
    if (a.style.display != 'flex') {
        a.style.display = "flex"
    } else {
        a.style.display = "none"        
    }
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});