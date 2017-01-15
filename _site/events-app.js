Vue.component('item-element', {
  template: '\
    <li>\
      {{ item }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['item']
})

new Vue({
  el: '#items-list',
  data: {
    numbers: [ 1, 88, 200, 33, 4, 5, 6, 8 ],
    item: '',
    itemsList: [
      { day: '678', name: 'ruvido'},
      { day: '456', name: 'baba'},
      { day: '01', name: 'saix'}
    ]
  },
  computed: {
    sortNumbers: function () {
      return this.itemsList.sort(function(a, b) {
        return a.day - b.day;
      })
    }
  },
  methods: {
    // sortItem: function () {
    //   this.sort(function(a, b) {
    //     return a.distance - b.distance;
    //   })
    // }
    addItem: function () {
      // this.itemsList.push(this.item)
      this.itemsList.push({day: this.dayitem, name: this.nameitem})
      this.dayitem = ''
      this.nameitem = ''
    }
  }
})

// var caz = new Vue {(
//   el: "#caz",
//   data: {
//     numbers: [ 1, 2, 3, 4, 5 ]
//   },
//   computed: {
//     evenNumbers: function () {
//       return this.numbers.filter(function (number) {
//         return number % 2 === 0
//       })
//     }
//   }
// )}
