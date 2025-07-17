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

const chavesObjeto = Object.keys(estudantes);

console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')){
    console.error('é necessário ter um endereço cadastrado')
}