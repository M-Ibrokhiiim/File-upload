import multer from 'multer'

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/input/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const  inputMulter = multer({storage:storage})

export default inputMulter