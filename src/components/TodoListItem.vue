<template>
  <div
    class="todo-item"
    @click="completeTodo(todo)"
    :class="{ completed : todo.isCompleted }"
  >
    <span>
    {{ todo.title }}
    </span>

    <button class="del-btn" @click="removeTodo(todo)">X</button>
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
  },
}
</script>

<style>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin: 10px auto;
  padding: 10px 25px;
  width: 60%;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
}

.todo-item:hover {
  background: lightskyblue;
  color: black;
}

.del-btn {
  font-weight: bold;
  color: white;
  background: none;
}

.completed {
  color: gray !important;
  background: rgb(43, 43, 44) !important;
}
</style>