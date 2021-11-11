<template>
  <div>
    <input
      type="text"
      placeholder="Add todo ..."
      v-model.trim="inputTodo"
      @keyup.enter="addTodo"
    >

    <button @click="addTodo">+</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data () {
    return {
      inputTodo: null,
    }
  },
  methods: {
    addTodo () {
      if (this.inputTodo) {
        this.$store.dispatch('addTodo', this.inputTodo)
      } else {
        alert('※ TODO를 입력하세요 ※')
      }

      this.inputTodo = null
    }
  }
}
</script>

<style>
button {
  margin-left: 3px;
}
</style>