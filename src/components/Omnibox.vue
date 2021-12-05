<template>
    <div class="card" id="omnibox-container">
        <input type="text" ref="omniboxInput" id="omnibox" placeholder="Type here to search &bull; Press Enter to add" v-model="currentContent" @keyup="keyboardHandler">
        <input type="button" value="Add" @click="emitAdd">
        <input type="button" value="Clear Done" @click="emitRemoveDone">
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentContent: ""
        }
    },
    watch: {
        currentContent(newVal, oldVal) {
            this.$emit("todo-search", newVal)
        }
    },
    methods: {
        keyboardHandler(event) {
            switch(event.key) {
                case "Enter":
                    this.emitAdd()
                    break;
                case "Escape":
                    this.currentContent = ""
                    break;
            }
        },
        emitAdd() {
            if (this.currentContent.trim().length > 0) {
                this.$emit("todo-add", this.currentContent)
            }
        },
        emitRemoveDone() {
            this.$emit("todo-clear-done")
        }
    },
}
</script>
