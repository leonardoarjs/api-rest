const express = require('express')

const app = express();
app.use(express.json());


const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];


app.get('/convidados', (req, res) => {
    const nome = req.query.nome
    if (nome == undefined) {
        res.send(convidados)//retornanco a lista de convidados
    } else {
        if (convidados.includes(nome)) {
            res.json(
                {
                    "mensagem": "Convidado presente."
                })

        } else {

            res.json({
                "mensagem": "O convidado buscado não está presente na lista."
            })
        }
    }
})

app.post("/convidados", (req, res) => {
    nome=req.body.nome
if (convidados.includes(nome)) {
        res.json(
            {
                "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
            })
    } else {
        convidados.push(nome)
        res.json({
            "mensagem": "Convidado adicionado."
        })
    }
})

app.delete("/convidados/:nome", (req, res) => {
    nome= req.params.nome 
if (convidados.includes(nome)) {
    convidados.splice(convidados.findIndex(x=>x==nome),1)
        res.json(
            {
    "mensagem": "Convidado removido."
})
    } else {
        res.json({
    "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
})
    }
})
app.listen(8000)
