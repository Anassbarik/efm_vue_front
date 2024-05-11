<script>


import axios from 'axios'
export default{
  data(){
    return{
      appointments: [],
      toggleStatus: false,
      availableDocs :[],
      salles:[],
      department:'',
      doctor:'',
      salle:'',
      date:'',
      rv:{},
    }
  },
  mounted(){
     this.FetchApps();
  },
  methods:{
    async FetchApps(){
      await axios.get('http://localhost:8000/api/demandes')
            .then(res => this.appointments = res.data.apps)
            .catch(err => console.log(err))
    },
    async toggler(id){
        await axios.get(`http://localhost:8000/api/demandes/${id}`)
        .then(res =>  this.rv = res.data.rv)
        .catch(err => {console.log(err)
        })  

        await axios.get('http://localhost:8000/api/rvsalles',{params : {id : id }})
        .then(res =>  this.salles = res.data.salles)
        .catch(err => {console.log(err)
        })
        return this.toggleStatus = !this.toggleStatus;
    },
    async depChange(event){
        this.department = event.target.value;  
        await axios.get('http://localhost:8000/api/meddept',{params : {dep : this.department}})
        .then(res =>  this.availableDocs = res.data.doctor)
        .catch(err => {console.log(err)
            this.availableDocs = []
        })
    },
    docChange(event){
      this.doctor = event.target.value;
    },
    salleChange(event){
      this.salle = event.target.value;

    },
    dateChange(event){
      this.date = event.target.value;
    },
    async createRendezVous(){
         await axios.post('http://localhost:8000/api/appointments',{
          id_patient : this.rv.id_patient,
          dep: this.department,
          doctor: this.doctor,
          salle: this.salle,
          date: this.date,
          type: this.rv.cause
         }).then(res => console.log(res.data))
         .catch(err => console.log(err.data))
    }

  }
}
</script>
<template>
    <h1 class="mt-5 mb-5">Appointments</h1>
    <div class="card" v-for="app in appointments" :key="app.id">
  <div class="card-header">
    {{ app.name }}'s appointment  
  </div>
  <div class="card-body">
    <p class="card-text">CIN : {{ app.cin }}</p>
    <p class="card-text">Adresse : {{ app.address }}</p>
    <p class="card-text">Tel : {{ app.phone }}</p>
    <p class="card-text">Cause : {{ app.cause }}</p>
    <p class="card-text">Department : {{ app.department }}</p>
    <button class="btn btn-success mb-3" @click="toggler(app.id)">Accept</button>
    
    <form v-if="toggleStatus" @submit.prevent="createRendezVous">
  
      <select v-if="toggleStatus" v-model="department" name="department" id="department" @change="depChange" class="form-select mb-3" aria-label="Departments" >
        <option disabled selected value="" >Departments</option>
        <option value="ophthalmology">Ophthalmology</option>
        <option value="urology">Urology</option>
        <option value="cardiology">Cardiology</option>
        <option value="gynecology">Gynecology</option>
      </select>
      <select v-if="toggleStatus" v-model="doctor" name="doctors" id="doctors" class="form-select mb-3" aria-label="Doctors" @change="docChange">
        <option disabled selected value="" >Doctors</option>    
        <option v-for="doctor in availableDocs" :key="doctor.id" :value="doctor.name">{{doctor.name}}</option>
      </select>
      <select v-if="toggleStatus" v-model="salle" name="salles" id="salles" class="form-select mb-3" aria-label="Salles" @change="salleChange" >
        <option disabled selected value="" >Les salles</option>
        <option v-for="salle in salles" :key="salle.id" :value="salle.designation">{{salle.designation}}</option>
        
      </select>
      <input v-if="toggleStatus" name="date" type="datetime-local" class="form-control mb-3" @change="dateChange"/>
      <button v-if="toggleStatus" class="btn btn-success mb-3" >Confirm</button>
    </form>
      
  </div>
  </div>
    
</template>