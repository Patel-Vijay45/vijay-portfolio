var string1;
var cnd = 0;

function write(string, time) {
    var i = 0;
    var stopwrite = setInterval(() => {
        // if (string[i] == 'D') {
        //     document.querySelector("#changetext").innerHTML += " ";
        //     console.log("HELLO");
        // }
        document.querySelector("#changetext").innerText += string[i];

        i++;
    }, 100);
    setTimeout(() => {
        clearInterval(stopwrite);
        setTimeout(() => {
            clear(time);
        }, 1000);
    }, time);
}

function clear(time1) {
    // console.log(cnd);
    if (cnd == 0) {
        string = "Android Developer";
        cnd = 1;
        time = 1700;
    } else if (cnd == 1) {
        string = "Student";
        cnd = 2;
        time = 700;
    } else if (cnd == 2) {
        string = "Web Developer";
        cnd = 0;
        time = 1300;
    }

    var demostring;
    stopclear = setInterval(() => {
        demostring = document.getElementById("changetext").innerText;
        demostring = demostring.substring(0, demostring.length - 1);
        document.getElementById("changetext").innerHTML = demostring;
    }, 100);

    setTimeout(() => {
        document.getElementById("changetext").innerText = " ";
        clearInterval(stopclear);
        setTimeout(() => {
            write(string, time)
        }, 1000);
    }, time1);
}
$(document).ready(function() {

    // demo();
    $('.loader-child').css({
        "animation-name": 'loader'
    })

    var clear = setInterval(() => {
        $('.loader-box').css({
            display: 'none'
        })
        write("Web Developer", 1300);
        clearInterval(clear)
    }, 3000);

})

/* contect box*/
$('#tooglebtn').click(function() {
        console.log("aa")
        $('#tooglebtn').toggleClass('clickbtn')
        $('.onfeedback').toggleClass('remove')
        $('.onsubmit').toggleClass('remove')
        if ($('.onfeedback').hasClass('remove')) {
            $('textarea').attr('placeholder', 'Give you suggesion ')
                // $('.contect-title').innerText = "FEEDBACK";
                // alert($('#contect-title').innerHTML)
            document.getElementById("contect-title").innerHTML = "FEEDBACK"
            $('textarea').attr('name', 'feedback')
        } else {
            $('textarea').attr('placeholder', 'how can i help you')
            $('#contect-title').innerText = "GET IN TOUCH";
            document.getElementById("contect-title").innerHTML = "GET IN TOUCH"
            $('textarea').attr('name', 'work')
        }

    })
    /* reaction change*/
$('.reaction').click(function() {
    $('.reaction').removeClass('bg')
    $(this).addClass("bg");
})