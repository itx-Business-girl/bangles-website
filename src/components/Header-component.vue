 <template>
    <header class="header">
      <h1 class="logo">Kashmiri Bangles</h1>
      <nav class="navbar">
    <router-link class="navbar" to="/">Home</router-link>
    <router-link class="navbar" to="/about">About</router-link>
    <router-link class="navbar" to="/shop">Shop</router-link>
    <router-link class="navbar" to="/contact">Contact</router-link>
  </nav>
  </header>
  </template>

  <style scoped>
  .header{
    background-color: rgba(250, 250, 250, 1);
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow:0 5px 16px rgba(206, 198, 198, 0.7) ;
  }
  .logo{
    color: rgba(196, 160, 90, 1);
    font-size: 28px;
    font-weight: 500;
  }
  .navbar{
    color: black;
    font-size: 20px;
    font-weight: 400;
    margin: 5%;
    padding-right: 6%;
  }
</style>