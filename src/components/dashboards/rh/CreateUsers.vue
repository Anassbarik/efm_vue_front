<script>
import axios from 'axios';
// import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export default{
  data(){
    return{
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation:null,
        role: null,
        phone:null,
        address: null,
        profession: null
      }
    }
  },
  mounted(){
    
},
  methods:{
    // emailChange(event){
    //     return this.form.email = event.target.value;
    // },
    // passChange(event){
    //     return this.form.password = event.target.value;

    // },
    // confirmPassChange(event){
    //     return this.form.confirmPassword = event.target.value;

    // },
    // nameChange(event){
    //     return this.form.name = event.target.value;
    // },
    // roleChange(event){
    //     return this.form.role = event.target.value;

    // },
    async createUser(){
      await axios.get('http://localhost:8000/sanctum/csrf-cookie')
        await axios.post('http://localhost:8000/register',{
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
        role: this.form.role,
        phone: this.form.role,
        address: this.form.role,
        profession: this.form.role,
      }).then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
  }
}
</script>
<template>
    <h1 class="mt-3">Create a user</h1>

    <div>
    <form @submit.prevent="createUser">
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" v-model="form.name" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="email" name="email" placeholder="Email" v-model="form.email" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="password" name="password" placeholder="Password" v-model="form.password" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Confirm password" v-model="form.password_confirmation" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="role" name="role" placeholder="Role" v-model="form.role" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="phone" name="phone" placeholder="phone" v-model="form.phone" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="address" name="address" placeholder="address" v-model="form.address" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10" v-if="form.role == 'medecin'">
      <input type="text" class="form-control" id="profession" name="profession" placeholder="profession" v-model="form.profession">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
        <button class="btn btn-success w-100">Create</button>
    </div>
  </div>
</form>
    </div>
</template>