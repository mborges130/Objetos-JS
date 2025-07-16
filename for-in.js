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

for(let chave in estudantes) {
    const tipo = typeof estudantes[chave];
    if (tipo !== 'object'&& tipo !== 'function') {
    const texto = `a chave ${chave} tem o valor ${estudantes[chave]}`
    console.log(texto);
    }
}


