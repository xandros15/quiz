<template>
    <div class="btn-group">
        <Btn @click="changeOrder('game')" color="green" :isActive="isActive('game')">game</Btn>
        <Btn @click="changeOrder('takeover')" color="red" :isActive="isActive('takeover')">takeover</Btn>
        <Btn @click="changeOrder('places')" color="blue" :isActive="isActive('places')">places</Btn>
    </div>
</template>

<script>
  import Btn from './Btn'

  export default {
    name: 'order',
    components: {Btn},
    methods: {
      changeOrder (order) {
        this.$store.dispatch('changeOrder', order)
      },
      isActive(order){
        return this.order === order
      }
    },
    computed: {
      order () {
        return this.$store.state.order
      }
    }
  }
</script>

<style scoped>
</style>