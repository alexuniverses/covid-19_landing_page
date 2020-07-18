const isoRegions = ['USA'];
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
        $('#stat-list').before(`<li><img src="img/icons/flags/usa.png">${countryName} ${deathsSum}</li>`);
        console.log(response)

    });
}
const Italy = ['Italy'];
for (const region of Italy) {
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
        $('#stat-list').before(`<li><img src="img/icons/flags/italy.png">${countryName} ${deathsSum}</li>`);
        console.log(response)

    });
}
const China = ['China'];
for (const region of China) {
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
        $('#stat-list').before(`<li><img src="img/icons/flags/china.png">${countryName} ${deathsSum}</li>`);
        console.log(response)

    });
}
const Spain = ['Spain'];
for (const region of Spain) {
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
        $('#stat-list').before(`<li><img src="img/icons/flags/spain.png">${countryName} ${deathsSum}</li>`);
        console.log(response)

    });
}
const Germany = ['Germany'];
for (const region of Germany) {
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
        $('#stat-list').before(`<li><img src="img/icons/flags/germany.png">${countryName} ${deathsSum}</li>`);
        console.log(response)

    });
}
const Iran = ['Iran'];
for (const region of Iran) {
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
        $('#stat-list').before(`<li><img src="img/icons/flags/iran.png">${countryName} ${deathsSum}</li>`);
        console.log(response)

    });
}