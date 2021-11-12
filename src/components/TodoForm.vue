<template>
  <div>
    <input
      type="text"
      placeholder="Add todo ..."
      v-model.trim="inputTodo"
      @keyup.enter="addTodo"
    >

    <button class="input-btn" @click="addTodo">+</button>
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
  margin-left: 5px;
  padding: 5.5px 10px;
  border: 0;
  border-radius: 5px;
  font-size: 15px;
  background: lightskyblue;
}

.input-btn:hover {
  background: rgb(7, 156, 161);
}

input {
  padding: 5px 10px;
  font-size: 15px;
  border: 0.5px;
  border-radius: 5px;
  width: 40%;
}
</style>