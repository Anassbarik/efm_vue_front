<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '../SideBar.vue';


export default{
  components: { SideBar },
  data(){
    return{
      numberOfApps : 0,
      apps : null
    }
  },
  mounted(){
      this.FetchNumberOfApps();
      this.FetchApps();

  },
  methods:{
    async FetchNumberOfApps(){
      await axios.get('http://localhost:8000/api/countrv')
            .then(res => this.numberOfApps = res.data.apps[0].countApps)
            .catch(err => console.log(err))
    },
    async FetchApps(){
      await axios.get('http://localhost:8000/api/appointments')
            .then(res => this.apps = res.data)
            .catch(err => console.log(err))
    },
    async deleteApp(id){
      await axios.delete(`http://localhost:8000/api/appointments/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
          
    },
  }
}
</script>
<template >
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
        <RouterLink to="/dashboards/infermiere/rendezvous">
        <div class="border border-dark p-5 rounded" style="display: flex; justify-content: space-between; margin-top: 50px;">
          
          <h1>Pending Appointments </h1>
          <h3 style="color: green;">{{ numberOfApps }}</h3>
        </div>
      </RouterLink>
      <div class="apps mt-5">
        <h5 class="mb-4">Les rendez vous</h5>
  <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">patient</th>
      <th scope="col">medecin</th>
      <th scope="col">salle</th>
      <th scope="col">date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="app in apps" :key="app.id">
      <th scope="row">1</th>
      <td>{{ app.p_name }}</td>
      <td>{{ app.m_name }}</td>
      <td>{{ app.s_des }}</td>
      <td>{{ app.date }}</td>
      <td ><RouterLink :to="`/dashboards/infermiere/rendezvous/${app.id}`"><button class="btn btn-success">Edit</button></RouterLink> </td>
      <td>
        <form @submit.prevent='deleteApp(app.id)'>
          <button class="btn btn-danger">
            Delete
          </button>
        </form>
      </td>
      
    </tr>
    
   
  </tbody>
</table>
      </div>
   <RouterView /> 
      </main>
    </div>
  </div>
    
</template>
