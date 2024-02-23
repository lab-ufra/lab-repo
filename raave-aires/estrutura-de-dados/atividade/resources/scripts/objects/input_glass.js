export const input_glass = {
    glass_body: document.getElementsByClassName('score_in')[0],
    
    reflect_error(){
        this.glass_body.classList.toggle("glass-error")

            setTimeout(() => {
                this.glass_body.classList.toggle("glass-error");
            }, 2000);
    },

    reflect_sucess(){
        this.glass_body.classList.toggle('glass-success')

        setTimeout(() => {
            this.glass_body.classList.toggle('glass-success');
        }, 2000);
    }
}