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
