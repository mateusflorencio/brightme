module.exports = class newClienteDto {
  constructor(nome, sobrenome, senha, email, telefone, cpf){
    this.nome = nome[0].toUpperCase() + nome.substring(1)
    this.sobrenome = sobrenome[0].toUpperCase() + sobrenome.substring(1)
    this.senha = senha
    this.email = email
    this.telefone = telefone
    this.cpf = cpf
  }
}