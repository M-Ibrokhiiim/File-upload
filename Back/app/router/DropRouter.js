import express from "express"
import { DropPost } from '../controllers/dropControllers.js'

const DropRouter = express.Router()


DropRouter.post('/dropup',DropPost)

export default DropRouter