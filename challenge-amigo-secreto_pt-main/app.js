//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let input = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

    function adicionarAmigo() {
        console.log('adicionar nome')
        let campoDigit = input.value.trim();
        


        if (campoDigit ==='') {
            console.log('campo vazio')
            alert('Por favor insira um nome!');
            return;    
        }

            if (amigos.includes(campoDigit)) {
                
                alert('Esse nome já esta participando!');
                input.value = "";
                return;
            }
            
                
                amigos.push(campoDigit);
            
        let novoNome = document.createElement('li');
            novoNome.innerHTML = campoDigit;
            lista.appendChild(novoNome);
            
            atualizarLista();

            input.value = '';
}
    function atualizarLista(){
        console.log('atualizarlista')
                lista.innerHTML = '';
            }
            for (let i = 0; i < amigos.length; i++) {
                let novoNome = document.createElement('li');
                novoNome.textContent = amigos[i];
                lista.appendChild(novoNome);
            }


    function sortearAmigo() {
        
        if (amigos.length === 0) {
        return alert('Não há amigos na lista');
    }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        let amigoSelecionado = amigos[indiceAleatorio];
        console.log(`O amigo selecionado é: ${amigoSelecionado}`);
        
        let resultadoElement = document.getElementById("resultado");
        
        if (resultadoElement) {
            resultadoElement.textContent = `O amigo sorteado é: ${amigoSelecionado}`;
         } else {
            console.error('Elemento com o ID "resultado" não encontrado.');
     }

        return amigoSelecionado;
    }
 
                document.querySelector('.button-add').addEventListener('click', function() {
                let campoDigit = input.value.trim();
            if (campoDigit !== '') {
                adicionarAmigo();
            }});  
                ;   

                input.addEventListener('input', function() {
                this.value = this.value.replace(/[^a-zA-Z]/g, '');
        });