import express from 'express'
import axios from 'axios'
import { apiKey } from './config'

const router = express.Router()
const euUrl = 'https://euw1.api.riotgames.com'
const playerIdUrl = '/lol/summoner/v4/summoners/by-name/'
const playerDataUrl = '/lol/league/v4/entries/by-summoner/'

const getUser = (username) => axios.get(euUrl + playerIdUrl + username, { params: { api_key: apiKey  } })
const getUserData = (userId) => axios.get(euUrl + playerDataUrl + userId, { params: { api_key: apiKey  } })

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/player', async (req, res) => {
  const username = req.query.username
  try {
    const userProfil = await getUser(username)
    const userId = userProfil.data.id
    const userData = await getUserData(userId)
    res.json({ data: userData.data })
  } catch (error) {
    console.log(error.response)
    return error
  }
})

export default router