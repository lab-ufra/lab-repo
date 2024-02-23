import { buttons, audio } from "./variables.js";

buttons.btn_p.addEventListener('click',()=>{
    if(audio.is_playing === false){
        audio.memory_reboot.play();
            audio.is_playing = true;
    } else {
        audio.memory_reboot.pause();
            audio.is_playing = false;
    }
});