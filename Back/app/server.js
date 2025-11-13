import express from 'express'
import cors from 'cors'


// App
const app = express();

// Multer store for uploadings
import { DropUpload } from './multers/dropMulter.js'
import inputMulter from './multers/inputMulter.js'

// Routers
import DropRouter from './router/DropRouter.js'
import InputRouter from './router/InputRouter.js'


 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Drop
app.use('/api/d',DropUpload.single('file'),DropRouter);


// Input
app.use('/api/i',inputMulter.single('file'),InputRouter)

app.listen(3000,()=>{
    console.log('File uploading is working!!!')
})
