const estudantes = {
    nome: 'José Silva',
    idade: 32,
    cpf: 1234567891011,
    turma: 'JavaScript'
}

estudantes.nome // josé 

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];

}
console.log(estudantes['nome']);
console.log(estudantes['cpf']);




