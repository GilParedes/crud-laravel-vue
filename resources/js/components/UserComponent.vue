<template id="TODOS_PAGE">
  <div>
    <h1>TODOS</h1>
    <router-view></router-view>
  </div>
</template>
<template id="CURRENT_TODOS_PAGE">
  <div id="current-todos" class="container">
    <h3 v-if="todos.length > 0">Current({{todos.length}})</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in todos">
        {{todo.body}}
        <div class="btn-group">
          <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-edit"></span> Edit
          </button>
          <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-ok-circle"></span> Complete
          </button>
          <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-remove-circle"></span> Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<template id="CREATE_TODOS_PAGE">
  <div>
    <div id="get-todo" class="container">
      <input class="form-control"
             :value="newTodo"
             @change="getTodo"
             placeholder="I need to...">
      <button class="btn btn-primary" @click="addTodo">Add Todo</button>
    </div>
  </div>
</template>
<template id="COMPLETED_TODOS_PAGE">
  <div>
    <h3 v-if="completed.length > 0">Completed({{completed.length}})</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in completed">
        {{todo.body}}
        <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-remove-circle"></span> Remove
        </button>
      </li>
    </ul>
  </div>
</template>
<div id="app">
  <div>
    <routing></routing>
    <router-view></router-view>
  </div>
</div>
<template id="routing">
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="route in routes">
        <router-link :to="route.path" class="nav-link" active-class="active">
          {{ route.title }} |
          </router-link>
        <router-link v-if="route.children" v-for="child in route.children" :to="route.path + '/' + child.path" class="nav-link" active-class="active">
          {{ child.title }} |
          </router-link>
      </li>
    </ul>
  </div>
</template>
<template id="NOT_FOUND_PAGE">
  <div>
    not found!
    <router-link :to="{name: 'CURRENT_TODOS_PAGE'}">go back!</router-link>
  </div>
</template>

<script>


var store = new Vuex.Store({
  state: {
    todos: [],
    newTodo: ''
  },
  mutations: {
  GET_TODO(state, todo){
    state.newTodo =  todo
  },
  ADD_TODO(state){
    state.todos.push({
      body: state.newTodo,
      completed: false
    })
  },
    EDIT_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
    },
    REMOVE_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      
    },
    COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
    },
    CLEAR_TODO(state){
      state.newTodo = ''
    }
  },
  actions: {
    getTodo({commit}, todo){
      commit('GET_TODO', todo)
    },
    addTodo({commit}){
      commit('ADD_TODO')
    },
    editTodo({commit}, todo){
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo){
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
      commit('COMPLETE_TODO', todo)
    },
    clearTodo({commit}){
      commit('CLEAR_TODO')
    }
    
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
    completedTodos: state => state.todos.filter((todo) => {return todo.completed})
  }
  
})
var TODOS_PAGE = {
  template: '#TODOS_PAGE'
}
var CURRENT_TODOS_PAGE = {
  template: '#CURRENT_TODOS_PAGE',
  methods: {
    edit(todo){
      this.$store.dispatch('editTodo', todo)
    },
    complete(todo){
      this.$store.dispatch('completeTodo', todo)
    },
    remove(todo){
      this.$store.dispatch('removeTodo', todo)
    }
  },
  computed: {
    todos(){
      return this.$store.getters.todos
    }
  }
}
var COMPLETED_TODOS_PAGE = {
  template: '#COMPLETED_TODOS_PAGE',
  methods: {
    remove(todo){
      this.$store.dispatch('removeTodo', todo)
    }
  },
  computed: {
    completed(){
      return this.$store.getters.completedTodos
    }
  }
}
var CREATE_TODOS_PAGE = {
  template: '#CREATE_TODOS_PAGE',
  methods: {
    getTodo(e){
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo(){
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    }
  },
  computed: {
    newTodo(){
      return this.$store.getters.newTodo
    }
  }
}
var NOT_FOUND_PAGE = {
  template: '#NOT_FOUND_PAGE'
}
Vue.component('routing', {
  template: '#routing',
  computed: {
    routes: function () {
      var routes = [];
      for (var i in this.$router.options.routes) {
        if (!this.$router.options.routes.hasOwnProperty(i)) {
          continue
        }
        var route = this.$router.options.routes[i];
        if(route.hasOwnProperty('title')) {
          routes.push(route);
        }
      }
      return routes;
    }
  }
})


var routes = [
  { title: 'CURRENT TODOS', path: '/current-todos', component: TODOS_PAGE, children:[
    {name: 'CURRENT_TODOS_PAGE', title: 'TODOS', path: '', component: CURRENT_TODOS_PAGE},
    {name: 'CREATE_TODOS_PAGE', title: 'CREATE TODO', path: 'create', component: CREATE_TODOS_PAGE},
    {name: 'COMPLETED_TODOS_PAGE', title: 'COMPLETED TODOS', path: 'complete-todos', component: COMPLETED_TODOS_PAGE},
    ]},
  {path: '*', redirect: {path: '/current-todos' }}
  ];

var router = new VueRouter({
  routes // short for routes: routes
});
new Vue({
  store,
  router
}).$mount('#app')

</script>
