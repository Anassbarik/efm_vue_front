<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';


export default{
  data(){
    return{
        rvs: [],
        medecins: [],
        medecin: null,
    }
  },
  mounted(){
    this.getRvs();
    this.getMedecins();
    this.getAuth();
  },
  methods:{
    async getAuth(){
      await axios.get('http://localhost:8000/api/user')
      .then(res => {
        this.findDoc(res.data.id)
      })
    },
    async getRvs(){
        
        await axios.get('http://localhost:8000/api/rvsmedecin')
        .then(res => this.rvs = res.data.apps)
        .catch(err => console.log(err))
    },
    async getMedecins(){
      await axios.get('http://localhost:8000/api/medecins')
        .then(res => this.medecins = res.data)
        .catch(err => console.log(err))
    },
    findDoc(id){
      this.medecin = this.medecins.find(med => med.user_id == id);
    }
    
    
  }
}
</script>
<template>
    <div>
      <h1>Your appointments MR {{ medecin && medecin.name + medecin.id }}</h1>
      
      <RouterLink v-if="medecin" :to="`/dashboards/medecin/${medecin.id}`">update your info</RouterLink>
    </div>
    <RouterLink to="/">
        <div class="card" v-for="app in rvs" :key="app.id" >
  <div class="card-header">
    {{ app.name }}'s appointment  
  </div>
  <div class="card-body">
    <p class="card-text">CIN : {{ app.cin }}</p>
    <p class="card-text">Adresse : {{ app.address }} </p>
    <p class="card-text">Tel : {{ app.phone }}</p>
    <p class="card-text">Cause : {{ app.type }}</p>
    <button class="btn btn-success mb-3" >Show</button>
    
    
      
  </div>
  </div>
    </RouterLink>
   <RouterView /> 
</template>