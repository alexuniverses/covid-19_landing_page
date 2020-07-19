const isoRegions = ['USA','China','Spain','Italy','Iran','Germany'];
for (const region of isoRegions) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${region}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "78c66dfa48msha1562dcaad45840p1bca83jsn54fe4420d517"
        }
    }

    $.ajax(settings).done(function (response) {
        const countryName = response.data.covid19Stats[0].country;
        let deathsSum = 0;
        response.data.covid19Stats.forEach((item) => {
            deathsSum += item.confirmed;
        });
        $('#stat-list').before(`<li><img src="img/icons/flags/${countryName}.png"><span>${countryName}</span><span>${deathsSum}</span></li>`);
        console.log(response)

    });
}
