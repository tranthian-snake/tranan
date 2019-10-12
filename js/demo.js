

var a = $("h2");
var b = $(".article");
var c = $("#art1");

var readmore = $(".art-read a");

var logo = $(".logo");
var hidelogo = $(".hidelogo");
var showlogo = $(".showlogo");



hidelogo.bind("click",function () {
    //logo.hide();
    //logo.fadeOut();
    logo.slideUp();
});
showlogo.bind("click",function () {
    //logo.show();
    //logo.fadeIn(300);
    logo.slideDown(300);
});

readmore.bind("click",function () {
    a.css("color","red");




// b.css("background-color","pink");
// b.css("border","5px solid green");
    b.css({
        "background-color":"pink",
        "border": "5px solid green"
    });

    console.log(a.text());
    a.text("Xin chao T1908A");

    console.log(c.html());
    c.html("<h1>Day la sau khi bi sua html</h1>");

});

b.bind("mouseenter",function () {
    //b.css("background-color","darkgreen");
    $(this).css("background-color","orange");
});
b.bind("mouseleave",function () {
    //b.css("background-color","#ffffff");
    $(this).css("background-color","#ffffff");
});

// MENU
var m = $(".menu > li");
m.bind("mouseenter",function () {
    $(this).addClass("active");
    var s = $(this).children(".submenu");
    s.slideDown();
});
m.bind("mouseleave",function () {
    $(this).removeClass("active");
    var s = $(this).children(".submenu");
    s.hide();
});


