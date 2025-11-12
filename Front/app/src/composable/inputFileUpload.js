export async function inputFileUploadToServer(file=null){
 const formData = new FormData()
 console.log(file)
 if(file ===null){
    return alert('Please, select a file from you machine...')
 }

 formData.append('file',file)

 try{
    const reponse = await fetch('http//:URL',{
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

   console.log(data.msg || 'Successfully uploaded!')
 }catch(err){
  console.log(err)
 }

}