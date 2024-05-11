<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';


export default{
  data(){
    return{
      numberOfApps : 0,
      role: null,
      user : JSON.parse(localStorage.getItem('user'))
    }
  },
  mounted(){
      this.FetchNumberOfApps();
      // this.getRole();

  },
  methods:{
    async FetchNumberOfApps(){
      await axios.get('http://localhost:8000/api/countrv')
            .then(res => this.numberOfApps = res.data.apps[0].countApps)
            .catch(err => console.log(err))
    },
    async getRole(){
      console.log(this.user);
    }
  }
}
</script>
<template >
    <RouterLink to="/dashboards/infermiere/rendezvous">
      <div class="border border-dark p-5 rounded" style="display: flex; justify-content: space-between; margin-top: 50px;">
        <h1>Pending Appointments </h1>
        <h3 style="color: green;">{{ numberOfApps }}</h3>
      </div>
    </RouterLink>
   <RouterView /> 
</template>
