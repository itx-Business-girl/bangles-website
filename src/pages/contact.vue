<template>
  <form @submit.prevent="handlesubmit">
    <h1 class="contact-heading">Contact Us</h1>

    <p class="contact-pergraph">
      We would love to hear from you! Whether you have a question about our products,
      your order, shipping, or anything else.
    </p>

    <div class="contact-flex">

      <input v-model="name" class="input-name" type="text" placeholder="Name*" />

      <input v-model="email" class="input-email" type="text" placeholder="Email*" />

      <input v-model="phone" class="input-phone" type="text" placeholder="Phone Number" />

      <textarea v-model="message" class="input-comment" placeholder="Comment"></textarea>

      <button type="submit" class="contact-botton">Send comment</button>

      <!--  Toast -->
      <div v-if="showToast" class="toast">
        {{ toastMessage }}
      </div>

    </div>
  </form>
</template>
 <script setup>
import { ref } from 'vue'

// form data
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

// toast
const showToast = ref(false)
const toastMessage = ref('')

//  email validation function
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//  submit function
const handlesubmit = () => {

  //  empty fields
  if (!name.value || !email.value || !phone.value || !message.value) {
    toastMessage.value = "Please fill all fields "
    showToast.value = true
    hideToast()
    return
  }

  //  wrong email
  if (!isValidEmail(email.value)) {
    toastMessage.value = "Invalid Email Address "
    showToast.value = true
    hideToast()
    return
  }

  //  success
  toastMessage.value = "Your message successfully sent "
  showToast.value = true
  hideToast()

  // reset form
  name.value = ""
  email.value = ""
  phone.value = ""
  message.value = ""
}

// hide toast after 3 sec
const hideToast = () => {
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}
</script>

<style scoped>
.contact-heading{
    margin-left: 35px;
    color: rgba(196, 160, 90, 1);
    margin-top: 80px;
    font-size: 40px;
}
 .contact-pergraph{
 color:rgb(100, 99, 99);
 font-size: 23px;
 font-weight: 300;
 margin-left: 35px;
 }
 .input-name{
    height: 30px;
    width:470px;
    padding: 10px 10px;
    margin-bottom: 25px;
    margin-left: 47px;
    font-size: 16px;
 }
  .toast{
   position: fixed;
  bottom: 20px;
  right: 20px;
  background: black;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  }
 .input-email{
    height: 30px;
    width:500px;
    padding: 10px 10px;
    margin-bottom: 20px;
     margin: 10px; 
    font-size: 16px;
 }
 
 .input-phone{
    height: 30px;
    width:1000px;
    margin-bottom: 20px;
    padding: 10px 10px;
    margin-left: 50px;
    font-size: 16px;
 }
 .input-comment{
    height: 20px;
    padding-bottom: 120px;
    width:1013px;
    margin-top: 10px;
    margin-left: 50px;
    /* marg */
    font-size: 16px;
 }
  .contact-botton{
    color:white;
    background-color:rgba(196, 160, 90, 1);
    cursor: pointer;
    padding: 15px 15px;
    width: 190px;
    height: 50px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 10px;
    margin-top: 27px;
    margin-left: 47px;
    margin-bottom: 70px;
    border: none;
  }
   @media(max-width:320px){
    .contact-heading{
      font-size: 30px;
      margin-left: 5px;
      
    }
    .contact-pergraph{
      font-size: 16px;
      margin-left: 0px;
      padding: 0px 5px;
      margin-top: 0%;
    }
    .input-name{
      width: 120px;
      margin-left: 10px;
      height: 22px;
      margin-bottom: 13px;
      font-size: 14px;
    }
    .input-email{
      width: 120px;
      margin-left: 10px;
      height: 22px;
      margin-top: 5px;
      margin-bottom: 13px;
      font-size: 14px;
    }
    .input-phone{
      width: 274px;
      margin-left: 10px;
      height: 22px;
      margin-top: 0px;
      margin-bottom: 13px;
      font-size: 14px;
    }
    .input-comment{
      width: 292px;
      margin-left: 10px;
      margin-top: 0px;
      margin-bottom: 0%;
      font-size: 14px;
      height:10px ;
    }
    .contact-botton{
      width: 120px;
      margin-left: 10px;
      font-size: 13px;
      height: 42px;
      margin-top: 13px;
    }
    .contact-heading{
     margin-left: 25px;
     }
     .contact-pergraph{
      margin-left: 25px;
     }
   }
  
</style>