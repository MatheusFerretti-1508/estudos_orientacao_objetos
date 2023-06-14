function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
    this.dizCargo = function() {
        console.log(this.cargo)
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }
    this.setSalario = function(valor) {
        if (typeof valor === 'number') { /*Garantindo que a atribuição seja numerica*/
            _salario = valor
        }
    }
    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario
    }

    Pessoa.call(this, nome);
}

    function Estagiario(nome) {
        Funcionario.call(this, nome, "Estagiario", 2000)

            this.aumento = function() {
                const novoSalario = this.getSalario() * 1.07;
                this.setSalario(novoSalario);
                _salario = novoSalario
    }
    }

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro")

funcionario1.aumento();
console.log(funcionario2)

funcionario2.aumento();
console.log(funcionario2.getSalario())   