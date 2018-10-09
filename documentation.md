# Documentação RESTful Web Api #
toda a api foi desenvolvida em php, seus parametros de entrada são parametros url e a saida sempre será JSON

---

## Cadastro de usuários ##
*/api/usuario/sing_up.php*  

**Input Params**: nome(varchar) & email(varchar) #lembrar de usar urlencode
 
**Retorno**: 
* Sucesso -> IdNovoUsuario(int) e TokenNovoUsuario(varchar) 
* Erro -> Mensagem de Erro
 
**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/sing_up.php?nome=teste%20testando&email=teste%40email.com*

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
* Sucesso -> id(int), nome(varchar), de todos os usuários cadastrados 
* Erro -> Mensagem de Erro

**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/read_all.php*

---

## Ver informações do usuário logado ##
*/api/usuario/read.php*  

**Input Params**: token(varchar)

**Retorno**:
* Sucesso -> id(int), nome(varchar), email(varchar) do usuário logado 
* Erro -> Mensagem de Erro

**Exemplo**: *https://www.formore.com.br/mobile/api/usuario/read.php?token=1)alskd*

---

## Nova Publicação ##
*/api/feed/new_pub.php*  

**Input Params**: token(string), nome_cerveja(string) *cerveja_key*, local(string), avaliacao(int)
* Amigos marcados - você terá que usar amigo*i* (int), onde i é o numero do amigo e int é o ID do amigo. Serão aceitos no máximo 5 amigos. Exemplo *amigo5=2*

**Retorno**:
* Sucesso -> Mensagem de Sucesso
* Erro -> Mensagem de Erro

**Exemplo**: *https://www.formore.com.br/mobile/api/feed/new_pub.php?token=1)a&nome_cerveja=Colorado%20Indica&local=adwd&avaliacao=5&amigo1=1&amigo2=2*



