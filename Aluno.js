import { Pessoa } from "../Pessoa.js";

// Classe Aluno herda os dados básicos da classe Pessoa.
export class Aluno extends Pessoa{
    constructor(nome, sobrenome, data_nasc, cpf, endereco, matricula, curso, frequencia, empresa){
        // Chama o constructor da classe Pai e passa os dados básicos.
        super(nome, sobrenome, data_nasc, cpf, endereco);

        // Define os dados específicos do aluno.
        this.matricula = matricula;
        this.curso = curso;
        this.frequencia = frequencia;
        this.empresa = empresa;
    }

    // Retorna uma mensagem sobre o estudo do aluno.
    getEstudar(){
        return `${this.nome} está estudando Javascript`;
    }

    // Retorna as informações completas do aluno.
    getInfo(){
        return `O aluno(a) ${super.getNomeCompleto()} esta matriculado no curso: ${this.curso()}`
    }
}