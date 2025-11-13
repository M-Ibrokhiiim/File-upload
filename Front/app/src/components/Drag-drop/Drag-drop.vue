<template>
 <main class=" w-full h-full flex flex-col items-center justify-center">
   <section class="p-5 bg-white w-[30vw]  h-[30vh] rounded-4xl">
      <div class="border-2 border-dashed  hover:border-red-500 border-blue-600 h-full rounded-4xl ">
        <div class="w-full ">
          <div class="absolute" @drop="receiveDrop">
            <input type="file" @change="receiveChosenFile" class="h-[26vh] cursor-pointer z-20 opacity-0 rounded-4xl w-[27.5vw]">
          </div>
          <div  :style="isPic ? `background-image: url(${pictureURL}) ; background-position: center ; color:white ` : 'background-image:none'" class="w-full h-[25.3vh] items-center rounded-4xl flex flex-col justify-center">
            <Folder/>
            <p class="items-center  hover:text-red-600">
              Drag or choose your photos,videos  or  any file for uploading 
            </p>
          </div>
        </div>
      </div>
   </section>
 </main>
</template>
<script setup>
import { ref } from 'vue';
import Folder from '../icons/folder.vue';
import { droppedFileUploader } from '@/composable/dropFileUpload';

const droppedFile = ref(null);
const pictureURL = ref('');
const isPic = ref(false)

function receiveDrop(e){
  e.preventDefault();

  droppedFile.value = e.dataTransfer.files[0];
  droppedFileUploader(droppedFile.value);
  pictureURL.value = URL.createObjectURL(droppedFile.value);
  isPic.value = true;
}


function receiveChosenFile(e){
  droppedFile.value = e.target.files[0]
  droppedFileUploader(droppedFile.value)
  pictureURL.value = URL.createObjectURL(droppedFile.value);
  isPic.value = true;
}


</script>