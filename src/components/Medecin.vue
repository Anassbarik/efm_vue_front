<template>
    <h1>Doctors List</h1>
    <div>
      <ul>
        <li v-for="(medecin) in medecins" :key="medecin.id">
        {{ medecin.name }}
        </li>
      </ul>
     

    </div>
  </template>
  
  <script>
 import axios from 'axios';
 export default {
    name : 'MedecinComponent',
    data() {
      return {
       medecins : [
      
    ]
      }
    },
    mounted(){
        this.getMedecins();
    },
    methods: {
     async getMedecins(){
  
        await axios.get('http://localhost:8000/api/medecins')
              .then(res => this.medecins = res.data)
              .catch(err => {console.log(err)
                    this.medecins = []
            })

        
      } 
    },
  }
  </script>
  
  <style></style>
  