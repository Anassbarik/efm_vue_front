
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
   
    handleSubmit(){
  
        axios.post('http://localhost:8000/api/demandes',this.demande)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
   }
  }

}
</script>
<template>
    <div class="appointment" id="appointment">
     <div class="container">
      <div class="row">
        <div class="col-lg-4 working-hours">
          <h3>Working Hours</h3>
          <p class="mb-5" style="color: #ffffff;opacity: 0.8;">Variations of passages available are
             anything but embarrassing.
          </p>
          <ul class="hours-list list-unstyled">
            <li>
              <ul class="d-flex justify-content-between list-unstyled">
                <li>Monday - Tuesday:</li>
                <li>9am - 6pm</li>
              </ul>
            </li>
            <li>
              <ul class="d-flex justify-content-between list-unstyled">
                <li>Wednesday - Thursday:</li>
                <li>8am - 5pm</li>
              </ul>
            </li>
            <li>
              <ul class="d-flex justify-content-between list-unstyled">
                <li>Friday:</li>
                <li>7am - 10pm</li>
              </ul>
            </li>
            <li>
              <ul class="d-flex justify-content-between list-unstyled">
                <li>Saturday:</li>
                <li>10am - 7pm</li>
              </ul>
            </li>
            <li>
              <ul class="d-flex justify-content-between list-unstyled">
                <li>Sunday:</li>
                <li>Closed</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-lg-8 app-form-col d-flex flex-direction-column rounded bg-light shadow">
           <div class="row">
            <div class="col-lg-6 ">
              <img class="rounded mb-5" src="https://wordpress.themeholy.com/mediax/wp-content/uploads/2023/12/form_1_1.jpg" alt="img1">
              <img class="rounded" src="https://wordpress.themeholy.com/mediax/wp-content/uploads/2023/12/form_1_2.jpg" alt="img2">
            </div>
            <div class="col-lg-6">
              <h1 class="mb-5">Book Appointment</h1>
    <form  @submit.prevent="handleSubmit" >
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control inp" id="name" placeholder="Full Name" v-model="demande.name" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control inp" id="cin" placeholder="CIN" v-model="demande.cin" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="email" class="form-control inp" id="email" placeholder="Email" v-model="demande.email" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control inp" id="phone" placeholder="Phone" v-model="demande.phone" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <input type="text" class="form-control inp" id="address" placeholder="address" v-model="demande.address" >
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
      <select v-model="demande.department" name="department" class="form-select mb-3 inp" aria-label="Departments" >
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
      <input type="text" class="form-control inp" id="cause" placeholder="cause" v-model="demande.cause" @change="causeChange">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="col-sm-10">
        <button class="btn app-btn2" type="submit">Book Appointment</button>
    </div>
  </div>
</form>
            </div>
           </div>
        </div>
      </div>
     </div>
    </div>
</template>
<style>
.working-hours{
  background-color: rgb(64, 64, 244);
    color: white;
    padding: 32px;
    border-radius: 10px;
    text-align: start;
    font-weight: 500;
    height: 500px;
    margin-top: 100px;
}
.hours-list ul{
  margin-bottom: 35px;
}
.appointment{
  margin-top: 400px;
}
.working-hours::before{
  content: '';
    border: 1px solid rgb(190, 188, 188);
    position: absolute;
    left: 3%;
    height: 500px;
    width: 200px;
    border-radius: 10px;
    z-index: -3;
}
.inp{
    width: 345px;
    background-color: rgb(248, 248, 248);
}
.app-btn2{
  width: 345px;
  background-color: #04ce78;
  border-color: #04ce78;
  color: white;
}
.app-form-col{
  padding: 65px;
}
</style>