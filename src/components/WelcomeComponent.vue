<template>
    <div class="welcome-img section-height">
      <div class="welcome-text section-height">
      <h1 class="h1"> welcome to <br>kashmiri bangles</br></h1>
      <p class="peragraph">Exquisite Handcrafted Bangles Embellished<br>With Tradition & Elegance</br></p>
      <button class="welcome-botton welcome-botton:hover">Shop it Now</button>
      </div>
    </div>
</template>

<style scoped>
  .welcome-img{
    background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('https://i.pinimg.com/736x/d6/88/d2/d688d2833663e1275862a9e6f0822e09.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
  }
  .section-height{
    height: 80vh;
  }
  .welcome-text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .h1{
    color:rgb(240, 226, 200);
    font-size: 80px;
    font-weight: 500;
    /* font-family: 'Great Vibes', cursive; */
    font-family: 'Playfair Display', serif;
    font-style: italic;
  }
  .peragraph{
    color: rgb(216, 209, 209);
    font-size: 30px;
    font-weight: 500;
  }
  .welcome-botton{
    color:white;
    background-color:rgba(196, 160, 90, 1);
    cursor: pointer;
    padding: 15px 15px;
    width: 190px;
    height: 50px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 9px;
    border: none;
  }
  .welcome-botton:hover{
    border:3px solid rgb(231, 172, 45);
    box-shadow:0px 5px 8px rgba(110, 76, 34, 0.9);
    background-color: rgba(168, 134, 70, 1);
  }
  @media(max-width:320px){
    .h1{
      font-size:25px;
    }
    .peragraph{
      font-size: 20px;
      margin-left: 34px;
    }
    .welcome-botton{
      width: 110px;
      height: 40px;
      font-size: 12px;
    }
    .section-height{
      height: 50vh;
    }
  }


   @media(max-width:375px){
    .h1{
      font-size: 40px;
    }
    .peragraph{
      font-size: 22px;
      margin-left: 34px;
    }
    .welcome-botton{
      width: 130px;
    }
    .welcome-img{
      height: 70vh;
    }
    .section-height{
      height: 55vh;
    }
   }


   @media (max-width: 425px) {
    .h1{
      font-size: 40px;
    }
    .peragraph{
      font-size: 22px;
      margin-left: 20px;
    }
    .welcome-botton{
      width: 130px;
    }
    .welcome-img{
      height: 70vh;
    }
    .section-height{
      height: 60vh;
    }
  }
  @media (max-width: 768px) {
   .h1{
      font-size: 40px;
    }
    .peragraph{
      font-size: 22px;
      margin-left: 20px;
    }
    .welcome-botton{
      width: 130px;
    }
    .welcome-img{
      height: 75vh;
    }
    .section-height{
      height: 60vh;
    }
  }
  @media (max-width: 1024px) {
     .h1{
      font-size: 50px;
    }
    .peragraph{
      font-size: 29px;
      margin-left: 20px;
    }
    .welcome-botton{
      width: 141px;
    }
    .welcome-img{
      height: 80vh;
    }
    .section-height{
      height: 70vh;
    }
  }

</style>