// Classe base que contém os dados comuns a alunos e funcionários.
export class Pessoa{
    constructor(nome, sobrenome, data_nasc, telefone, email, enedereco, cpf){
        // Armazena os dados pessoais da pessoa.
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data_nasc = data_nasc;
        this.telefone = telefone;
        this.email = email;
        this.enedereco = enedereco; 
        this.cpf = cpf
    }

    // Retorna o nome completo da pessoa.
    getNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    };

    // Retorna a idade da pessoa baseada no ano atual.
    getIdade(){
        hoje = new Date();
        return hoje.getFullYear() - this.data_nasc
    }
}