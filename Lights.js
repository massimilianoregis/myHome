const lights=require("./const");
var axios = require("axios").default
const url="http://192.168.0.2/forms.htm";
class Lights{
    ledSoggiorno(value){
        console.log(`${url}?led${lights.LED_SOGGIORNO}=${value?'1':'0'}`)
        axios.get(`${url}?led${lights.LED_SOGGIORNO}=${value?'1':'0'}`)
    }
    ledNotte(value){
        axios.get(`${url}?led${lights.LED_NOTTE}=${value?'1':'0'}`)
    }
}

module.exports=Lights;