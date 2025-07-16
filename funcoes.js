const estudantes = {
    nome: 'José Silva',
    idade: 32,
    cpf: 1234567891011,
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11948556369', '55116987456'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudantes.estaAprovado(7.5));
