![](https://i.imgur.com/xG74tOh.png)

# Exercício de API Rest 🏫

## Lista de convidados

Neste exercício deveremos criar o back-end de um sistema para controle de convidados de evento.
Configurações iniciais:
```javascript=
npm init -y //criando um projeto
npm i express //instalando express
```
Este controle de convidados deverá ser executado em um servidor nodejs e deverá ser acessado através do endereço http://localhost:8000. 
Funcionalidades : 
-**consultar a lista** de convidados inteira
-**consultar** se um nome específico existe na lista
-**adicionar** um nome na lista
-**remover** um nome da lista de convidados. 

Além de solicitar essas funcionalidades, foi exigido que este serviço back-end utilize o **padrão REST** o mais fielmente possível.

Todas as funcionalidades deverão estar disponíveis em um recurso chamado "convidados" que deverá ser acessado através do endereço **http://localhost:8000/convidados.**

**a) Consulta a lista inteira de convidados**

Esta funcionalidade deverá utilizar o método (verbo) **GET**. Ao ser requisitada, esta funcionalidade deverá retornar no body do response um array de strings, onde cada item é um nome de convidado.

**Exemplo:**

Ao requisitar esta funcionalidade, é retornado:

```
[
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto"
]
```

**b) Consulta se existe um nome específico na lista de convidados**

É acessada através do método (verbo) **GET**, através do endereço http://localhost:8000/convidados.

**Exemplo:**

Ao requisitar o recurso **convidados** com GET http://localhost:8000/convidados?nome=Renato, deverá ser retornado o seguinte objeto:

```
{
  "mensagem": "O convidado buscado não está presente na lista."
}
```

E ao requisitar o recurso **convidados** com GET http://localhost:8000/convidados?nome=Carlos, deverá ser retornado o seguinte objeto:

```
{
  "mensagem": "Convidado presente."
}
```

**c) Adicionar um nome na lista de convidados**

Funcionalidade para adicionar nomes à lista. Para isto, deverá ser utilizado o método (verbo) **POST** através do endereço http://localhost:8000/convidados. 

**Exemplos:**


Ao enviar uma requisição POST http://localhost:8000/convidados com o objeto a seguir no conteúdo:

```
{
	"nome": "Amanda"
}
```

É retornada uma mensagem com o seguinte objeto no conteúdo JSON no body:

```
{
    "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
}
```

Se for enviada uma requisição POST http://localhost:8000/convidados, conforme a seguir:

```
{
	"nome": "Gabriel"
}
```

É retornada a resposta seguinte com objeto JSON no body do response:

```
{
    "mensagem": "Convidado adicionado."
}
```

**d) Remover um nome da lista de convidados**

O nome a ser removido deverá ser fornecido através de um parâmetro de URL do tipo path (params) chamado **nome**.
**Exemplos:**

Caso seja criado um array inicial no servidor conforme abaixo

Ao enviar uma requisição DELETE http://localhost:8000/convidados/Fernando

Deverá ser retornada uma mensagem com o seguinte objeto no conteúdo JSON no body:

```
{
    "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
}
```

Se for enviada uma requisição DELETE http://localhost:8000/convidados/Juliana

Deverá ser retornada uma resposta com o seguinte objeto JSON no body do response:

```
{
    "mensagem": "Convidado removido."
}
```

---

###### tags: `nodeJS` `módulo 2` `exercício de classe` `api rest` `express` `http` `api` `rest`
