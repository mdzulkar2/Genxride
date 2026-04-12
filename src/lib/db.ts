import mongoose from 'mongoose'
import { connection } from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined in environment variables")
}

let cached = global.mongooseconn as { conn: connection | null; promise: Promise<typeof mongoose> | null }

if (!cached) {
  cached = global.mongooseconn = {
    conn: null,
    promise: null
  }
}

const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      bufferCommands: false,
    })
  }

  try {
    const mongooseInstance = await cached.promise
    cached.conn = mongooseInstance
    return mongooseInstance
  } catch (error) {
    cached.promise = null
    console.error("MongoDB connection error:", error)
    throw error
  }
}

export default connectToDatabase