var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        414: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".slide-work", {
    slidesPerView: 4,
    spaceBetween: 10,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        414: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});

const imgs = document.querySelectorAll(".slider-img");
const imgsiPhone = document.querySelectorAll(".slider-img-iPhone");
// img Trang chủ
const imgPaths = {
    desktop: ["./assets/img/Slider/slider-5.jpg", "./assets/img/Slider/slider-1.jpg", "./assets/img/Slider/slider-2.jpg", "./assets/img/Slider/slider-3.jpg", "./assets/img/Slider/slider-4.jpg"],
    mobile: ["./assets/img/Slider/slider-5_mobile.jpg", "./assets/img/Slider/slider-1_mobile.jpg", "./assets/img/Slider/slider-2_mobile.jpg", "./assets/img/Slider/slider-3_mobile.jpg", "./assets/img/Slider/slider-4_mobile.jpg"],
};
// img iPhone
const imgPaths_iPhone = {
    desktop: ["./assets/img/Slider/slider-iPhone-1.jpg", "./assets/img/Slider/slider-iPhone-2.jpg"],
    mobile: ["./assets/img/Slider/slider-iPhone-1-mobile.jpg", "./assets/img/Slider/slider-iPhone-2-mobile.jpg"],
};

//Duyệt qua tất cả img Trang chủ và thay đổi src ở kích thước 739px trở xuống
function checkSize() {
    if (window.innerWidth < 767) {
        imgs.forEach((img, index) => {
            img.src = imgPaths.mobile[index];
        });
    } else {
        imgs.forEach((img, index) => {
            img.src = imgPaths.desktop[index];
        });
    }
}

//Duyệt qua tất cả img Trang chủ và thay đổi src ở kích thước 739px trở xuống
function checkSize() {
    if (window.innerWidth < 767) {
        imgsiPhone.forEach((img, index) => {
            img.src = imgPaths_iPhone.mobile[index];
        });
    } else {
        imgsiPhone.forEach((img, index) => {
            img.src = imgPaths_iPhone.desktop[index];
        });
    }
}
