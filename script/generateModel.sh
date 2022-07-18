#! bin/sh/zsh

npx sequelize-cli model:generate --name Image --attributes url:STRING

npx sequelize-cli model:generate --name Adiministrador --attributes nome:STRING

npx sequelize-cli model:generate --name Fabricante --attributes nome:STRING,sede:STRING

npx sequelize-cli model:generate --name Categoria --attributes nome:STRING

npx sequelize-cli model:generate --name Estoque --attributes nome:STRING,quantidade:INTEGER

npx sequelize-cli model:generate --name Produto --attributes ativo:BOOLEAN,nome:STRING,preco:DOUBLE,titulo:STRING,descricao:STRING,categoriaId:ARRAY:INTEGER,fabricanteId:INTEGER,imgId:ARRAY:INTEGER

npx sequelize-cli model:generate --name Cupom --attributes ativo:BOOLEAN,codigo:INTEGER,porcentagen:INTEGER,desconto:DOUBLE

npx sequelize-cli model:generate --name Promocao --attributes ativo:BOOLEAN,produtoId:INTEGER,porcentagen:INTEGER

npx sequelize-cli model:genrate --name Kit --attributes ativo:BOOLEAN,produtoId:ARRAY:INTEGER,titulo:STRING,descricao:STRING,imageId:ARRAY:INTEGER

npx sequelize-cli model:generate --name Endereco --attributes cep:INTEGER,numero:INTEGER,logradouro:STRING,bairro:STRING,complemento:STRING,UF:STRING,municipio:STRING,referencia:STRING

npx sequelize-cli model:generate --name StatusOS --attributes status:STRING

npx sequelize-cli model:generate --name Pedido --attributes clienteId:INTEGER,produtoId:INTEGER,subtotal:DOUBLE,cupomId:INTEGER,total:DOUBLE,frete:DOUBLE

npx sequelize-cli model:generate --name OrdemDeServico --atttibutes pedidoId:INTEGER,enderecoId:INTEGER,statusOPId:INTEGER,clienteId:INTEGER

npx sequelize-cli model:generate --name Cliente --attribustes nome:STRING,sobrenome:STRING,senha:STRING,email:STRING,telefone:INTEGER,imageId:INTEGER,cpf:STRING,enderecoId:INTEGER,ordemDeServicoId:INTEGER
