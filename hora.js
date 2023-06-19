const express = require("express")

const app = express()


const porta = 3333


function mostraHora(request, response) {
   const data = new Date()
   const hora = data.toLocaleTimeString('pt-BR')
   response.send(hora)
   
}


app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)

