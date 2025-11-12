<template>
      <main class="flex justify-center">
          <div class="bg-white   h-[50px] relative rounded-4xl  w-[170px] cursor-pointer active:scale-80  transition-all duration-100 " >
               <input type="file" @change="handleFile"  class="bg-red-400 w-[170px]   z-10  h-[50px] opacity-0 rounded-4xl absolute  cursor-pointer"/>   
               
               <div class="bg-white h-[50px] flex p-2 cursor-pointer active:scale-80  transition-all duration-100 w-[170px] border-2 border-[blue]  rounded-[100px] justify-around">
                     <Upload/> 
                     <p class="text-[20px] text-blue-500">Browse files</p>
               </div>
          </div>

          <div  v-if="showContent" class="absolute top-[200px] ">
               <h1><span class="text-xl">Name:</span>{{ inputValue.name }}</h1>
               <h1><span class="text-xl">Size:</span> {{ (inputValue.size / 1024).toFixed(2) }} KB</h1>
          </div>
      </main>
      
</template>
<script setup>
import { ref } from 'vue';
import Upload from '../icons/upload.vue';

const inputValue = ref(null)
const showContent = ref(false)

const handleFile = (e)=>{
     
     inputValue.value=e.target.files[0]
     showContent.value = true
     console.log(inputValue.value)
}
</script>