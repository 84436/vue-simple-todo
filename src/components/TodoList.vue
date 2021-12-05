<template>
    <div id="todo-list" class="card">
        <TodoItem v-for="todo in todos"
            :id="todo.id" :content="todo.content" :done="todo.done"
            :key="todo.id" @todo-update="relayEmitUpdate" @todo-remove="relayEmitRemove" />
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    props: ["todos"],
    components: {TodoItem},
    data() {
        return {}
    },
    methods: {
        relayEmitUpdate(data) {
            this.$emit("todo-update-2", data)
        },
        relayEmitRemove(id) {
            this.$emit("todo-remove-2", id)
        }
    },
    computed: {}
}
</script>
