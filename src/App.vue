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
    <p>작성: 내용을 입력한 뒤 'enter' 키 입력 또는 '+' 버튼 클릭</p>
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
