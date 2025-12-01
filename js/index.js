Fancybox.bind("[data-fancybox]", {
   // Your custom options
})


const burger = document.querySelector('.header__burger')

burger.addEventListener('click', function () {
   document.body.classList.toggle('active')
})


const mixer = mixitup('.works__galery')