<template>
    <h2 class="heading">Our Collections</h2>
    <p v-if="showPera" class="peragraph">Discover the beauty of our handcrafted kashmiri bangles</p>
    <div class="product-containor">
        <div class="product-cart" v-for="value in data" :key="value.id">
      <img class="product-cart img" :src="value.img"></img>
      <h3 class="product-card-h3">{{ value.title }}</h3>
      <p class="product-card-h3">{{ value.subtitle }}</p>
      <router-link to="/products">
      <button v-if="showButton" class="product-card-button">View All Product</button>
      </router-link>
        </div>
    </div>
    
</template>
<script setup>
 defineProps(['data','showButton','showPera'])
</script>

<style scoped>
   .peragraph{
    color:rgb(141, 139, 139);
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 50px;
  }
  .heading{
    font-size: 40px;
    color: rgb(49, 48, 48);
    text-align: center;
    margin-top: 100px;
  }
  .product-cart{
    width: 300px;
    text-align: center;
  }
  .product-cart img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 7px;
  }
  .product-card-button {
  padding: 10px 16px;
  border: 1px solid #d4b06a;
  background: transparent;
  color: #d4b06a;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  width: 190px;
  cursor: pointer;
}
.product-card-h3 {
  font-size: 20px;
  margin: 10px 0;
  color: #444;
}
.product-containor{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 27px;
    flex-wrap: wrap;
}
/* @media(max-width:320px){
  .heading{
    font-size: 25px;
  }
  .peragraph{
    font-size: 18px;
  }
  .product-cart img{
    width:80%;
    height: 200px;
  }
  .product-card-button{
    width: 130px;
    font-size: 12px;
  }
}
 @media(max-width:375px){
  .heading{
    font-size: 25px;
  }
  .peragraph{
    font-size: 18px;
  }
   .product-cart img{
    width:80%;
    height: 200px;
  }
   .product-card-button{
    width: 140px;
    font-size: 12px;
  }
}
  @media (max-width: 425px) {
     .heading{
    font-size: 25px;
  }
  .peragraph{
    font-size: 18px;
  }
   .product-cart img{
    width:89%;
    height: 200px;
  }
   .product-card-button{
    width: 140px;
    font-size: 12px;
  }
 } */
 @media (max-width: 768px){
   .heading{
    font-size: 30px;
  }
  .peragraph{
    font-size: 20px;
  }
   .product-cart img{
    width:89%;
    height: 200px;
  }
   .product-card-button{
    width: 140px;
    font-size: 12px;
  }
 } 
 @media (max-width: 1024px) {
  .heading{
    font-size: 35px;
  }
  .peragraph{
    font-size: 26px;
  }
   .product-cart img{
    width:89%;
    height: 200px;
  }
   .product-card-button{
    width: 150px;
    font-size: 12px;
  }
 } 
  
</style>