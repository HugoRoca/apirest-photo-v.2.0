import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export async function startConnection() {
  await connect(process.env.MONGO_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Database is connected')
}
