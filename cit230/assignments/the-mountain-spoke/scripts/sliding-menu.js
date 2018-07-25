$(function(){
    $('.slider').click(function(){
        $(this).next().slideToggle("slow");
        $(".slider").not(this).next().slideUp("slow");
    })
})

