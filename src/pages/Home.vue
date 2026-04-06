<template>
 <WelcomeComponent/>
 <ProductCartComponent :data="dataArray" :showButton="true" :showPera="true"/>
 <NewsletterComponent/>
</template>

<script setup>
import {ref} from 'vue'
import ProductCartComponent from '@/components/productCart-component.vue';
import WelcomeComponent from '@/components/WelcomeComponent.vue';
import NewsletterComponent from '@/components/Newsletter-component.vue';
const dataArray = ref([{img:"https://i.pinimg.com/736x/29/3b/8a/293b8adfbbb0e68284559e95420e5742.jpg",title:"Traditinol",subtitle:"kashmiri bangles",},{img:"https://i.pinimg.com/736x/a3/0e/96/a30e96c9fa8eaf8f3627169c7fad6859.jpg",title:"Elegent",subtitle:"Wedding bangles"},{img:"https://i.pinimg.com/736x/61/3d/9d/613d9db146c097a9cf68a38bea1355c3.jpg",title:"Valvet",subtitle:"Black Bangels",}])

</script>