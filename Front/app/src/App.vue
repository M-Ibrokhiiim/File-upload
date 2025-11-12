<script setup>
 
</script>

<template>
 <div class="bg-black  flex justify-center">
  <header class="w-[200px]  ">
    <nav class="flex justify-between  ml-7 w-full   active:text-black">
      <p class="text-white text-[20px] font-extrabold">
        <router-link   to="/input">Input</router-link> 
      </p>
      <span class="h-2.5 text-[20px] text-white">|</span>
      <p class="text-white text-[20px]">
        <router-link  to="/dragDrop">Drag_Drop</router-link>
      </p>
    </nav>
  </header>
   </div>  
   <main class="bg-white  h-[92vh] flex justify-center p-10">
    <section class="bg-red-200  w-[50%] h-[85vh] ">
      <router-view></router-view>
    </section>
  </main>

</template>
