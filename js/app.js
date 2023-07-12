$ (function () {


    // pre loader start

    $(window).on(`load`, function () {
        $(`.preload`).fadeOut()
        
    })

    // pre loader end


    // modal chat button start


    $(window).scroll(function () {
        

        let scrollup = $(window).scrollTop()
        
       

        if (scrollup > 60) {

            // $(`#menu`).addClass(`menufixed`)
            $(`.upbutton`).fadeIn()
        
        } else {
            // $(`#menu`).removeClass(`menufixed`)
            $(`.upbutton`).fadeOut()
        }

    })

    $(`.upbutton`).scroll (function () {

        $(`html,body`).animate({
            scrollTop:0
            
        },100)
       
    
     })

    // modal chat button end

//banner slick slider  start

    $('#banner').slick({
        arrows:false,
        dots:true, 
        dotsClass: "banner_slider_dot container",
        autoplay: true,
        autoplaySpeed: 1800,
        slidesToScroll: 1,
    });

//banner slick slider  end




})