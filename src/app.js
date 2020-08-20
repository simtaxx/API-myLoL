// Import library
import express from 'express'
import { port, cors } from './config/config'
import router from './config/router'
import path from 'path'

const app = express() // init express

// Configuration du moteur de rendu
app.set("view engine", "ejs");

// Définition du dossier static du client
app.set("views", __dirname + "/www");
app.use(express.static(path.join(__dirname, "www")));

app.use(router) // use a router in an external file
app.use(cors)

app.listen(port, () => {
  console.log(`the url is http://localhost:${port}`)
})