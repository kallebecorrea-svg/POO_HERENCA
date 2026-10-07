// Importa as classes Aluno e Funcionario para utilizar os objetos criados.
import { Aluno } from "./Aluno.js";
import { Funcionario } from "./Funcionario.js";

// Cria os objetos da classe Aluno.
let aluno1 = new Aluno('Yasmim', 'Bernardo' , '09/04/2007', '12345678910', 'Rua das Flores, 264', '1234567', 'AI em Programaçao', 99.0, 'Engie')
let aluno2 = new Aluno('João', 'Silva', '21/08/2008', '09876543210', 'Rua das Palmeiras, 12', '7654321', 'AI em Programação', 85.0, 'Engie')
let aluno3 = new Aluno('Maria', 'Oliveira', '03/02/2006', '11111111111', 'Rua da Conceição, 45', '6543210', 'AI em Programação', 90.0, 'Engie')
let aluno4 = new Aluno('Pedro', 'Santos', '17/11/2009', '22222222222', 'Rua do Vale, 88', '5432109', 'AI em Programação', 88.0, 'Engie')

// Cria os objetos da classe Funcionario.
let funcionario1 = new Funcionario('Ana', 'Silva', '12/05/1990', '98765432109', 95, 4500, 'Engie')
let funcionario2 = new Funcionario('Carlos', 'Santos', '08/01/1992', '12345678909', 90, 5200, 'Tech')
let funcionario3 = new Funcionario('Camila', 'Oliveira', '19/09/1995', '98765432108', 88, 3900, 'Engie')

// Mostra as informações do aluno.
console.log('Aluno:', aluno1.nome, aluno1.empresa)

// Mostra as informações do funcionário em ordem: salário atual, salário atualizado e detalhes.
console.log('Salário atual:', funcionario1.getSalario())
console.log('Salário atualizado:', funcionario1.getAtualizandoSalario())
console.log('Informações do funcionário:', funcionario1.getInfos())

