'use strict';

const express = require('express');
const service = express();
const request = require('superagent');
const moment = require('moment');


//geocoding api key: AIzaSyDlnJCpWK0isWc5Yok9blxI5usG3IoQOOo
//https://maps.googleapis.com/maps/api/geocode/json?address=vienna&key=AIzaSyDlnJCpWK0isWc5Yok9blxI5usG3IoQOOo

//timezone api key : AIzaSyC0L1C47I2wkYfN3C6SJ1ExnLER4w_dIzY
//https://maps.googleapis.com/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000&key=YOUR_API_KEY

//openweather API key: f0447678f30bd98a8e30b6ac1e7b6bd9


service.get('/service/:location', (req, res, next)=>{
    console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
    console.log('Ciudad: ' + req.params.location );
    request.get('http://api.openweathermap.org/data/2.5/weather?q='+ req.params.location + '&APPID=f0447678f30bd98a8e30b6ac1e7b6bd9&units=metric',
     (err, response)=>{
        console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
        if (err){
            console.log(err);
            return res.sendStatus(404);
        }
        console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
        const respuesta = response.body;
        const tiempo = respuesta.weather[0].description;
        const temp = respuesta.main.temp;
        console.log(`kkkkkkkkkkkkkkkk:${req.params.location} : ${tiempo} at ${temp} degrees`);
        res.json({result:`${req.params.location} : ${tiempo} at ${temp} degrees`});
    });
});

module.exports = service;