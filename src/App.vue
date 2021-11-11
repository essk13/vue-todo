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

    <h4>※ 사용방법 ※</h4>
    <p>작성: 내용 입력 후 'enter' 키 입력 또는 '+' 버튼 클릭</p>
    <p>완료: 작성된 todo 클릭</p>
    <p>제거: 'x' 버튼 클릭</p>
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
}
</script>

<style>
body {
  background: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
