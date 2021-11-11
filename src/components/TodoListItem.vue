<template>
  <div class="todo-item">
    <span
      :class="{ completed : todo.isCompleted }"
      @click="completeTodo(todo)"
    >
    {{ todo.title }}
    </span>

    <button @click="removeTodo(todo)">-</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions([
      'removeTodo',
      'completeTodo',
    ])

  //   removeTodo () {
  //     this.$store.dispatch('removeTodo', this.todo)
  //   },
  //   completeTodo () {
  //     this.$store.dispatch('completeTodo', this.todo)
  //   }
  },
}
</script>

<style>
.todo-item {
  margin: 5px 0;
}

.completed {
  color: lightgray;
  text-decoration: line-through lightgray;
}
</style>