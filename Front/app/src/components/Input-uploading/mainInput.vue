<template>
      <main class="flex justify-center">
          <div class="bg-white   h-[50px] relative rounded-4xl  w-[170px] cursor-pointer active:scale-80  transition-all duration-100 " >
               <input type="file" name="name"  @change="handleFile"    class="bg-red-400 w-[170px]   z-10  h-[50px] opacity-0 rounded-4xl absolute  cursor-pointer"/>   
               
               <div class="bg-white h-[50px] flex p-2 cursor-pointer active:scale-80  transition-all duration-100 w-[170px] border-2 border-[blue]  rounded-[100px] justify-around">
                     <Upload/> 
                     <p class="text-[20px] text-blue-500">Browse files</p>
               </div>
          </div>

          <div  v-if="showContent" class="absolute top-[250px] hover:scale-110 active:scale-90 cursor-pointer  transition-all duration-150 delay-75 ">
               <img :src="pictureURL" class="w-[25vw] h-[500px] border-30    shadow-2xl shadow-black border-white"/> 
          </div>
      </main>
      
</template>
<script setup>
import { ref } from 'vue';
import Upload from '../icons/upload.vue';

import {inputFileUploadToServer} from '@/composable/inputFileUpload.js'


const showContent = ref(false);
const inputValue = ref(null);
const  pictureURL = ref(null);


const handleFile = (e)=>{
     
     inputValue.value=e.target.files[0];
     showContent.value = true;
     pictureURL.value = URL.createObjectURL(e.target.files[0]);
     
     inputFileUploadToServer(inputValue.value)
}
</script>