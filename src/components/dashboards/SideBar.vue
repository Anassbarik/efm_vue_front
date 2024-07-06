<style>
 .sidebar {
      background-color: #f8f9fa;
      /* height: 100vh; */
      padding: 15px;
      display: flex;
      flex-direction: column;
    }
    .sidebar h4, .sidebar h5 {
      margin-top: 20px;
    }
    .sidebar a {
      display: block;
      padding: 5px 0;
      color: #333;
      text-decoration: none;
    }
    .sidebar a:hover {
      color: #007bff;
      text-decoration: underline;
    }
</style>
<template>
      <nav class="col-3 sidebar text-center">
        <h4><img src="https://wordpress.themeholy.com/mediax/wp-content/uploads/2023/12/logo.svg" alt="logo"></h4>
        <slot name="sidebar-content"></slot>
        <form @submit.prevent="logOut" style="margin-top: auto;">
          <button style="border: none;background-color: #f8f9fa;">
            <font-awesome-icon :icon="['fas', 'sign-out']" class="list-icon" style="font-size: 2rem;margin-top: auto;"/>
          </button>
        </form>
      </nav>
    
</template>
<script>
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true


export default {
  data() {
    return {
      user: null,
    }
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
