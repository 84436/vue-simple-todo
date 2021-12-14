<template>
    <div id="todo-list" class="card">
        <div id="todo-list-empty-placeholder" v-show="todos.length === 0">(danh sách trống)</div>
        <todo-item
            v-for="todo in todos"
            :id="todo.id"
            :content="todo.content"
            :done="todo.done"
            :key="todo.id"
        />
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    props: ["todos"],
    components: { TodoItem },
};
</script>
