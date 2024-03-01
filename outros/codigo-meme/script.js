//importação dos audios:
let audUm = new Audio('./assets/som-do-click-um.mp3')
let audDois = new Audio('./assets/som-do-click-dois.mp3');

//variaveis globais
let corpo = document.getElementsByClassName('corpo')[0]; //a função .getElementsByClassName() retorna uma array
let titulo = document.getElementById('titulo');
let subtitulo = document.getElementById('subtitulo');
let pergunta = document.getElementById('pergunta');
let divAtual = document.getElementById('botoes');

//função de click sim
let respostaSim = document.getElementById('sim').addEventListener('click',()=>{
    audDois.play();

    corpo.style.backgroundColor = '#ff1fc7';

        let novaDiv = document.createElement('div');
        let texto =  document.createTextNode('');
                novaDiv.appendChild(texto);
    
                document.body.insertBefore(novaDiv,divAtual);
                    novaDiv.innerHTML = '<a href="https://bit.ly/rickroll-010">Agora, clique aqui</a>';

                    titulo.innerHTML = 'Arrasou, bicha!'

                    subtitulo.remove();
                    pergunta.remove();
                    divAtual.remove();
})

//função de click não:
let respostaNao = document.getElementById('nao').addEventListener('click',()=>{
    corpo.style.backgroundColor = '#ff61f2';
    titulo.innerHTML = 'Bem-vinda à web, Fª.D.P!';
    pergunta.innerHTML = 'Então, você é mulher mesmo, né?';

        //cria uma nova div contendo novos botões:
        let novosBotoes = document.createElement('div');
        let botoes = document.createTextNode('');
                novosBotoes.appendChild(botoes);

                document.body.insertBefore(novosBotoes,divAtual);
                    novosBotoes.innerHTML = '<button id="sim_m">Sim.</button><button id="nao_m">Não.</button>'
                    
                    divAtual.remove();

                //funções para os novos botões:
                let mulherSim = document.getElementById('sim_m').addEventListener('click',()=>{
                    corpo.style.backgroundColor = 'red';
                    titulo.innerHTML = 'Você é uma: ';
                        novosBotoes.innerHTML = '<a href="https://bit.ly/rickroll-009">Agora, clique aqui</a>';
                        
                        subtitulo.remove();        
                        pergunta.remove();

                    audUm.play();
                }); //fim da função de click mulher sim

                let mulherNao = document.getElementById('nao_m').addEventListener('click',()=>{
                    corpo.style.backgroundColor = '#ff1fc7';
                    titulo.innerHTML = 'Pois é um viado! E ainda por cima, é um mentiroso!';
                        novosBotoes.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Agora, clique aqui</a>';

                        subtitulo.remove();
                        pergunta.remove();
                });//fim da função de click mulher não
})//função de click não