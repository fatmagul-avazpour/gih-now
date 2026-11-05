let $ = document;
const productSwiper = new Swiper(".productSwiper", {

    loop: true,

    spaceBetween: 28,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        // mobile
        0: {
            slidesPerView: 2,
        },

        // tablet
        640: {
            slidesPerView: 3,
        },

        // desktop
        768: {
            slidesPerView: 4,
        }

    }

});

const closeMenuBarIcon = $.querySelector(".close-menuBar");
const menuBar = $.querySelector(".menuBar");
const menuBarIcon = $.querySelector(".menuBarIcon");
const overLay = $.querySelector(".overLay");

const showMenuBar = () => {
    menuBar.classList.remove(
        "invisible",
        "opacity-0",
        "translate-x-full"
    );

    menuBar.classList.add(
        "visible",
        "opacity-100",
        "translate-x-0"
    );

    overLay.classList.remove("invisible", "opacity-0");
};

const hideMenuBar = () => {
    menuBar.classList.add(
        "invisible",
        "opacity-0",
        "translate-x-full"
    );

    menuBar.classList.remove(
        "visible",
        "opacity-100",
        "translate-x-0"
    );

    overLay.classList.add("invisible", "opacity-0");
};
overLay.addEventListener("click",hideMenuBar)
closeMenuBarIcon.addEventListener("click", hideMenuBar);
menuBarIcon.addEventListener("click", showMenuBar);