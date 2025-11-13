import express from 'express'
import InputContoller from '../controllers/inputController.js'
const InputRouter = express.Router()

// POST
InputRouter.post('/inputup',InputContoller)

export default InputRouter