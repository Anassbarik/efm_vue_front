<script>
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/header/NavBar.vue';

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true


export default {
  data() {
    return {
      user: null,
      session: null
    }
  },

  async mounted() {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')
    await axios.get('http://localhost:8000/api/user')
    .then(res => this.user = res.data)
    .catch(err => console.log(err.response.data.message))


    if(this.user){
       console.log('You are logged in');
      }else{
        console.log('you need to log in');
      }
      
    // }
  },
  methods: {
    async logOut() {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')
      await axios.post('http://localhost:8000/logout')
       
      this.$router.push('/');

    }
  }
}
</script>

<template>
  <!-- <header> -->
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
        <RouterLink to="/medecins">Medecins</RouterLink>
        <RouterLink to="/patients">Patients</RouterLink>
        <RouterLink to="/rendezvous">Rendez vous</RouterLink>
        <RouterLink to="/dashboards/infermiere">Infermiere</RouterLink>
        <RouterLink to="/dashboards/rh">Rh</RouterLink>
        <RouterLink to="/dashboards/medecin">Dashboard medecin</RouterLink>
        <form @submit.prevent="logOut">
          <button class="btn btn-danger">Log out</button>
        </form>
      </nav> -->
     
  <!-- </header> -->
  
  <RouterView />
</template>

<style scoped>

</style>
