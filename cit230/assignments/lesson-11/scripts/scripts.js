$(function() {
    $("#start").html("Changed to Go!");
});


$(function() {
    $("a").attr("href", "http://www.jquery.com");
});

$(function() {
    $("table").removeAttr("border");
    $("table").removeAttr("class");
});


$(function() {
    var val = $("p").html();
   // alert(val);
});
// alerts "JQuery is <b>fun</b>"

$(function() {
    var val = $("p").text();
  //  alert(val);
});
// alerts "JQuery is fun"



$(function() {
    $("#test").text("hello!");
});


$(function() {
//    alert($("#name").val());
});
//alerts "Your Name"


$(function() {
    $("#demo").append($("#name").val());
});
//Outputs "Hi David"

$(function() {
    $("#demo").before("<i>Some Title</i>");
    $("#demo").after("<b>Welcome</b>");
});


$(function() {
    var txt = $("<p></p>").text("Hi");
    $("#demo").after(txt);
});










































