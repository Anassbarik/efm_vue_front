<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '../SideBar.vue';


export default{
  components: { SideBar },
     data(){
        return{
            urlId: this.$route.params.id,
            medecin: null,
            form: {
                name: null,
                email: null,
                phone: null,
                address:null,
            }
        }
     },
     methods:{
        async getMedecin(){
            await axios.get(`http://localhost:8000/api/medecins/${this.urlId}`)
              .then(res => {
                    this.medecin = res.data
                    if (this.medecin) {
                        
                        this.form.name = this.medecin.name
                        this.form.email = this.medecin.email
                        this.form.phone = this.medecin.phone
                        this.form.address= this.medecin.address
                    }

            })
              .catch(err => {console.log(err)
               
            })
        },
        async updateMedecin(){
            await axios.put(`http://localhost:8000/api/medecins/${this.medecin.id}`,this.form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
     },
     mounted(){
        this.getMedecin();

       
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
      <main class="col-9 ">
       
        <form v-if="medecin" @submit.prevent="updateMedecin" >
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
             <input type="text" class="form-control" id="name"  placeholder="Nom" v-model="form.name"/>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="email"  placeholder="Email" v-model="form.email">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="phone" placeholder="Phone" v-model="form.phone">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="address"  placeholder="Address" v-model="form.address">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
                <button class="btn btn-primary w-100" type="submit">modifier</button>
            </div>
        </div> 
    </form>
   <RouterView /> 
      </main>
    </div>
  </div>
    
</template>
