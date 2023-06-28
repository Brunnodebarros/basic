$(document).ready(function() {
// progress bar

let containerA= document.getElementById("circleA");

let circleA = new ProgressBar.Circle(containerA, {

    color: '#64DAF9',
    stroke: 8,
    duration: 1400,
    from: { color: '#AAA' },
    to: {color: '#65DAF9'},

    step: function(state, circle){
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 60);

        circle.setText(value);
        
    }

    });

});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário caso a validação falhe
        
        // Validação dos campos
        var nome = document.getElementById('nome');
        var email = document.getElementById('email');
        var telefone = document.getElementById('telefone');
        var mensagem = document.getElementById('mensagem');

        if (nome.value.trim() === '') {
            alert('Por favor, preencha o campo Nome.');
            nome.focus();
            return false;
        }

        if (email.value.trim() === '') {
            alert('Por favor, preencha o campo Email.');
            email.focus();
            return false;
        }

        if (telefone.value.trim() === '') {
            alert('Por favor, preencha o campo Telefone.');
            telefone.focus();
            return false;
        }

        if (mensagem.value.trim() === '') {
            alert('Por favor, preencha o campo Mensagem.');
            mensagem.focus();
            return false;
        }

        // Se todos os campos estiverem preenchidos corretamente, você pode prosseguir com o envio do formulário
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});

// Obtém os elementos necessários
const fileInputs = document.querySelectorAll('input[type="file"]');
const submitButtons = document.querySelectorAll('.apply-btn');

// Adiciona um evento de alteração para cada campo de arquivo
fileInputs.forEach((fileInput) => {
    fileInput.addEventListener('change', () => {
        // Verifica se um arquivo foi selecionado
        const hasFile = fileInput.files.length > 0;
        
        // Obtém o botão de envio correspondente
        const submitButton = fileInput.parentNode.querySelector('.apply-btn');
        
        // Atualiza o estado do botão de envio com base na presença de um arquivo
        submitButton.disabled = !hasFile;
        
        // Aplica a classe 'green' ao botão de envio se um arquivo estiver anexado
        if (hasFile) {
            submitButton.classList.add('green');
        } else {
            submitButton.classList.remove('green');
        }
    });
});

// Adiciona um evento de clique para cada botão de envio
submitButtons.forEach((submitButton) => {
    submitButton.addEventListener('click', () => {
        // Verifica se o botão está desabilitado
        if (submitButton.disabled) {
            return;
        }
        
        // Exibe a mensagem de agradecimento
        alert('Obrigado pelo envio da candidatura!');
    });
});



