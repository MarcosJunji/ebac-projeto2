const form = document.getElementById('cadastra-numero');
let linhas = '';
const nome = [];
const cidade = [];
const telefone = [];


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById ('nome')
    const inputCidade = document.getElementById ('cidade')
    const inputTelefone = document.getElementById ('telefone')

    if(nome.includes(inputNome.value)) {
        alert (`O usuário: ${inputNome.value} já foi inserido `)
    }   else {
        nome.push(inputNome.value);
        cidade.push(inputCidade.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha +=`<td>${inputNome.value}</td>`;
        linha +=`<td>${inputCidade.value}</td>`;
        linha +=`<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    

    inputNome.value = '';
    inputCidade.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}

