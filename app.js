Vue.component('item-element', {
  template: '\
    <li>\
      {{ text }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['text']
})
new Vue({
  el: '#items-list',
  data: {
    item: '',
    itemsList: [
      'uno',
      'due',
      'tre'
    ]
  },
  methods: {
    addItem: function () {
      this.itemsList.push(this.item)
      this.item = ''
    }
  }
})


// TODO-----------------------------------
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})
new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      'Do the dishes',
      'Take out the trash',
      'Mow the lawn'
    ]
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
})
