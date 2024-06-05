<script >
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;



export default{
  
  
  data(){
    return{
      form : {
        email: null,
        password: null
      },
      user : null,
    }
  },mounted(){
  },
  methods:{
 
    async onLogin(){
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
       
       await axios.post('http://localhost:8000/login',{
        email: this.form.email,
        password: this.form.password
      }
    )
    await axios.get('http://localhost:8000/api/user')
          .then(res => {
            this.user = res.data;
            if(this.user){
                switch(this.user.role){
                case 'infermiere' : 
                this.$router.push('/dashboards/infermiere');
                break;
                case 'medecin' : 
                this.$router.push('/dashboards/medecin');
                break;
                case 'rh' : 
                this.$router.push('/dashboards/rh');
                break;
                default :
                this.$router.currentRoute
              }
            }
          })

    

      
      
    },

},

}
</script>
<template >
<div class="body">

  

 <div class="wrapper">


    <form @submit.prevent="onLogin">
      <h1><img src="https://wordpress.themeholy.com/mediax/wp-content/uploads/2023/12/logo.svg" alt="logo"></h1>
      <div class="input-box d-flex align-items-center">
        <input type="text" placeholder="Email" name="email" id="email" v-model="form.email" required autocomplete="true">
        <font-awesome-icon :icon="['fas', 'user']" class='bx bxs-user' />

      </div>
      <div class="input-box">
        <input type="password" name="password" id="password" placeholder="Password" v-model="form.password" required>
        <font-awesome-icon :icon="['fas', 'lock']" class='bx bxs-lock-alt' />
      </div>
      <div class="remember-forgot ">
        <label class="d-flex align-items-center"><input type="checkbox">Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" class="btn">Login</button>
   
    </form>
  </div>
</div>  
</template>
<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
    font-family: "Poetsen One", sans-serif;
    font-weight: 400;
    font-style: normal;
  
  

}


.body{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('/public/font.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
.wrapper{
  width: 420px;
  background-color: ghostwhite;
  /* background: transparent; */
  border: 2px solid rgba(255, 255, 255, .2);
  /* backdrop-filter: blur(17px); */
  color: #0c0b0b;
  border-radius: 12px;
  padding: 30px 40px;
}
.wrapper h1{
  color: #333;
  text-align: center;
}
.wrapper .input-box{
  position: relative;
  width: 100%;
  height: 50px;
  
  margin: 30px 0;
}
.input-box input{
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 40px;
  font-size: 16px;
  color: #333;
  padding: 20px 45px 20px 20px;
}
.input-box input::placeholder{
  color: #0d6dfd68;
}

.input-box .bxs-user{
  position: absolute;
  right: 20px;
  top: 30%;
  transform: translate(-50%);
  font-size: 20px;
  color: #04ce78;

}
.input-box .bxs-lock-alt{
  position: absolute;
  right: 20px;
  top: 30%;
  transform: translate(-50%);
  font-size: 20px;
  color: #04ce78;

}
.wrapper .remember-forgot{
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
  color:#04ce78;
}
.remember-forgot label input{
  accent-color: #fff;
  margin-right: 3px;

}
.remember-forgot a{
  color: #fff;
  text-decoration: none;

}
.remember-forgot a:hover{
  text-decoration: underline;
  color: #333;
}
.wrapper .btn{
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
 
}
.wrapper .btn:hover{
  background-color: #0d6efd;
  color: #fff;
}
.wrapper .register-link{
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;

}

</style>