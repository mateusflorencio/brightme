#! bin/sh/zsh

npx sequelize-cli model:generate --name Image --attributes url:STRING,relacaoId:INTEGER

# Mateus, depois vc verifica a palavra "Administrador? Não sei se pode dar problema da forma como está escrito aqui"
npx sequelize-cli model:generate --name Adiministrador --attributes nome:STRING

npx sequelize-cli model:generate --name Fabricante --attributes nome:STRING,sede:STRING

npx sequelize-cli model:generate --name Categoria --attributes nome:STRING

npx sequelize-cli model:generate --name Estoque --attributes nome:STRING,quantidade:INTEGER

npx sequelize-cli model:generate --name Produto --attributes ativo:BOOLEAN,nome:STRING,preco:DOUBLE,titulo:STRING,descricao:STRING,categoriaId:INTEGER,fabricanteId:INTEGER,imageId:INTEGER,estoqueId:INTEGER,promocaoId:INTEGER,kitId:INTEGER

npx sequelize-cli model:generate --name KitProdutos --attributes ativo:BOOLEAN,produtosId:INTEGER,kitId:INTEGER

npx sequelize-cli model:generate --name Cupom --attributes ativo:BOOLEAN,codigo:INTEGER,porcentagen:INTEGER,desconto:DOUBLE

npx sequelize-cli model:generate --name Promocao --attributes ativo:BOOLEAN,produtoId:INTEGER,porcentagen:INTEGER

npx sequelize-cli model:generate --name Kit --attributes ativo:BOOLEAN,produtoId:INTEGER,titulo:STRING,descricao:STRING,imageId:INTEGER

npx sequelize-cli model:generate --name Endereco --attributes cep:INTEGER,numero:INTEGER,logradouro:STRING,bairro:STRING,complemento:STRING,UF:STRING,municipio:STRING,referencia:STRING,clienteId:INTEGER

npx sequelize-cli model:generate --name StatusOS --attributes status:STRING

npx sequelize-cli model:generate --name StatusOS --attributes status:STRING

npx sequelize-cli model:generate --name Pedido --attributes produtoId:INTEGER,subtotal:DOUBLE,cupomId:INTEGER,total:DOUBLE,frete:DOUBLE

npx sequelize-cli model:generate --name OrdemDeServico --attributes pedidoId:INTEGER,enderecoId:INTEGER,statusOPId:INTEGER,clienteId:INTEGER

npx sequelize-cli model:generate --name Cliente --attributes nome:STRING,sobrenome:STRING,senha:STRING,email:STRING,telefone:STRING,cpf:STRING --force

npx sequelize-cli model:generate --name PedidoProduto --attributes produtoId:INTEGER,pedidoId:INTEGER