const schedule = require('node-schedule');

var Lights= require("./Lights")
var light = new Lights();


schedule.scheduleJob({hour: 20, minute: 0}, function(){
    light.ledSoggiorno(true);
  });
schedule.scheduleJob({hour: 22, minute: 0}, function(){
    light.ledNotte(true);
  });


schedule.scheduleJob({hour: 1, minute: 0}, function(){
  light.ledSoggiorno(false);
  light.ledNotte(false);
});

console.log("waiting")