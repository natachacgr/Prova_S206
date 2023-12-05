Feature: Teste de Criar Usuário

Scenario: Criar um novo usuário
  Given url 'https://gorest.co.in/public-api/users'
  And request { data.name: 'Novo Usuário', data.gender: 'male', data.email: 'novousuario@teste.com', data.status: 'active' }
  When method post
  Then status 200
  And match $.data.name == 'Novo Usuário'

Scenario: Verificar a listagem de usuários
  Given url 'https://gorest.co.in/public-api/users'
  When method get
  Then status 200
  And match response.data.size > 0

Scenario: Atualizar informações de um usuário
  Given url 'https://gorest.co.in/public-api/users/5710543' 
  And request { data.name: 'test' }
  When method put
  Then status 200
  And match response.data.name == 'test'









