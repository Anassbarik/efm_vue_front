<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '../SideBar.vue';


export default{
  components: { SideBar },
  data(){
    return{
      apps : null,
      
     
    }
  },
  mounted(){
      this.FetchOfApps();

  },
  methods:{
    async FetchApps(){
      await axios.get('http://localhost:8000/api/appointments')
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
          <h5><RouterLink to="/dashboards/infermiere/rendezvous">Les demandes</RouterLink> </h5>
          <h5><RouterLink to='/appointments'>Rendez Vous</RouterLink> </h5>
      </template>
      </side-bar>
      <main class="col-9">
       <h3>Rendez vous</h3>
    
   <RouterView /> 
      </main>
    </div>
  </div>
    
</template>
