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
  padding: 8px 25px;
  width: 50%;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 15px;
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

.del-btn:hover {
  background: rgb(221, 56, 56);
}

.completed {
  color: rgb(200, 200, 200) !important;
  background: rgb(119, 119, 119) !important;
}
</style>