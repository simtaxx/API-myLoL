// Import library
import express from 'express'
import { port } from './config/config'
import path from 'path'
import cors from 'cors'
import axios from 'axios'
import { apiKey } from './config/config'

const app = express() // init express

app.use(cors())

// Configuration du moteur de rendu
app.set("view engine", "ejs");

// Définition du dossier static du client
app.set("views", __dirname + "/www");
app.use(express.static(path.join(__dirname, "www")));

const router = express.Router()
const euUrl = 'https://euw1.api.riotgames.com'
const playerIdUrl = '/lol/summoner/v4/summoners/by-name/'
const playerDataUrl = '/lol/league/v4/entries/by-summoner/'

router.get('/', (req, res) => {
  res.render('index')
})

app.get('/player', async (req, res) => {
  const username = req.query.username
  console.log(username)
  try {
    const userProfil = await axios.get(euUrl + playerIdUrl + username, { params: { api_key: apiKey  } })
    const userId = userProfil.data.id
    const userData = await axios.get(euUrl + playerDataUrl + userId, { params: { api_key: apiKey  } })
    console.log('try', userData)
    res.json({ data: userData.data })
  } catch (error) {
    console.log(error)
    return error
  }
})

app.listen(port, () => {
  console.log(`the url is http://localhost:${port}`)
})