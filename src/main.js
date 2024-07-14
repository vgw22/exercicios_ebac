const alunos = [
    {nome: 'Matheus', nota: 6.5},
    {nome: 'Carlos', nota: 4},
    {nome: 'José', nota: 9},
    {nome: 'Luana', nota: 10},
    {nome: 'Ana', nota: 5.5},
    {nome: 'Júlia', nota: 3.5}
]

console.log(alunos);

const aprovados = (alunos) => alunos.filter(function (item) {
    return item.nota >= 6;
})

const alunosAprovados = aprovados(alunos);

alunosAprovados.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} foi aprovado com uma nota de: ${aluno.nota}`);
})