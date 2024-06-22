import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Set strictQuery to handle deprecation warning
    mongoose.set('strictQuery', true) // or false, depending on your preference

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
