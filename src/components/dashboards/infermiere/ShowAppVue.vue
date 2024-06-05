<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';
import SideBar from '../SideBar.vue';


export default{
  components: { SideBar },
     data(){
        return{
            urlId: this.$route.params.id,
            appointment: null,
            form: {
                p_name: null,
                m_name: null,
                s_des: null,
                date:null,
            }
        }
     },
     methods:{
        async getApp(){
            await axios.get(`http://localhost:8000/api/appointments/${this.urlId}`)
              .then(res => {
                    this.appointment = res.data
                    if (this.appointment) {
                        
                        this.form.p_name = this.appointment.id_patient
                        this.form.m_name = this.appointment.id_medecin
                        this.form.s_des = this.appointment.id_salle
                        this.form.date = this.appointment.date
                    }

            })
              .catch(err => {console.log(err)
               
            })
        },
        async updateApp(){
            await axios.put(`http://localhost:8000/api/appointments/${this.appointment.id}`,this.form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
     },
     mounted(){
        this.getApp();

       
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
       
        <form v-if="appointment" @submit.prevent="updateApp" >
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
             <input type="text" class="form-control" id="patient"  placeholder="Patient" v-model="form.p_name"/>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="medecin"  placeholder="Medecin" v-model="form.m_name">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="salle" placeholder="Salle" v-model="form.s_des">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="datetime-local" class="form-control" id="date"  placeholder="Date" v-model="form.date">
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
