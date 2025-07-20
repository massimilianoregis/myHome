const lights=require("./const");
const https = require('http');
const url="http://192.168.0.2/forms.htm";

function httpGet(url, callback) {
    http.get(url, (res) => {
      let data = '';
  
      // Ricevo i dati a pezzi
      res.on('data', (chunk) => {
        data += chunk;
      });
  
      // Fine risposta
      res.on('end', () => {
        callback(null, data);
      });
  
    }).on('error', (err) => {
      callback(err);
    });
  }

class Lights{
    ledSoggiorno(value){
        console.log(`${url}?led${lights.LED_SOGGIORNO}=${value?'1':'0'}`)
        httpGet(`${url}?led${lights.LED_SOGGIORNO}=${value?'1':'0'}`)
    }
    ledNotte(value){
        console.log(`${url}?led${lights.LED_NOTTE}=${value?'1':'0'}`)
        httpGet(`${url}?led${lights.LED_NOTTE}=${value?'1':'0'}`)
    }
}

module.exports=Lights;