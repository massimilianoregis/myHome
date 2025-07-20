
var Lights= require("./Lights")
var light = new Lights();
light.ledSoggiorno(false);
light.ledNotte(false);


function scheduleNextRun(hour, minute, callback) {
  const now = new Date();
  const next = new Date(now);

  next.setDate(now.getDate() + 1); // giorno dopo
  next.setHours(hour, minute, 0, 0); // ora e minuto obiettivo

  const delay = next.getTime() - now.getTime();

  console.log(`Schedulo il job per: ${next}`);
  console.log(`Delay in ms: ${delay}`);

  setTimeout(() => {
    callback();

    // Se vuoi ri-schedulare automaticamente per il giorno dopo:
    scheduleNextRun(hour, minute, callback);
  }, delay);
}

  scheduleNextRun(20, 30, function(){
      light.ledSoggiorno(true);
  });


  scheduleNextRun(22, 0,  function(){
    light.ledNotte(true);
  });


  scheduleNextRun(1, 0, function(){
    light.ledSoggiorno(false);
    light.ledNotte(false);
  });


console.log("waiting")
