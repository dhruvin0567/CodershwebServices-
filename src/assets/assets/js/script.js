document.addEventListener("DOMContentLoaded", function () {
    // Main project slider
    var projectSwiper = new Swiper(".swiper.project-slider", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 2000,
        grabCursor: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });


    // Logo slider
    var logoSwiper = new Swiper(".swiper.logo-slider", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 2000,
        breakpoints: {
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
        },
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".video-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        direction: "horizontal",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 2000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        },
    });

    var allVideos = $('.video-wrap video');

    allVideos.each(function () {
        var video = $(this).get(0);

        video.addEventListener('play', function () {
            swiper.autoplay.stop();

            allVideos.not(video).each(function () {
                this.pause();
                $(this).siblings('.custom-play-button').show();
            });

            $(video).siblings('.custom-play-button').hide();
        });

        video.addEventListener('pause', function () {
            $(video).siblings('.custom-play-button').show();

            var allPaused = true;
            allVideos.each(function () {
                if (!this.paused) {
                    allPaused = false;
                }
            });

            if (allPaused) {
                swiper.autoplay.start();
            }
        });
    });

    $('.video-button').on('click', function () {
        var video = $(this).find('video').get(0);
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
