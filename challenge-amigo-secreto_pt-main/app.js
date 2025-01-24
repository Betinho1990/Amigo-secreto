//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let input = document.querySelector('input');
let lista = document.querySelector('ul');

    function adicionarAmigo() {
        let campoDigit = input.value.trim();


            if (amigos.includes(campoDigit)) {
                alert('Esse nome já esta participando!');
                input.value = "";
                return;
            }
            if (campoDigit ==='') {
                alert('Por favor insira um nome!');
                return;    
            }

            amigos.push(campoDigit);
            
            let novoNome = document.createElement('li');
            novoNome.innerHTML = campoDigit;
            lista.appendChild(novoNome);
            input.value = '';
}
            input.querySelector('.button-add').addEventListener('click', adicionarAmigo);
        
            campoDigit.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Z]/g, '');
        });