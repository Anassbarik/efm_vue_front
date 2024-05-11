<script >
import axios from 'axios'
// import { useRouter } from 'vue-router';

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
    emailChange(event){
      return this.form.email = event.target.value;
    },
    passChange(event){
      return this.form.password = event.target.value;
      
    },
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
<template>
    <h1>login</h1>

    <form @submit.prevent="onLogin">
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="email" placeholder="Email" v-model="form.email" @change="emailChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password" @change="passChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
        <button class="btn btn-success w-100">Login</button>
    </div>
  </div>
</form>
<div>
    <p>{{ user }}</p>
</div>
</template>
