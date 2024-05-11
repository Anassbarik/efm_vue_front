<script>
// import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';


export default{
  data(){
    return{
    }
  },
  mounted(){
      
  },
  methods:{
   
  }
}
</script>
<template>
    <h1>Welcome HR</h1>

    <RouterLink to="/dashboards/rh/create" class="btn btn-primary mt-5">
        Add a user     
    </RouterLink>
   <RouterView /> 
</template>