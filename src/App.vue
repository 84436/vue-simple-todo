<template>
    <Omnibox @todo-search="filterTodo" @todo-add="addTodo" @todo-clear-done="removeDoneTodo"/>
    <TodoList :todos="todos" @todo-update-2="updateTodo" @todo-remove-2="removeTodo" />
</template>

<script>
import Omnibox from "./components/Omnibox.vue"
import TodoList from "./components/TodoList.vue"
import { uniqueId, update, findIndex } from "lodash-es"
import "./assets/global.css"

export default {
    components: {Omnibox, TodoList},
    data() {
        return {
            searchQuery: '',
            originalTodos: [
                { id: uniqueId(), content: "Learn Vue", done: true },
                { id: uniqueId(), content: "Learn Vuetify", done: false },
                { id: uniqueId(), content: "Learn Vuex", done: false },
                { id: uniqueId(), content: "Try to get 6h-8h of sleep", done: true },
                { id: uniqueId(), content: "Write presentation", done: false }
            ]
        }
    },
    computed: {
        todos: function() {
            return this.originalTodos.filter(
                each => each.content.toLowerCase().includes(
                    this.searchQuery.toLowerCase()
                )
            )
        }
    },
    methods: {
        filterTodo(query) {
            this.searchQuery = query
        },
        addTodo(content) {
            let nextId = uniqueId()
            this.originalTodos.push({
                id: nextId,
                content: content,
                done: false
            })
        },
        updateTodo(data) {
            const {id, content, done} = data
            const targetItem = findIndex(this.originalTodos, each => each.id === id)
            this.originalTodos.splice(targetItem, 1, { id, content, done })
        },
        removeTodo(id) {
            this.originalTodos = this.originalTodos.filter(each => each.id !== id)
        },
        removeDoneTodo() {
            this.originalTodos = this.originalTodos.filter(each => each.done !== true)
        }
    },
    mounted() {
        // TODO replace this hack with something more elegant
        document.querySelector('#omnibox').focus()
    }
}
</script>
