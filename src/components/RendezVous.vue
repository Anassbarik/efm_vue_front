
<script>
import axios from 'axios';
export default{
  data(){
    return{
       demande:{
        name: '',
        cin:'',
        email : '',
        phone:'',
        address:'',
        department:'',
        cause:'',
       }
    }
  },
  methods:{
    nameChange(event){
    this.demande.name = event.target.value;
    },
    cinChange(event){
    this.demande.cin = event.target.value;
    },
    emailChange(event){
    this.demande.email = event.target.value;
    },
    phoneChange(event){
    this.demande.phone = event.target.value;
    },
    addressChange(event){
    this.demande.address = event.target.value;
    },
    causeChange(event){
    this.demande.cause = event.target.value;
    }, 
    depChange(event){
    // this.demande.department = event.target.value;
    console.log(event.target.value);
    }, 
    handleSubmit(){
        // event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/demandes',this.demande)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
   }
  }

}
</script>
<template>
    <h1>Rendez vous</h1>
    <form  @submit.prevent="handleSubmit" >
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" placeholder="Full Name" v-model="demande.name" @change="nameChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="cin" placeholder="CIN" v-model="demande.cin" @change="cinChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Email" v-model="demande.email" @change="emailChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="phone" placeholder="Phone" v-model="demande.phone" @change="phoneChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="address" placeholder="address" v-model="demande.address" @change="addressChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <select v-model="demande.department" name="department" class="form-select mb-3" aria-label="Departments" @change="depChange">
        <option disabled selected value="" >Departments</option>
        <option value="ophthalmology">Ophthalmology</option>
        <option value="urology">Urology</option>
        <option value="cardiology">Cardiology</option>
        <option value="gynecology">Gynecology</option>
    </select>
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control" id="cause" placeholder="cause" v-model="demande.cause" @change="causeChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
        <button class="btn btn-primary w-100" type="submit">demande rendez-vous</button>
    </div>
  </div>
</form>
</template>