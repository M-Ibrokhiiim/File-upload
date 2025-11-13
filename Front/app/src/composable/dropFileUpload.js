import { useToast } from "vue-toastification"

const toast = useToast();

export async function droppedFileUploader(file=null){
    const formData = new FormData()

    if(file === null){
     toast.warning('Please, insert file in drop area!')
    }

    formData.append('file',file)

    try{
        const response = await fetch('http://localhost:3000/api/d/dropup',{
            method:'POST',
            body:formData
        })

        if(!response.ok){
            toast.error('Error occured while uploading file ⛔')
            throw new Error('Error occured while uploading file ')
        }
        
        const data = await response.json()
        console.log(data)
        toast.success(data.msg)
    }catch(err){
      console.log(err)
    }
}