import express from 'express'
import cors from 'cors'
import multer  from 'multer';

// App
const app = express();

// Multer store for uploadings
import { DropUpload } from './multer/dropMulter.js'

// Routers
import DropRouter from './router/DropRouter.js'


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/input/')
    },
    filename:(req,file,cb)=>{
       cb(null,file.originalname)
    }
})

const upload = multer({storage: storage});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Input
app.post('/api/upload/input',upload.single('file'),(req,res)=>{
    console.log(req.file);
    res.status(201).json({success:true,msg:'File uploaded successfully!'});
})

// Drop
app.use('/api',DropUpload.single('file'),DropRouter);

app.listen(3000,()=>{
    console.log('File uploading is working!!!')
})
