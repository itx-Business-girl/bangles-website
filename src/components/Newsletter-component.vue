<template>
    <div class="newletter">
        <h1 class="newletter-heading">Subscribe to Our Newsletter</h1>
        <p class="newletter-peragraph">Sign up for the latest upadates on new collections and special offers</p>
        <input class="newsletter-search" type="text" placeholder="Your email adress" required/>
        <button class="newsletter-button">subscribe</button>
    </div>
</template>

<style scoped>
  .newletter{
    background-color:rgb(247, 242, 242);
    text-align: center;
    padding: 10px 10px;
    border-radius: 9px;
    margin-top: 190px;
 }
 .newsletter-search{
    width:500px;
    height:30px;
    padding:10px 10px ;
    border-radius: 8px;
    border: none;
    margin-bottom: 13px;
 }
 .newletter-heading{
    color: rgb(49, 48, 48);
 }
 .newletter-peragraph{
    color: rgb(141, 139, 139);
    font-size: 21px;
 }
  .newsletter-button{
  padding: 15px 16px;
  border: 1px solid #d4b06a;
  background-color: #d4b06a ;
  color:rgb(255, 253, 253);
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  width: 190px;
  margin-left: 10px;
  cursor: pointer;
}
/* @media(max-width:320px){
   .newletter{
      margin-top: 40px;
   }
   .newletter-heading{
      font-size: 22px;
   }
   .newletter-peragraph{
      font-size: 17px;
   }
   .newsletter-search{
      width: 260px;
      height: 25px;
      font-size: 12px;
   }
   .newsletter-button{
      width: 100px;
      height: 40px;
      padding: 3px 3px;
      font-size: 14px;
   }

} */
/* 
   @media(max-width:768px){
   .newletter-heading{
      font-size: 22px;
   }
   .newletter-peragraph{
      font-size: 17px;
   }
   .newsletter-search{
      width: 260px;
      height: 25px;
      font-size: 12px;
   }
   .newsletter-button{
      width: 100px;
      height: 40px;
      padding: 3px 3px;
      font-size: 14px;
   }
  }  */
   /* @media (max-width: 425px) {
     .newletter-heading{
      font-size: 22px;
   }
   .newletter-peragraph{
      font-size: 17px;
   }
   .newsletter-search{
      width: 260px;
      height: 25px;
      font-size: 12px;
   }
   .newsletter-button{
      width: 100px;
      height: 40px;
      padding: 3px 3px;
      font-size: 14px;
   }  
   } */
    @media (max-width: 768px){
      .newletter-heading{
      font-size: 22px;
      
   }
   .newletter-peragraph{
      font-size: 21px;
   }
   .newsletter-search{
      width: 320px;
      height: 25px;
      font-size: 12px;
   }
   .newsletter-button{
      width: 100px;
      height: 40px;
      padding: 3px 3px;
      font-size: 14px;
   }  
   .newletter{
      margin-top: 60px;
   }
    }
    @media (max-width: 1024px){
       .newletter-heading{
      font-size: 28px;
      
   }
   .newletter-peragraph{
      font-size: 24px;
   }
   .newsletter-search{
      width: 340px;
      height: 27px;
      font-size: 12px;
   }
   .newsletter-button{
      width: 100px;
      height: 40px;
      padding: 3px 3px;
      font-size: 14px;
   }  
   .newletter{
      margin-top: 60px;
   }
    } 


</style>