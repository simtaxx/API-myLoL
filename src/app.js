// Import library
import express from 'express'
import { port, cors } from './config/config'
import path from 'path'
import router from './config/router'

const app = express() // init express

app.use(cors)
app.use(router)
// Configuration du moteur de rendu
app.set("view engine", "ejs")
// Définition du dossier static du client
app.set("views", __dirname + "/www")
app.use(express.static(path.join(__dirname, "www")))

app.listen(port, () => {
  console.log(`the url is http://localhost:${port}`)
})