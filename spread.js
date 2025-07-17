const estudantes = {
    nome: 'José Silva',
    idade: 32,
    cpf: 1234567891011,
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11948556369', '55116987456'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

//exibirTelefones(estudantes.telefones[0], estudantes.telefones[1]);
exibirTelefones(...estudantes.telefones);

const dadosEnvio = {
    destinatario: estudantes.nome,
...estudantes.enderecos[0]
}
console.log(dadosEnvio);

