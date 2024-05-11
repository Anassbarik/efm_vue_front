<template>
  <h1>Test</h1>
  <div>
   {{ nomDonnee }}
  </div>
</template>

<script>
export default {
  inject: ['nomDonnee'],
  data() {
    return {
      
      compteur: 0
    }
  },
  // computed: {
  //     fullName (){
  //       return this.firstName + ' ' + this.lastName
  //     }
  // }
  methods: {
    increment() {
      this.compteur++
    },
    decrement() {
      this.compteur--
    }
  },
  watch: {
    compteur(newValue, oldValue) {
      console.log('la nouvelle valeur ' + newValue + " l'ancienne valeur " + oldValue)
    }
  }
}
</script>

<style></style>
