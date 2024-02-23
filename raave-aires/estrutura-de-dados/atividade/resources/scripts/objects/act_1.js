import { field } from "../services/variables.js"

const act_1 = {
    input_field: `
                <p>
                    1. Faça um programa que peça uma nota, entre zero e dez. Ele deve:
                    <br> 1.1. Mostre uma mensagem caso o valor seja inválido, e 
                    <br> 1.2. Continue pedindo até que o usuário informe um valor válido.
                </p>

                <br><br>
                <label for="act_input_1">Digite um número entre 0 e 10.</label>
                    <input type="text" class="score_in" id="act_input" minlength="1" maxlength="4">`,
    render(){
        field.innerHTML = this.input_field;
    }
}

export { act_1 }