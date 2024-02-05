//função de click sim
let respostaSim = document.getElementById('sim').addEventListener('click',()=>{
    let corpo = document.getElementsByClassName('corpo')[0];
        corpo.style.backgroundColor = '#ff1fc7';

        var novaDiv = document.createElement('div');
        var texto =  document.createTextNode('');
            novaDiv.appendChild(texto);
    
        let divAtual = document.getElementById('botoes');
            document.body.insertBefore(novaDiv,divAtual);

                novaDiv.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Agora, clique aqui</a>';

        let titulo = document.getElementById('titulo');
            titulo.innerHTML = 'Arrasou, bicha!'

        let sub = document.getElementById('subtitulo');
            sub.remove();
        
        let h2 = document.getElementById('pergunta');
            h2.remove();

            divAtual.remove();
})

let respostaNao = document.getElementById('nao').addEventListener('click',()=>{

    let titulo = document.getElementById('titulo');
        titulo.innerHTML = 'Bem-vinda à web, Fª.D.P!';

    let cabecalho = document.getElementById('pergunta');
        cabecalho.innerHTML = 'Então, você é mulher mesmo, né?';

    let novosBotoes = document.createElement('div');
    let botoes = document.createTextNode('');
        novosBotoes.appendChild(botoes);

    let divAtual = document.getElementById('botoes');
        document.body.insertBefore(novosBotoes,divAtual);
            divAtual.remove();

            novosBotoes.innerHTML = '<button id="sim_m">Sim.</button><button id="nao_m">Não.</button>'

            //as arrow fuction dentro da era function que substituem os botoes originais por novos
            let mulherSim = document.getElementById('sim_m').addEventListener('click',()=>{
                titulo.innerHTML = 'Puta, vadia, vagabunda, piranha';

                let sub = document.getElementById('subtitulo');
                    sub.remove();
            
                let h2 = document.getElementById('pergunta');
                    h2.remove();

                    novosBotoes.innerHTML = '<a href="https://www.youtube.com/watch?v=bg13nNe2qG4">Agora, clique aqui</a>';
            });

            let mulherNao = document.getElementById('nao_m').addEventListener('click',()=>{
                titulo.innerHTML = 'Pois é um viado! E ainda por cima, é um mentiroso!';

                let sub = document.getElementById('subtitulo');
                    sub.remove();
            
                let h2 = document.getElementById('pergunta');
                    h2.remove();

                    novosBotoes.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Agora, clique aqui</a>';
            });
})