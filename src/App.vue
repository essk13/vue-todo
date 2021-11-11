<template>
  <div id="app">
    <h1>Todo LIST</h1>

    <h3>All todos: {{ allTodos }}</h3>
    <h3>Completed todos: {{ completedTodos }}</h3>
    <h3>Uncompleted todos: {{ uncompletedTodos }}</h3>

    <todo-list>
    </todo-list>

    <todo-form>
    </todo-form>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    ...mapGetters([
      'allTodos',
      'completedTodos',
      'uncompletedTodos',
    ])
  },
  // computed: {
  //   allTodos () {
  //     return this.$store.getters.allTodos
  //   },
  //   completedTodos () {
  //     return this.$store.getters.completedTodos
  //   },
  //   uncompletedTodos () {
  //     return this.$store.getters.uncompletedTodos
  //   },
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
