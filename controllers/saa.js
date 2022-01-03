
const request = require('request');

const requestJKL = (req, res) => {

    request('https://ilmatieteenlaitos.fi/observation-data?station=101339', (err, resp, body) => {
        if (err) {
            console.log(err);
        }
        else {
            let weatherjson = JSON.parse(body);

            let temparray = weatherjson.t2m;
            let lastElement = temparray[temparray.length - 1];

            let aika = lastElement[0];
            let date = new Date(aika);
            let month = date.getUTCMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getUTCHours();
            let minutes = date.getMinutes();
            let text = "Lämpötila Jyväskylässä oli: " + lastElement[1] + "c\nAjankohtana: "
                + date.getUTCDate() + "." + month + " " + year + " " + hours + ":" + minutes;
            res.write(text);
            res.end();
        }
    });
}


const requestTRE = (req, res) => {

    request('https://ilmatieteenlaitos.fi/observation-data?station=101124', (err, resp, body) => {
        if (err) {
            console.log(err);
        }
        else {
            let weatherjson = JSON.parse(body);

            let temparray = weatherjson.t2m;
            let lastElement = temparray[temparray.length - 1];

            let aika = lastElement[0];
            let date = new Date(aika);
            let month = date.getUTCMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getUTCHours();
            let minutes = date.getMinutes();
            let text = "Lämpötila Tampereella oli: " + lastElement[1] + "c\nAjankohtana: "
                + date.getUTCDate() + "." + month + " " + year + " " + hours + ":" + minutes;
            res.write(text);
            res.end();
        }
    });
}

const requestOulu = (req, res) => {

    request('https://ilmatieteenlaitos.fi/observation-data?station=101786', (err, resp, body) => {
        if (err) {
            console.log(err);
        }
        else {
            let weatherjson = JSON.parse(body);

            let temparray = weatherjson.t2m;
            let lastElement = temparray[temparray.length - 1];

            let aika = lastElement[0];
            let date = new Date(aika);
            let month = date.getUTCMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getUTCHours();
            let minutes = date.getMinutes();
            let text = "Lämpötila Oulussa oli: " + lastElement[1] + "c\nAjankohtana: "
                + date.getUTCDate() + "." + month + " " + year + " " + hours + ":" + minutes;
            res.write(text);
            res.end();
        }
    });
}
module.exports = { requestJKL, requestTRE, requestOulu };
