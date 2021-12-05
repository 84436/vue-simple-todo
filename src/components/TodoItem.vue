<template>
    <div class="todo-item">
            <input type="checkbox" class="item-done" v-model="this._done">
        <input type="text" class="item-content" v-model="this._content">
        <input type="button" value="Remove" @click="emitRemove">
    </div>
</template>

<script>
export default {
    props: ["id", "content", "done"],
    data() {
        return {
            _id: this.id,
            _content: this.content,
            _done: this.done
        }
    },
    watch: {
        _content: function() {this.emitUpdate()},
        _done: function() {this.emitUpdate()}
    },
    methods: {
        emitUpdate() {
            this.$emit("todo-update", {
                id: this._id,
                content: this._content,
                done: this._done
            })
        },
        emitRemove() {
            this.$emit("todo-remove", this._id)
        }
    },
}
</script>
