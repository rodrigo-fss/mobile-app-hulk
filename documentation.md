# Documentação RESTful Web Api #
toda a api foi desenvolvida em php, seus parametros de entrada são parametros url e a saida sempre será JSON

---

## Cadastro de usuários ##
*/api/usuario/sing_up.php*  

**Input Params**: nome(string) & email(string) #lembrar de usar urlencode
 
**Retorno**: 
* Sucesso -> IdNovoUsuario(int) e TokenNovoUsuario(string) 
* Erro -> Mensagem de Erro
 
**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/sing_up.php?nome=teste%20testando&email=teste%40email.com*

---

## Login de usuários ##
*/api/usuario/sing_in.php*  

**Input Params**: email(string) **#lembrar de usar urlencode**
 
**Retorno**: 
* Sucesso -> Token(string) 
* Erro -> Mensagem de Erro
 
**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/sing_up.php?email=rodrigo.f.ss%40uol.com.br*

---

## Token ##
O token é sempre composto de ID + ) + random string

**Exemplo**: 1)aSh1d

---

## Cadastro de amizade ##
*/api/usuario/friendship.php*  
 
**Input Params**: id(int) & id_amigo(int)
 
**Retorno**: 
* Sucesso -> Mensagem de sucesso 
* Erro -> Mensagem de Erro
 
**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/friendship.php?id=1&id_amigo=2*

---

## Ver todos usuários cadastrados ##
*/api/usuario/read_all.php*  
 
**Input Params**: none
 
**Retorno**: 
* Sucesso -> id(int), nome(string), cidade(string), estado(string), pais(string), de todos os usuários cadastrados 
* Erro -> Mensagem de Erro

**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/read_all.php*

---

## Ver informações do usuário logado ##
*/api/usuario/read.php*  

**Input Params**: token(string)

**Retorno**:
* Sucesso -> id(int), nome(string), email(string), cidade(string), estado(string), pais(string), do usuário logado 
* Erro -> Mensagem de Erro

**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/read.php?token=1)alskd*

---

## Nova Publicação ##
*/api/feed/new_pub.php*  

**Input Params**: token(string), nome_cerveja(string) *cerveja_key*, latitude(string), longitude(string), avaliacao(int), tipo(Bool #1=stories #0=publicacao), descricao(string)  **#Lembrar de usar url encode**
* Amigos marcados - você terá que usar amigo*i* (int), onde i é o numero do amigo e int é o ID do amigo. Serão aceitos no máximo 5 amigos. Exemplo *amigo5=2*

**Retorno**:
* Sucesso -> Mensagem de Sucesso
* Erro -> Mensagem de Erro

**Exemplo**: *https://www.formore.com.br/mobile/api/feed/new_pub.php?token=1)a&nome_cerveja=Colorado%20Indica&latitude=123&longitude=456&descricao=ahusdhiasuhdoishdosuihdoisuahd&tipo=0&avaliacao=5&amigo1=1&amigo2=2*

---

## Ler Feed ##
*/api/feed/read_feed.php*  

**Input Params**: token(string)

**Retorno**:
* Sucesso -> idPublicacao(int), Autor(int) *ID do autor*, NomeCerveja(string), Latitude(string), Latitude(string), Image (string), Avaliacao(int), Data(DateTime), tipo(Bool #1=stories #0=publicacao), descricao(string)
* Erro -> Mensagem de Erro

**Exemplo**: *https://www.formore.com.br/mobile/api/feed/read_feed.php?token=1)alskd*





