const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Camila Gutierrez',
    imagem: 'https://avatars.githubusercontent.com/u/123854812?s=400&u=226926267c3e98ab3b7c416e77df100f5f6a137b&v=4',
    minibio: 'Gestora de T.I, desenvolvedora e designer' 
})
}

 function mostraPorta() {
   console.log('Servidor criado e rodando na porta',porta)
 }

 app.use(router.get('/mulher', mostraMulher))
app.listen(porta,mostraPorta)
