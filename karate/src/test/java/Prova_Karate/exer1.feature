Feature: Teste de Criar Usuário

Background:
  * url 'https://gorest.co.in/public-api'

Scenario: Criar um novo usuário
  Given path 'users'
  And request { data.name: 'Novo Usuário', data.gender: 'male', data.email: 'novousuario@teste.com', data.status: 'active' }
  When method post
  Then status 200
  And match $.data.name == 'Novo Usuário'

Scenario: Verificar a listagem de usuários
  Given path 'users'
  When method get
  Then status 200
  And match response.data.size > 0

Scenario: Atualizar informações de um usuário
  Given path 'users/5710543' 
  And request { data.name: 'test' }
  When method put
  Then status 200
  And match response.data.name == 'test'

Scenario: Buscar por um usuário inexistente
  Given path 'users/asdsadas'  
  When method get
  Then status 200
  And match response.data.message == 'Resource not found'

Scenario: Excluir um usuário
  Given path 'users/5710538' 
  When method delete
  Then status 200










