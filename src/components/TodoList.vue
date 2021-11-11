<template>
  <div>
    <todo-list-item
      v-for="todo in todoList"
      :key="todo.date"
      :todo="todo"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem'

import { mapState } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  computed: {
    ...mapState([
      'todoList',
    ])

    // todoList () {
    //   return this.$store.state.todoList
    // }
  },
}
</script>

<style>

</style>