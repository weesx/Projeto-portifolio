/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
body.classList.toggle("menu-nav-active");
});

    // Inicializar o carrossel com intervalo de 5 segundos
    var myCarousel = document.querySelector('#carouselPortfolio');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Tempo em milissegundos
        wrap: true // Faz o carrossel voltar ao início após o fim
    });

    // Adicionar evento para detectar quando o vídeo termina
    var portfolioVideo = document.getElementById('portfolioVideo');
    
    portfolioVideo.onended = function() {
        // Quando o vídeo terminar, o carrossel continuará automaticamente para o próximo item
        carousel.next();
    };
// animar itens

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;
    
    item.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add("animate");
            element.classList.remove("test");
        } else {
            element.classList.remove("animate");
            element.classList.add("test");
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
});

// ativar carregamento no botão de enviar formulario

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoader.style.display = 'block';
    btnEnviar.style.display = 'none';
})

setTimeout(()=> {
    document.querySelector('#alerta').style.display = 'none';
}, 5000)
