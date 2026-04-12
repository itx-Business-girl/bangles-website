 <template>
    <header class="header">
      <h1 class="logo">Kashmiri Bangles</h1>
    <nav class="navbar-pages">
    <router-link class="navbar-pages" to="/">Home</router-link>
    <router-link class="navbar-pages" to="/about">About</router-link>
    <router-link class="navbar-pages" to="/products">Products</router-link>
    <router-link class="navbar-pages" to="/contact">Contact</router-link>
  </nav>
  </header>
  </template>

  <style scoped>
  .header{
    background-color: rgba(250, 250, 250, 1);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border:2px solid rgb(204, 196, 196) ;
    box-shadow:0 5px 10px rgb(129, 126, 126,0.9) ;
    margin: 9px 0px;
  }
  .logo{
    color: rgba(196, 160, 90, 1);
    font-size: 30px;
    font-weight: 550;
    font-family: 'Great Vibes', cursive;
  }
  .navbar-pages{
    color: rgb(10, 10, 10);
    font-size: 22px;
    font-weight: 400;
    text-decoration: none;
    padding-right: 6%;
  }

  
    @media(max-width:320px){
      .navbar{
        font-size: 18px;
        margin: 5px;
        padding: 0px;
      }
    }

   @media(max-width:768px){
    .header{
      height: 150px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
</style>