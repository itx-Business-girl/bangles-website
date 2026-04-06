<template>
    
    <footer class="footer ">
        <div>
        <router-link class="router-flex" to="/privacy">Privacy Policy</router-link> |
       <router-link class="router-flex" to="/terms">Terms of Service</router-link> |
       <router-link class="router-flex" to="/return">Return Policy</router-link>
        

        </div>
        <p class="pergraph">2026 kashmiri Bangles. All right reserved.</p>
    </footer>
</template>

<style>
.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top:2px solid #d4b06a;
    /* padding-right: 30px; */
    height: 50px;
    padding: 10px 40px;
    color: rgb(129, 126, 126);
    margin-top: 20px;
    /* position: fixed; */
    /* bottom: 0; */
    box-shadow:0 5px 10px rgb(129, 126, 126,0.9) ;
}
 .router-flex{
  margin: 20px; 
  color:#d4b06a;
  text-decoration: none;
  font-size: 19px;
  font-weight: 500;     
 } 
 .pergraph{
    font-size: 20px;
    font-weight: 300;
 }
  @media(max-width:320px){
    .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 20px 20px;
        font-size: 10px;
    }
    .pergraph{
        font-size: 12px;
    }
    .router-flex{
        font-size: 14px;
        margin: 1px;
    }
  }
  /* @media(max-width:768px){
    .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 20px 20px;
    }
    .pergraph{
        margin-top: 20px;
    }
  } */
</style>