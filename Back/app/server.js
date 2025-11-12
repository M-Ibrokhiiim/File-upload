import express from 'express'

import cors from 'cors'
import multer  from 'multer';

 
 

const upload  = multer({dest: 'uploads/'})

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/upload/inputFileUploading',upload.single('file'),(req,res)=>{
    console.log(req.file)
    res.status(201).json({msg:'File uploaded',name:req.file.originalname})
})

app.listen(3000,()=>{
    console.log('File uploading is working!!!')
})