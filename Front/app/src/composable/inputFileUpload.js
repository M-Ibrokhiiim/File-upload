export async function inputFileUploadToServer(file=null){
 const formData = new FormData()
 console.log(file)
 if(file ===null){
    return alert('Please, select a file from you machine...')
 }

 formData.append('file',file)

 try{
    const reponse = await fetch('http://localhost:3000/upload/inputFileUploading',{
        method:'POST',
        headers:{
            "Content-Type":"multipart/form-data"
        },
        body:formData
    })

   if(!reponse.ok){
    alert('Error happened while uploading file...')
    throw new Error('Error happened while uploading file...')
   }

   const data = await reponse.json()

   console.log('Successfully uploaded!')
 }catch(err){
  console.log(err)
 }

}