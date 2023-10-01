function marcarPresenca() {
    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;
    const empresa = document.getElementById('tipo').value;

    const dados = {
        nome: nome,
        setor: setor,
        empresa: empresa ? empresa : ''
    };

    if (!dados.nome || !dados.setor) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    try {   
        sendData(dados);
    } catch (error) {
        console.error('erro', error);
        alert("Ocorreu um erro ao enviar os dados.");
        return;
    }

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

// local storage pra não precisar inserir sempre os dados
document.addEventListener('DOMContentLoaded', function () {
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

    const url = 'https://webhook.site/9dcd8afe-9ce6-4c31-ba78-c24ae347d899';

    fetch(url, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(data => {
            console.log('Dados enviados:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar os dados', error);
        });
}
