import express from 'express'

import cors from 'cors'
import multer  from 'multer';

const app = express();
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
       cb(null,file.originalname)
    }
})

const upload = multer({storage: storage});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/api/upload/input',upload.single('file'),(req,res)=>{
    console.log(req.file);
    res.status(201).json({success:true,msg:'File uploaded successfully!'});
})

app.listen(3000,()=>{
    console.log('File uploading is working!!!')
})
