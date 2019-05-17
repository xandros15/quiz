<template>
    <li :style="style">
        <h3>
            <span class="meta clickable" :class="{ 'not-allowed' : isCurrent }" @click="toggleTakeover">
                {{player.name}}
            </span>
            <span class="meta">
                <span class="clickable" :class="{ 'not-allowed' : isCurrent }" @click="toggleTakeover">
                    Score:
            </span>
                <span v-if="!editingScore"
                      class="clickable"
                      @click="changeScore"
                      :class="{ 'not-allowed': !isGameOrder }"
                >
                    {{player.score}}
                </span>
                <input v-else title="score"
                       class="input-edit"
                       @keyup.enter="endChangeScore"
                       @blur="endChangeScore"
                       type="number"
                       v-model="editCache"
                       v-focus
                />
            </span>
            <span class="meta">
                <span class="clickable" :class="{ 'not-allowed' : isCurrent }" @click="toggleTakeover">
                    HP:
                </span>
                <span v-if="!editingHp"
                      class="clickable"
                      @click="changeHp"
                      :class="{ 'not-allowed': !isGameOrder }"
                >
                    {{player.hp}}
                </span>
                <input v-else
                       title="HP"
                       class="input-edit"
                       @keyup.enter="endChangeHp"
                       @blur="endChangeHp"
                       type="number"
                       v-model="editCache"
                       v-focus
                />
            </span>
            <span class="meta clickable" @click="removePlayer">
                ❌
            </span>
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
      return {
        name: this.player.name,
        editCache: '',
        editingScore: false,
        editingHp: false,
      }
    },
    directives: {
      focus: {
        inserted (el) {
          el.focus()
        }
      }
    },
    methods: {
      toggleTakeover () {
        this.$store.dispatch('toggleTakeover', this.name)
      },
      removePlayer () {
        this.$store.dispatch('removePlayer', this.name)
      },
      changeScore () {
        if (this.isGameOrder) {
          this.editCache = this.player.score
          this.editingScore = true
        }
      },
      changeHp () {
        if (this.isGameOrder) {
          this.editCache = this.player.hp
          this.editingHp = true
        }
      },
      endChangeHp () {
        this.editingHp = false
        this.$store.dispatch('setHp', {
          name: this.name,
          hp: this.editCacheNumber
        })
      },
      endChangeScore () {
        this.editingScore = false
        this.$store.dispatch('setScore', {
          name: this.name,
          score: this.editCacheNumber
        })
      },
    },
    computed: {
      isGameOrder () {
        return this.$store.getters.isGameOrder
      },
      editCacheNumber () {
        if (typeof this.editCache === 'string') {
          return parseFloat(this.editCache)
        }
        return this.editCache
      },
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
    .input-edit {
        font-size: 1rem;
        max-width: 3rem;
    }
</style>
