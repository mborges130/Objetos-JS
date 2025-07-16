const estudantes = {
    nome: 'José Silva',
    idade: 32,
    cpf: 1234567891011,
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11948556369', '55116987456'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}



estudantes.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
})

//console.log(estudantes.endereco);
//console.log(estudantes.endereco[0]);

const listaDeEnderecosComComplemeto = estudantes.endereco.filter((endereco) => endereco.complemento)

console.log(listaDeEnderecosComComplemeto);

