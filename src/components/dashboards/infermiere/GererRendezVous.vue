<script>


import axios from 'axios'
import SideBar from '../SideBar.vue';
export default{
  components: { SideBar },
  data(){
    return{
      appointments: [],
      availableDocs :[],
      salles:[],
      department:'',
      doctor:'',
      salle:'',
      date:'',
      rv:null,
    }
  },
  mounted(){
     this.FetchApps();
     
  },
  methods:{
    async FetchApps(){
      await axios.get('http://localhost:8000/api/demandes')
            .then(res => { 
              this.appointments = res.data.apps.map(app => ({ ...app, accepted: false })); 
            })
            .catch(err => console.log(err))
    },
    async toggler(id){
        await axios.get(`http://localhost:8000/api/demandes/${id}`)
        .then(res => { 
          this.rv = res.data.rv;
        })
        .catch(err => {console.log(err)
        })  

        await axios.get('http://localhost:8000/api/rvsalles',{params : {id : id }})
        .then(res =>  this.salles = res.data.salles)
        .catch(err => {console.log(err)
        })
        this.appointments = this.appointments.map(app => 
          app.id === id ? { ...app , accepted: !app.accepted } : app
        );
    },
    async depChange(event){
        this.department = event.target.value;  
        await axios.get('http://localhost:8000/api/meddept',{params : {dep : this.department}})
        .then(res =>  this.availableDocs = res.data.doctor)
        .catch(err => {console.log(err)
            this.availableDocs = []
        })
    },
    
    async createRendezVous(){
      if(this.rv){
        await axios.post('http://localhost:8000/api/appointments',{
         rv: this.rv,
         dep: this.department,
         doctor: this.doctor,
         salle: this.salle,
         date: this.date,
        }).then(res => console.log(res.data))
        .catch(err => console.log(err.data))
      }
    }

  }
}
</script>
<template>
<div class="container-fluid">

  <div class="row">
    <side-bar>
      <template v-slot:sidebar-content>
        <h5><RouterLink to="/dashboards/infermiere">Accueil</RouterLink> </h5>
          <h5><RouterLink to="/dashboards/infermiere/rendezvous">Les demandes</RouterLink> </h5>
          <h5><RouterLink to='/appointments'>Rendez Vous</RouterLink> </h5>
      </template>
      </side-bar>

<main class="col-9">
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
    
    <form v-if="app.accepted" @submit.prevent="createRendezVous">
  
      <select  v-model="department" name="department" id="department" class="form-select mb-3" aria-label="Departments" @change="depChange">
        <option disabled selected value="" >Departments</option>
        <option value="ophthalmology">Ophthalmology</option>
        <option value="urology">Urology</option>
        <option value="cardiology">Cardiology</option>
        <option value="gynecology">Gynecology</option>
      </select>
      <select  v-model="doctor" name="doctors" id="doctors" class="form-select mb-3" aria-label="Doctors">
        <option disabled selected value="" >Doctors</option>    
        <option v-for="doctor in availableDocs" :key="doctor.id" :value="doctor.name">{{doctor.name}}</option>
      </select>
      <select v-model="salle" name="salles" id="salles" class="form-select mb-3" aria-label="Salles"  >
        <option disabled selected value="" >Les salles</option>
        <option v-for="salle in salles" :key="salle.id" :value="salle.designation">{{salle.designation}}</option>
        
      </select>
      <input  name="date" v-model="date" type="datetime-local" class="form-control mb-3" />
      <button  class="btn btn-success mb-3" >Confirm</button>
    </form>
      
      </div>
      </div>
</main>
</div>
</div>  
</template>