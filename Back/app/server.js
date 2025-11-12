import express from 'express'
import cors from 'cors'


 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/upload/inputFileUploading',(req,res)=>{
    res.status(201).json({msg:'File uploaded'})
})

app.listen(3000,()=>{
    console.log('File uploading is working!!!')
})