function Pessoa(nomeCompleto) {
    this.nomeCompleto = nomeCompleto;
    this.dizNome = function() {
        console.log("Nome completo: " + this.nomeCompleto);
    }
}

function Presidiario(nomeCompleto, dataDaPrisao, sentenca) {
    Pessoa.call(this, nomeCompleto);
    this.dataDaPrisao = dataDaPrisao;
    this.foiPresoEm = function() {
        console.log("Foi preso em: " + this.dataDaPrisao);
    }
    this.sentenca = sentenca;
    this.dizSentenca = function() {
        console.log("Sentença: " + this.sentenca);
    }
}

function PresidiarioPerpetua(nomeCompleto, dataDaPrisao) {
    Presidiario.call(this, nomeCompleto, dataDaPrisao, "Prisão perpétua");
}

function PresidiarioPolitico(nomeCompleto, dataDaPrisao) {
    Presidiario.call(this, nomeCompleto, dataDaPrisao, "3 dias");
}

function PresidiarioAssaltante(nomeCompleto, dataDaPrisao) {
    Presidiario.call(this, nomeCompleto, dataDaPrisao, "2 semanas");
}

const presidiario1 = new Presidiario("João Passos", "20/05/2021", "20 anos");
const presidiario2 = new PresidiarioPerpetua("Carlos Almeida", "11/09/2001");
const presidiario3 = new PresidiarioPolitico("Roberto Andes", "26/11/2023");
const presidiario4 = new PresidiarioAssaltante("Leandro Antônio", "20/02/2004");

presidiario1.dizNome();
presidiario1.foiPresoEm();
presidiario1.dizSentenca();

presidiario2.dizNome();
presidiario2.foiPresoEm();
presidiario2.dizSentenca();

presidiario3.dizNome();
presidiario3.foiPresoEm();
presidiario3.dizSentenca();

presidiario4.dizNome();
presidiario4.foiPresoEm();
presidiario4.dizSentenca();