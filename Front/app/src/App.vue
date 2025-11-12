<script setup>
 
</script>

<template>
 <div class="  flex justify-center">
  <header class="w-[200px]  ">
    <nav class="flex justify-between  ml-7 w-full   active:text-black">
      <p class="text-black text-[20px] font-extrabold">
        <router-link   to="/input">Input</router-link> 
      </p>
      <span class="h-2.5 text-[20px]text-black ">|</span>
      <p class="text-black text-[20px]">
        <router-link  to="/dragDrop">Drag_Drop</router-link>
      </p>
    </nav>
  </header>
   </div>  
   <main class="bg-white  h-[92vh] flex justify-center p-10">
    <section class="bg-blue-200 rounded-4xl p-6 w-[50%] h-[85vh] ">
      <router-view></router-view>
    </section>
  </main>

</template>
