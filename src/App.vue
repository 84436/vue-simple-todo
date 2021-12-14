<template>
    <search-box />
    <add-box />
    <todo-list :todos="todos"/>
</template>

<script>
import "./assets/global.css";
import SearchBox from "./components/SearchBox.vue";
import AddBox from "./components/AddBox.vue";
import TodoList from "./components/TodoList.vue";
import { mapGetters } from "vuex";

export default {
    components: { SearchBox, AddBox, TodoList },
    computed: {
        ...mapGetters(["todos"]),
    },
    mounted() {
        console.log(this.todos);
    },
};
</script>
