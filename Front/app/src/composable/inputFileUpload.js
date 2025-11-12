import { useToast } from "vue-toastification"
const toast = useToast()

export async function inputFileUploadToServer(file=null){
 const formData = new FormData()
 console.log(file)
 if(file ===null){
    return alert('Please, select a file from you machine...')
 }

 formData.append('file',file);
 formData.append('name','M_Ibrokhiiim');

 try{
    const reponse = await fetch('http://localhost:3000/upload/inputFileUploading',{
        method:'POST',
        body:formData
    })

   if(!reponse.ok){
    toast.error('Error happened while uploading file...')
    throw new Error('Error happened while uploading file...')
   }

   const data = await reponse.json()

   toast.success(data.msg || 'Successfully uploaded!')
 }catch(err){
  console.log(err)
 }

}