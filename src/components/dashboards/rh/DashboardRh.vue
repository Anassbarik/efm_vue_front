<script>
import axios from 'axios';
// import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '../SideBar.vue';


export default{
  components: { SideBar },
  data(){
    return{
      medecins : null,
      infermiers : null,
    }
  },
  mounted(){
        this.getMedecins();
        this.getInfermiers();
    },
    methods: {
     async getMedecins(){
  
        await axios.get('http://localhost:8000/api/medecins')
              .then(res => this.medecins = res.data)
              .catch(err => {console.log(err)
                    this.medecins = []
            })

        
      }, 
     async getInfermiers(){
  
        await axios.get('http://localhost:8000/api/infermiers')
              .then(res => this.infermiers = res.data)
              .catch(err => {console.log(err)
                    this.infermiers = []
            })

        
      } ,
    async deleteInfermier(id){
      await axios.delete(`http://localhost:8000/api/infermiers/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
          
    },
    async deleteMedecin(id){
      await axios.delete(`http://localhost:8000/api/medecins/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
          
    },
}
}
</script>
<template>
  <div class="container-fluid">
  <div class="row">
    <side-bar>
      <template v-slot:sidebar-content>
          <h5><RouterLink to="/medecins">Medecins</RouterLink> </h5>
          <h5><RouterLink to="/infermieres">infermiere</RouterLink> </h5>
      </template>
      </side-bar>
      <main class="col-9">

        <h1 class="align-self-start">Welcome HR</h1>
        
        <RouterLink to="/dashboards/rh/create" class="btn btn-primary  mt-5 mx-5 mb-5">
          Add a user     
        </RouterLink>
        <div class="infermier-table">
          <h5>Infermiers</h5>
          <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="inf in infermiers" :key="inf.id">
      <th scope="row">1</th>
      <td>{{ inf.name }}</td>
      <td>{{ inf.email }}</td>
      <td>{{ inf.phone }}</td>
      <td>{{ inf.address }}</td>
      <td ><RouterLink :to="`/dashboards/rh/infermier/${inf.id}`"><button class="btn btn-success">Edit</button></RouterLink> </td>
      <td>
        <form @submit.prevent='deleteInfermier(inf.id)'>
          <button class="btn btn-danger">
            Delete
          </button>
        </form>
      </td>
      
    </tr>
    
   
  </tbody>
</table>
        </div>
        <div class="medecin-table">
        <h5>Medecin</h5>
        <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="med in medecins" :key="med.id">
      <th scope="row">1</th>
      <td>{{ med.name }}</td>
      <td>{{ med.email }}</td>
      <td>{{ med.phone }}</td>
      <td>{{ med.address }}</td>
      <td ><RouterLink :to="`/dashboards/rh/medecin/${med.id}`"><button class="btn btn-success">Edit</button></RouterLink> </td>
      <td>
        <form @submit.prevent='deleteMedecin(med.id)'>
          <button class="btn btn-danger">
            Delete
          </button>
        </form>
      </td>
      
    </tr>
    
   
  </tbody>
</table>
        </div>
      </main>
   <RouterView /> 
  </div>
  </div>
      
</template>