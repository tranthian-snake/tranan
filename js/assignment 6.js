$.ajax({
    url: "data/assignment 6.json",
    method: "GET",
    success: function (result) {
        var city = result.name;
        var country=result.sys.country;
        var deg=result.main.deg;
        var date=result.main.date;
        var weather=result.weather;
        $("#city").text(city+"-"+country);

        $("#country").text(country);
        $("#deg").text(deg+"&#176");
        $("#date").text(date);

    }
});