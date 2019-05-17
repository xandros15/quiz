<template>
    <div id="app">
        <h2 v-if="answering" class="panel answering">Answering Player: {{answering.name}}</h2>
        <ol class="players panel">
            <Player v-for="(player, index) in playersSorted"
                    :isCurrent="current && player.name === current.name"
                    :isTakeover="takeover && player.name === takeover.name"
                    :player="player"
                    :key="player.name"
                    :index="index"
            />
        </ol>
        <div v-if="top.length > 1" class="top">
            <h3 v-for="player in top">#{{player.place}} {{player.name}}</h3>
        </div>
        <Order v-if="players.length > 1" class="order"/>
        <div v-if="players.length > 0" class="answer">
            <Btn color="blue" @click="pass">pass</Btn>
            <Btn color="green" @click="correct">Correct</Btn>
            <Btn color="red" @click="incorrect">Incorrect</Btn>
        </div>
        <div class="panel new-player">
            <label>
                New player: <input @keyup.enter="createPlayer" v-model="name" type="text">
            </label>
        </div>
    </div>
</template>

<script>
  import Btn from './Btn'
  import Order from './Order'
  import Player from './Player'

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
      takeover () {
        return this.$store.state.takeover
      },
      current () {
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
      },
      answering () {
        return this.$store.getters.answering
      },
    }
  }
</script>

<style scoped>
    .players {
        grid-area: players;
    }
    .order {
        grid-area: order;
    }
    .answer {
        grid-area: answer;
    }
    .answering {
        grid-area: answering;
    }
    .new-player {
        grid-area: new-player;
    }
    .top {
        grid-area: top;
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
                "answering answering . ."
                "answer answer . ."
                "order order . ."
                "players players top top"
                "new-player . . .";
    }
    .top {
        margin: 1rem 0;
        padding-left: 1rem;
    }
    .panel {
        margin-bottom: 1rem;
    }
</style>
