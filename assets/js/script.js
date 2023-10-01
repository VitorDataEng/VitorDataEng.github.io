function marcarPresenca() {
    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;
    const empresa = document.getElementById('tipo').value;

    const dados = {
        nome: nome,
        setor: setor,
        empresa: empresa
    };

    localStorage.setItem('dadosPresenca', JSON.stringify(dados));


    document.getElementById('nome').value = '';
    document.getElementById('setor').value = 'Convidado';
    document.getElementById('tipo').value = '';

    alert('Dados de presença marcados com sucesso!');
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

document.addEventListener('DOMContentLoaded', function() {
    const dados = JSON.parse(localStorage.getItem('dadosPresenca'));

    if (dados) {
        document.getElementById('nome').value = dados.nome;
        document.getElementById('setor').value = dados.setor;
        document.getElementById('tipo').value = dados.empresa;

        mostrarTipo(); 
    }
});

function sendData(){

    return console.log("Hello")
}