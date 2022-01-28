import  mongoose  from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from "./data/users.js";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import Order from './model/orderModel.js'
import User from './model/userModel.js'
import Product from './model/productModel.js'

dotenv.config()

connectDB()

const importData = async () =>{
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    const createdUser = await User.insertMany(users)
    const adminUser = createdUser[0]._id

    const sampleProducts = products.map((prod) =>{
      return{
        ...prod, user: adminUser
      }
    })
    await Product.insertMany(sampleProducts)

    console.log(`Data Imported`.green.inverse.bold)
    process.exit()
  } catch (error) {
    console.error(`error: ${error.message}`.red)
    process.exit(1)
  }
}
const destroyData = async () =>{
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()
    
    console.log(`Data Destroyed`.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`Error : ${error.message}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}