export const screen = {
    results_field: document.getElementById('result'),
    
    render_result(text){
        this.results_field.innerHTML = `<p id="response">${text}</p>`;
    }
}