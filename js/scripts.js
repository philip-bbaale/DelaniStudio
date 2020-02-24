$(document).ready(function(){
    $(".clickable1").click(function(){
        $(".img1").toggle();
        $(".whatWeDoText1").toggle();
    });
    $(".clickable2").click(function(){
        $(".img2").toggle();
        $(".whatWeDoText2").toggle();
    });
    $(".clickable3").click(function(){
        $(".img3").toggle();
        $(".whatWeDoText3").toggle();
    });

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
    
    $("form").submit(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        alert(name+' we have received your message. Thank you fro reaching out to us. ')
        $("form").trigger('reset');
    })
})