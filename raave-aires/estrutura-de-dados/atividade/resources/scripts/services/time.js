import { time_element, date_element, month_names } from "./variables.js";

function add_zero(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

setInterval(()=>{
    let current_time = new Date();
        let hours = current_time.getHours();
        let minutes = current_time.getMinutes();
        let seconds = current_time.getSeconds();

            minutes = add_zero(minutes);
            seconds = add_zero(seconds);

                time_element.textContent = `${hours}:${minutes}:${seconds}`
}, 1000);

function display_current_date(){
    const current_date = new Date();
        const day = current_date.getDate();
        const month = month_names[current_date.getMonth()];
        const year = current_date.getFullYear();
        const year_he = year + 10000;

            
            date_element.textContent = `${day} ${month} ${year_he.toLocaleString('en-US')}`;
}

display_current_date();