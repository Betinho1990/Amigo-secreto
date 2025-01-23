//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let input = document.querySelector('input');
let lista = document.querySelector('ul');

    function adicionarAmigo() {
        let campoDigit = document.querySelector('input').value;
        
        let novoNome = document.createElement('li');
        novoNome.innerHTML = campoDigit;
        
        lista.appendChild(novoNome);

        input.value = '';

        if (campoDigit==''){
            alert('Por favor insira um nome!')
        } else {
            amigos.push(campoDigit);
            return amigos;
        }
    }
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z]/g, '');
});