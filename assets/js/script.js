function marcarPresenca() {
    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;
    const empresa = document.getElementById('tipo').value;

    const dados = {
        nome: nome,
        setor: setor,
        empresa: empresa ? empresa : ''
    };

    sendData(dados);

    localStorage.setItem('dadosPresenca', JSON.stringify(dados));

    document.getElementById('nome').value = '';
    document.getElementById('setor').value = '';
    document.getElementById('tipo').value = '';
}

function mostrarTipo() {
    const setor = document.getElementById('setor').value;
    const tipoSelect = document.querySelector('.tipo-select');
    if (setor === 'Convidado') {
        tipoSelect.style.display = 'block';
    } else {
        tipoSelect.style.display = 'none';
    }
}

// local storage pra não precisar inserir sempre os
document.addEventListener('DOMContentLoaded', function() {
    const dados = JSON.parse(localStorage.getItem('dadosPresenca'));

    if (dados) {
        document.getElementById('nome').value = dados.nome;
        document.getElementById('setor').value = dados.setor;
        document.getElementById('tipo').value = dados.empresa;
        mostrarTipo(); 
    }
});

function sendData(dados) {

    const data = {
        nome: dados.nome,
        setor: dados.setor,
        empresa: dados.empresa
    };
    
    console.log(data)

    const url = 'https://webhook.site/9dcd8afe-9ce6-4c31-ba78-c24ae347d899';  

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
}
