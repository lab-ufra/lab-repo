//importação de funções:
import { say } from "./services/base.js";

//importação de variaveis:
import { data_input, invalid_input, success } from "./services/variables.js"

//importação de objetos e seus métodos:
import { screen } from "./objects/screen.js";
import { input_glass } from "./objects/input_glass.js";

    // data_input.addEventListener('keypress',(keyboard_event)=>{
    //     const only_numbers = /[0-9.]/;
    //     const key_validation = keyboard_event.key;

    //         if(!only_numbers.test(key_validation)){
    //             keyboard_event.preventDefault();
    //             return;
    //         }
    // })

    // data_input.addEventListener('keydown',(event)=>{
    //     let key = event.code;
    //     let input_value = event.target.value;

    //     if(key==='Enter'){
    //         if(input_value>10){
    //             screen.render_result(invalid_input);
    //             input_glass.reflect_error();
    //             data_input.value = '';
    //             return;
    //         } else {
    //             screen.render_result(success);
    //             input_glass.reflect_sucess();
    //         }
    //     }
    // })