<template>
  <div class="pages">
  <HeaderComponent/>
  <main>
    <router-view />
  </main>
  <FooterComponent/>
   </div>
</template>

<style>
 html,body{
  height: 100%;
  margin: 0%;
  overflow-x: hidden;
 }
 .pages{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
 }
 main{
  flex: 1;
 }
</style>

<script setup>
import FooterComponent from './components/Footer-component.vue';
import HeaderComponent from './components/Header-component.vue';

</script>