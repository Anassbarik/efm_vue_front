<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '../SideBar.vue';


export default{
  components: { SideBar },
     data(){
        return{
            urlId: this.$route.params.id,
            infermier: null,
            form: {
                name: null,
                email: null,
                phone: null,
                address:null,
            }
        }
     },
     methods:{
        async getInfermier(){
            await axios.get(`http://localhost:8000/api/infermiers/${this.urlId}`)
              .then(res => {
                    this.infermier = res.data
                    if (this.infermier) {
                        
                        this.form.name = this.infermier.name
                        this.form.email = this.infermier.email
                        this.form.phone = this.infermier.phone
                        this.form.address= this.infermier.address
                    }

            })
              .catch(err => {console.log(err)
               
            })
        },
        async updateInfermier(){
            await axios.put(`http://localhost:8000/api/infermiers/${this.infermier.id}`,this.form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
     },
     mounted(){
        this.getInfermier();

       
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
       
        <form v-if="infermier" @submit.prevent="updateInfermier" >
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
