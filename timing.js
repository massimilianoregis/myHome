
var Lights= require("./Lights")
var light = new Lights();
light.ledSoggiorno(false);
light.ledNotte(false);


function scheduleNextRun(hour, minute, callback) {
  const now = new Date();
  const target = new Date(now);

  target.setHours(hour, minute, 0, 0);

  // Se l'ora target è già passata oggi, sposto al giorno dopo
  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const delay = target.getTime() - now.getTime();

  console.log(`Schedulo il job per: ${target}`);
  console.log(`Delay in ms: ${delay}`);

  setTimeout(() => {
    callback();

    // Ri-schedula automaticamente per lo stesso orario il giorno dopo
    scheduleNextRun(hour, minute, callback);
  }, delay);
}

  scheduleNextRun(20, 40, function(){
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
