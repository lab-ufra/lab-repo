//elementos da página
const data_input = document.getElementById('score_in');

const invalid_input = "Nota inválida. Digite um valor entre 0 e 10."
const success = "A nota foi salva com sucesso."

const buttons = {
    btn_h: document.getElementById('btn-h'),
    btn_1: document.getElementById('btn-1'),
    btn_2: document.getElementById('btn-2'),
    btn_3: document.getElementById('btn-3'),
    btn_4: document.getElementById('btn-4'),
    btn_5: document.getElementById('btn-5'),
    btn_6: document.getElementById('btn-6'),
    btn_p: document.getElementById('btn-p')
}

const time_element = document.getElementById('time_orn');
const date_element = document.getElementById('date_orn');

const month_names = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

let audio = {
    memory_reboot: new Audio('./resources/assets/audios/memory-reboot.mp3'),
    is_playing: false
}
export { data_input, invalid_input, success, buttons, time_element, date_element, month_names, audio }