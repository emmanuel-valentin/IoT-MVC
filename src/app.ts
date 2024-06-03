import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

import usersRouter from './routes/contacts.route'
import { resolve } from 'path'
import bodyParser from 'body-parser'

/* Read environment variables */
config()

const app = express()
const port = process.env.PORT ?? 3000

/* Express config */
app.use(express.static(resolve(__dirname, 'public')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', 'src/views')

/* Routes */
app.use('/contacts', usersRouter)

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})

app.post('/', (req, res) => {
  res.send({ content: req.body })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
