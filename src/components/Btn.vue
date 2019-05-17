<template>
    <button class="btn" @click="$emit('click')" @mouseup="mouseUp" @mousedown="mouseDown" :class="[
    { active : activated },
    `btn-${color}`
    ]">
        <slot/>
    </button>
</template>

<script>
  export default {
    name: 'btn',
    props: {
      color: String,
      isActive: Boolean,
    },
    data () {
      return {
        toggled: false
      }
    },
    computed: {
      activated () {
        return this.isActive || this.toggled
      }
    },
    methods: {
      mouseUp () {
        this.toggled = false
      },
      mouseDown () {
        this.toggled = true
      }
    }
  }
</script>

<style scoped>
    [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
        cursor: pointer;
    }
    .btn:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(252, 238, 255, 0.25);
    }
    .btn {
        margin: .5rem;
        display: inline-block;
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,
        background-color .15s ease-in-out,
        border-color .15s ease-in-out,
        box-shadow .15s ease-in-out;
    }
    .btn-green.active {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }
    .btn-green {
        color: #28a745;
        background-color: #fff;
        border-color: #28a745;
    }
    .btn-red.active {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }
    .btn-red {
        background-color: #fff;
        color: #dc3545;
        border-color: #dc3545;
    }
    .btn-blue.active {
        color: #fff;
        background-color: #3452ff;
        border-color: #3452ff;
    }
    .btn-blue {
        background-color: #fff;
        color: #3452ff;
        border-color: #3452ff;
    }
</style>