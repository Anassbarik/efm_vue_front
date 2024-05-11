<template>
    <h1>Patients List</h1>
    <div>
      <ul v-for="patient in patients" :key="patient.cin">
        <li >
        {{ patient.name }}
        </li>
        <li >
        {{ patient.cin }}
        </li>
      </ul>
     

    </div>
  </template>
  
  <script>
 import axios from 'axios';
 export default {
    name : 'PatientsComponent',
    data() {
      return {
       patients : [
    ]
      }
    },
    mounted(){
        this.getPatients();
    },
    methods: {
     async getPatients(){
        // await this.axios.get('http://127.0.0.1:8000/api/medecins')
        //       .then(res => this.medecins = res.data)
        //       .catch(err => {console.log(err)
        //             this.medecins = []
        //     })
        await axios.get('http://127.0.0.1:8000/api/patients')
              .then(res => this.patients = res.data)
              .catch(err => {console.log(err)
                    this.medecins = []
            })
      } 
    },
  }
  </script>
  
  <style></style>
  