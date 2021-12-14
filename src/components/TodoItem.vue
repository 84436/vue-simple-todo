<template>
    <div class="todo-item">
        <input type="checkbox" class="item-done" v-model="this._done" />
        <input type="text" class="item-content" v-model="this._content" />
        <input type="button" value="Xóa" @click="handleDelete" />
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    // Props KHÔNG THỂ (đúng hơn là KHÔNG NÊN) thay đổi;
    // Để thay đổi, map về một biến khác trong data.
    props: ["id", "content", "done"],
    data() {
        return {
            _content: this.content,
            _done: this.done,
        };
    },

    watch: {
        _content: function () {
            this.handleUpdate();
        },
        _done: function () {
            this.handleUpdate();
        },
    },

    methods: {
        ...mapActions(["updateTodo", "deleteTodo"]),
        
        handleUpdate() {
            this.updateTodo({
                id: this.id,
                content: this._content,
                done: this._done,
            });
        },

        handleDelete() {
            this.deleteTodo(this.id);
        },
    },
};
</script>
