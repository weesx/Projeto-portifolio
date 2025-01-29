/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
body.classList.toggle("menu-nav-active");
});

// Inicializa o carrossel com um intervalo de 5 segundos (5000 ms)
var myCarousel = document.querySelector('#carouselPortfolio');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Tempo em milissegundos
    wrap: true // Faz o carrossel voltar ao início após o fim
});

// animar itens

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;
    
    item.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
});