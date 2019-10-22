$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    data:{
        q:"hanoi,vietnam",
        appid:"09a71427c59d38d6a34f89b47d75975c",
        units:"metric"
    },
    success: function (result) {
        var city = result.name;
        var country=result.sys.country;
        var deg=result.main.deg;
        var date=result.main.date;
        var weather=result.weather;

        $("#country").text(country);
        $("#deg").text(deg+"&#176");
        $("#date").text(date);

    }
});