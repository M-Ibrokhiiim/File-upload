import { useToast } from "vue-toastification"
const toast = useToast()

export async function inputFileUploadToServer(file=null){
 const formData = new FormData()

 if(file ===null){
    return toast.info('Please, select a file from you machine...')
 }

 formData.append('file',file);
 formData.append('name','M_Ibrokhiiim');
 console.log(file)
 try{
    const response = await fetch('http://localhost:3000/api/i/inputup',{
        method:'POST',
        body:formData
    })

   if(!response.ok){
    toast.warning('Error happened while uploading file...')
    throw new Error('Error happened while uploading file...')
   }

   const data = await response.json()

   toast.success(data.msg || 'Successfully uploaded!')
 }catch(err){
  console.log(err)
 }

}