import multer from 'multer'

const DropStore = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/drop/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})


export const DropUpload = multer({storage:DropStore})
