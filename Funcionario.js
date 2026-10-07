import { Pessoa } from "../Pessoa.js";

// Classe Funcionario herda os dados básicos da classe Pessoa.
export class Funcionario extends Pessoa{
    constructor(nome, sobrenome, data_nasc, cpf, frequencia, salario, empresa){
        // Chama o constructor da classe Pai e passa os dados básicos.
        super(nome, sobrenome, data_nasc, cpf);

        // Define os dados específicos do funcionário.
        this.salario = salario;
        this.frenquencia = frequencia;
        this.empresa = empresa;
    }

    // Retorna uma mensagem com o salário do funcionário.
    getSalario(){
        return `O funcionario ${this.nome} ganha R$ ${this.salario}`
    }

    // Retorna o salário atualizado com um aumento de 10%.
    getAtualizandoSalario(){
        const salarioAtualizado = this.salario * 1.10;
        return `O salário atualizado de ${this.nome} é R$ ${salarioAtualizado.toFixed(2)}`
    }

    // Retorna a empresa e o salário do funcionário.
    getInfos(){
        return `${this.nome} trabalha na empresa ${this.empresa} com salário ${this.salario}`
    }

}