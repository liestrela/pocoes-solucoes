import crypto from 'crypto'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import { Potion, Setting, initDb } from './db.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const sessions = new Set()

function requireAuth(req, res, next) {
  const auth = req.headers.authorization
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ error: 'Não autorizado' })
  if (!sessions.has(auth.slice(7))) return res.status(401).json({ error: 'Sessão inválida' })
  next()
}

app.post('/api/auth/login', async (req, res) => {
  const { password } = req.body
  if (!password) return res.status(400).json({ error: 'Senha obrigatória' })
  const setting = await Setting.findOne({ where: { key: 'admin_password' } })
  if (!setting) return res.status(500).json({ error: 'Configuração ausente' })
  const valid = await bcrypt.compare(password, setting.value)
  if (!valid) return res.status(401).json({ error: 'Senha incorreta' })
  const token = crypto.randomBytes(32).toString('hex')
  sessions.add(token)
  res.json({ token })
})

app.post('/api/auth/logout', (req, res) => {
  const auth = req.headers.authorization
  if (auth?.startsWith('Bearer ')) sessions.delete(auth.slice(7))
  res.status(204).end()
})

app.get('/api/potions', async (req, res) => {
  const potions = await Potion.findAll()
  res.json(potions)
})

app.post('/api/potions', requireAuth, async (req, res) => {
  const { name, description, image, price } = req.body

  if (!name || !description || price == null) {
    return res.status(400).json({ error: 'name, description e price são obrigatórios' })
  }

  const potion = await Potion.create({ name, description, image, price })
  res.status(201).json(potion)
})

app.delete('/api/potions/:id', requireAuth, async (req, res) => {
  const potion = await Potion.findByPk(req.params.id)

  if (!potion) {
    return res.status(404).json({ error: 'Poção não encontrada' })
  }

  await potion.destroy()
  res.status(204).end()
})

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
  })
})
