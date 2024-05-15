<script>
import axios from 'axios'
export default{
     data(){
        return{
            urlId: this.$route.params.id,
            medecin: null,
            form: {
                name: null,
                email: null,
                phone: null,
                address: null,
                profession: null,
            }
        }
     },
     methods:{
        async getMedecin(){
            await axios.get(`http://localhost:8000/api/medecins/${this.urlId}`)
              .then(res => {
                    this.medecin = res.data

                    this.form.name = this.medecin.name;
                    this.form.email = this.medecin.email;
                    this.form.phone = this.medecin.phone;
                    this.form.address = this.medecin.address;
                    this.form.profession = this.medecin.profession;
            })
              .catch(err => {console.log(err)
               
            })
        },
        async updateMed(){
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
<template>
    <form v-if="medecin" @submit.prevent="updateMed" >
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
             <input type="text" class="form-control"  placeholder="Nom" v-model="form.name"/>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="email" class="form-control" id="email"  placeholder="Email" v-model="form.email">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="phone" placeholder="Phone" v-model="form.phone">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="address"  placeholder="address" v-model="form.address">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
            <input type="text" class="form-control" id="profession"  placeholder="profession" v-model="form.profession">
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="col-sm-10">
                <button class="btn btn-primary w-100" type="submit">modifier</button>
            </div>
        </div> 
    </form>
</template>