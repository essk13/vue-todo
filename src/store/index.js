import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    todoList: [],
  },
  mutations: {
    ADD_TODO (state, todo) {
      state.todoList.push({
        title: todo,
        isCompleted: false,
        date: new Date().getTime()
      })
    },

    REMOVE_TODO (state, todo) {
      const idx = state.todoList.indexOf(todo)
      return state.todoList.splice(idx, 1)
    },

    COMPLETE_TODO (state, todo) {
      const idx = state.todoList.indexOf(todo)
      state.todoList[idx].isCompleted = !todo.isCompleted
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },

    removeTodo ({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },

    completeTodo ({ commit }, todo) {
      commit('COMPLETE_TODO', todo)
      if (todo.isCompleted) {
        alert('고생했어요!')
      }
    },
  },
  getters: {
    allTodos (state) {
      return state.todoList.length
    },

    completedTodos (state) {
      return state.todoList.reduce((cnt, todo) => {
        if (todo.isCompleted) { cnt += 1 }
        return cnt
      }, 0)
    },

    uncompletedTodos (state) {
      return state.todoList.reduce((cnt, todo) => {
        if (!todo.isCompleted) { cnt += 1 }
        return cnt
      }, 0)
    },
  }
})
