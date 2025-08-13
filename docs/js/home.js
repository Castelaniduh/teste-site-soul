document.addEventListener('DOMContentLoaded', () => {

    // SCRIPT PARA O CARROSSEL DE IMAGENS NA SEÇÃO HERO
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos

    if (images.length > 0 && dots.length > 0) {
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            if (images[index]) {
                images[index].classList.add('active');
            }
            if (dots[index]) {
                dots[index].classList.add('active');
            }
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        let carouselInterval = setInterval(nextImage, intervalTime);

        dots.forEach(dot => {
            dot.addEventListener('click', (event) => {
                const index = parseInt(event.target.dataset.index);
                if (!isNaN(index)) {
                    showImage(index);
                    currentIndex = index;
                    clearInterval(carouselInterval);
                    carouselInterval = setInterval(nextImage, intervalTime);
                }
            });
        });

        showImage(currentIndex);
    }

    // SCRIPT PARA O CARROSSEL DE LOGOS DE CLIENTES
    const swiperClientes = new Swiper(".mySwiperClientes", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination-clientes",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });

// SCRIPT PARA O CARROSSEL DE DEPOIMENTOS (EFEITO COVERFLOW)
const swiperDepoimentos = new Swiper(".mySwiperDepoimentos", {
    effect: "coverflow",  // ATIVANDO O EFEITO COVERFLOW
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    
    // Configurações específicas do efeito Coverflow
    coverflowEffect: {
      rotate: 50,         // Rotação dos slides laterais (ajuste para mais ou menos inclinação)
      stretch: 0,         // Quanto os slides esticam (0 para não esticar)
      depth: 50,         // Profundidade do efeito 3D
      modifier: 1,        // Multiplicador do efeito (1 é o padrão)
      slideShadows: false, // Desativa as sombras padrão do efeito
    },
    
    // Navegação por setas e bolinhas
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination-depoimentos",
        clickable: true,
    },
});
});