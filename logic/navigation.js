$(document).ready(function() {
    $('a').click(function() {

        if ($(window).width() < 900) {

            navlink();

        }
    })
    $('.mobile-cover').hide();

    /* navigation btn⬇️*/
    $('#nav-btn').click(function() {
        //second line

        //first line
        if ($('#line-one').hasClass('rotatePOS')) {

            navlink();

        } else {
            $('.navigation-outermost').css('background', 'transparent').css('box-shadow', 'none');
            $('#line-two').toggleClass('none');
            if ($(window).width() <= 400) {
                var top = 20;
            } else {
                var top = 16;
            }
            $('#line-one').animate({

                top: top + "%"
            }, 100, function() {
                $(this).addClass('rotatePOS')
                $('.mobile-cover').fadeIn();
                $('ul').css('display', 'flex')
            })
            $('#line-three').addClass('rotateNEG');
        }
        // third line
        // $('#line-three').toggleClass('rotateNEG');





    })

    // 
    navlink = function() {
        $('#line-two').removeClass('none');
        $($('#line-one')).removeClass('rotatePOS').css({
            top: '0'
        })
        $('.mobile-cover').fadeOut();
        $('ul').css('display', 'none');
        $('#line-three').removeClass('rotateNEG');

    }

    /*navigation change background */
    // get navigation
    var navTop = $('.navigation-outermost').offset().top;

    $(window).scroll(function() {
        var $nav = $(".navigation-outermost");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    })

})

/* slider*/
$width = $(window).width();
$box_width = $('.projects').width();
$value = 0
$value1 = 0
$value2 = 0
$value3 = 0

$a = $('.project-content').css('left');


$('.left-btn').hide();


$('.right-btn').click(function() {

    $a = $('.project-content').css('left');

    $box_width = $('.projects').width();
    $('.left-btn').show();


    if ($a == "0px") {
        $value1 = -($box_width + 40);
        calculate($value1)
    } else if ($a == $value1 + "px") {
        $value2 = -(2 * $box_width + 40 * 2);
        calculate($value2)
    } else if ($a == $value2 + "px") {
        $value3 = -(3 * $box_width + 40 * 3);
        $value3 = $value3.toFixed(1);
        calculate($value3)
        $('.right-btn').hide();
    }
    console.log('box-width: ' + $box_width + "  value1 " + $value1 + " value2 " + $value2 + " value3 " + $value3)
})


$('.left-btn').click(function() {
    $a = $('.project-content').css('left');
    $box_width = $('.projects').width();
    $('.right-btn').show();

    if ($a == $value3 + "px") {
        $value = ($value2);
        $value = parseFloat($value).toFixed(1);


        calculate($value)

    } else if ($a == $value2 + "px") {
        $value = ($value2 + $box_width + 40);
        calculate($value)
    } else if ($a == $value1 + "px") {
        $value = ($value1 + $box_width + 40);
        calculate($value)
        $('.left-btn').hide();
    }
    console.log("$a" + $a + ' box-width: ' + $box_width + "  value1 " + $value1 + " value2 " + $value2 + " value3 " + $value3 + " value " + $value)
})

function calculate($value) {
    $('.project-content').animate({
        left: $value
    }, 1000)
}