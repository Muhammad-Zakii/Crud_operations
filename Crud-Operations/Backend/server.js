import express from 'express'
const app = express()
import crudRoutes from './routes/crudRoutes.js'
import connectDB from './db/database.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
app.use(cors())
app.use(express.json())

// if (process.env.NODE_ENV !== 'production') {
//   app.use(morgan('dev'))
// }

app.get('/', (req, res) => {
  res.send('Testing server')
})
app.use('/crud', crudRoutes)
const port = 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()
