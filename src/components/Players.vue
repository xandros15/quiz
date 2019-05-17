<template>
    <div id="app">
        <ol class="left-aside panel">
            <Player v-for="(player, index) in playersSorted"
                    :isCurrent="current && player.name === current.name"
                    :isTakeover="takeover && player.name === takeover.name"
                    :player="player"
                    :key="player.name"
                    :index="index"
            />
        </ol>
        <Order v-if="players.length > 1" class="bottom-aside-1"/>
        <div v-if="players.length > 0" class="bottom-aside-2">
            <Btn color="blue" @click="pass">pass</Btn>
            <Btn color="green" @click="correct">Correct</Btn>
            <Btn color="red" @click="incorrect">Incorrect</Btn>
        </div>
        <div class="panel bottom-aside-3">
            <label>
                New player: <input @keyup.enter="createPlayer" v-model="name" type="text">
            </label>
        </div>
    </div>
</template>

<script>
  import Order from './Order'
  import Player from './Player'
  import Btn from './Btn';

  export default {
    components: {Player, Order, Btn},
    name: 'Players',
    data () {
      return {
        name: '',
      }
    },
    methods: {
      createPlayer () {
        if (this.name.length >= 3) {
          this.$store.dispatch('createPlayer', this.name).then(() => {this.name = ''})
        }
      },
      pass () {
        this.$store.dispatch('pass')
      },
      correct () {
        this.$store.dispatch('correct')
      },
      incorrect () {
        this.$store.dispatch('incorrect')
      },
    },
    computed: {
      takeover(){
        return this.$store.state.takeover
      },
      current(){
        return this.$store.state.current
      },
      players () {
        return this.$store.state.players
      },
      playersSorted () {
        return this.$store.getters.playersSorted
      },
      top () {
        return this.$store.getters.top
      }
    }
  }
</script>

<style scoped>
    .left-aside {
        grid-area: left;
    }
    .right-aside {
        grid-area: right;
    }
    .bottom-aside-1 {
        grid-area: bottom1;
    }
    .bottom-aside-2 {
        grid-area: bottom2;
    }
    .bottom-aside-3 {
        grid-area: bottom3;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
                "bottom1 bottom1 . ."
                "bottom2 bottom2 . ."
                "left left right right"
                "bottom3 . . .";
    }
    .panel {
        margin-bottom: 1rem;
    }
</style>
