class FizzBuzz{
    respoder_fizz_buzz(numero){
        if(numero % 3 == 0){

            return 'Fizz';
        }
    }

    respuesta_fallida(){
        //
    }

}

// module.exports = FizzBuzz; forma menos moderna. Desde el archivo de importación se debe llamar así: const FizzBuzz = require('../FizzBuzz');
export {FizzBuzz}; // forma ES6 en el archivo de importación se debe llamar así: import { FizzBuzz } from "../FizzBuzz";