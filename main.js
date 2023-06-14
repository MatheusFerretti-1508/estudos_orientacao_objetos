const carroDoJoao = {  /*Objeto literal*/
    modelo: 'Corolla',
    fabricante: 'Toyota',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() { /*Metodo*/
        console.log("vruum");
    }
}

const carroDaMaria = {  /*Objeto literal*/
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() { /*Metodo*/
        console.log("vruum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("vruum");
    }
}

const carroDoJoao2 = new Carro("Corolla", "Toyota", 2021, 2020);
const carroDaMaria2 = new Carro("Ka", "Ford", 2020, 2019)

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "matheus";
const idade = 18;
const ehMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"];

const pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

function mostraAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}
mostraAtributo('nome')

pessoa.sobrenome = null

if (pessoa.sobrenome) {
    console.log('A pessoa tem sobrenome')
}

if ('sobrenome' in pessoa) {
    console.log('Existe sobrenome')
}