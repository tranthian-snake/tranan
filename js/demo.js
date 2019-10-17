

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



$.ajax({
    url:"data/data.json",
    method:"GET",
    success:function (result) {
        var arts=result.articles;
for (i=0;i<arts.length;i++){
    var xyz = '<div class="article">\n' +
        '                    <div class="art-title">\n' +
        '                        <h2>'+arts[i].title+'</h2>\n' +
        '                    </div>\n' +
        '                    <div class="art-info">\n' +
        '                        <span>Posted by Admin at <span>'+arts[i].posted_at+'</span></span>\n' +
        '                    </div>\n' +
        '                    <div class="art-desc">\n' +
        '                        <div class="thumb">\n' +
        '                            <img src="'+arts[i].image+'"/>\n' +
        '                        </div>\n' +
        '                        <div class="desc">\n' +
        '                            <span>'+arts[i].desc+'</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="art-read">\n' +
        '                        <a href="#">Read More</a>\n' +
        '                    </div>\n' +
        '                </div>';
    var content = $(".content");
    content.append(xyz);
}
}
});



$.ajax({
    url: "data/weather.json",
    method: "GET",
    success: function (result) {
        var city = result.name;
        var country=result.sys.country;
        var temp=result.main.temp;
        var pressure= result.main.pressure;
        var humidity=result.main.humidity;
        var speed=result.wind.speed;
        var weather=result.weather;
        var cloud;
        for (i=0;i<weather.length;i++){
            cloud=weather[i].main;
        }
        $("#city").text(city+"-"+country);
        $("#temp").text(city+"K");
        $("#pressure").text(pressure);
        $("#hump").text(humidity);
        $("#speed").text(speed);
        $("#cloud").text(cloud);

    }
});



