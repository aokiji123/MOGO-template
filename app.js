$(function() {

    let introHeight = $("#intro").innerHeight()
    let header = $("#header")
    let scrollOffset = $(window).scrollTop();

    // FIXED HEADER
    checkScroll(scrollOffset)

    $(window).on('scroll', () => {
        scrollOffset = $(this).scrollTop()
        checkScroll(scrollOffset)
    })

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introHeight) {
           header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
    }

    // SMOOTH NAVIGATION SCROLL
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data('scroll')
        let blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass('active')
        $(this).addClass("active")

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

    // MENU NAV TOGGLE
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault()

        // NAV-LINK COLOR
        $(this).toggleClass('active')

        // NAVIGATION IN/OUT
        $("#nav").toggleClass('active')
        
    })

    // NAV LINK TOGGLE
    $(".nav-link").on('click', function(event) {
        event.preventDefault()

        // CLOSE NAV MENU
        $("#nav").removeClass('active')

        // MENU NAV TOGGLE
        $("#nav-toggle").toggleClass('active')
    })

    // ACCORDION
    $(".accordion-item").on('click', function(event) {
        event.preventDefault()

        $(this).toggleClass('active')
        $('.accordion-item').not(this).removeClass('active')
    })

    // SLIDER REVIEWS
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
}) 