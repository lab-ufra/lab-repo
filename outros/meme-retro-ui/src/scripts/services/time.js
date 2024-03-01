import { month_names, date_element } from "./variables.js";

export function display_current_date(){
    const current_date = new Date();
        const day = current_date.getDate();
        const month = month_names[current_date.getMonth()];
        const year = current_date.getFullYear();
        const year_he = year + 10000;

            
            date_element.textContent = `${year_he.toLocaleString('en-US')} - ${month} - ${day} `;
}