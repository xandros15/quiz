<template>
    <li :style="style">
        <h3>
            <span :class="{ 'not-allowed' : isCurrent }" class="clickable" @click="toggleTakeover">
            <span class="meta">{{player.name}}</span>
            <span class="meta">Score: {{player.score}}</span>
            <span class="meta">HP: {{player.hp}}</span>
            </span>
            <span class="meta clickable" @click="removePlayer">❌</span>
        </h3>
    </li>
</template>

<script>
  export default {
    name: 'player',
    props: {
      isCurrent: Boolean,
      isTakeover: Boolean,
      player: {
        type: Object,
        required: true
      }
    },
    data () {
      return {name: this.player.name,}
    },
    methods: {
      toggleTakeover () {
        this.$store.dispatch('toggleTakeover', this.name)
      },
      removePlayer () {
        this.$store.dispatch('removePlayer', this.name)
      },
    },
    computed: {
      style () {
        if (this.isCurrent) {
          return 'color: #232aae'
        } else if (this.isTakeover) {
          return 'color: #ea8800'
        }
        return ''
      }
    }
  }
</script>

<style scoped>
    .meta {
        margin: 0 .3rem;
    }
    .clickable {
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none; /* webkit (safari, chrome) browsers */
        -moz-user-select: none; /* mozilla browsers */
        -khtml-user-select: none; /* webkit (konqueror) browsers */
        -ms-user-select: none; /* IE10+ */
    }
    .clickable.not-allowed {
        cursor: not-allowed;
    }
</style>
