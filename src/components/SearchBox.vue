<template>
    <div class="card" id="omnibox-container">
        <input
            type="text"
            id="omnibox"
            placeholder="Gõ tại đây để search &bull; Nhấn Esc = clear thanh search"
            v-model="currentContent"
            @keyup="keyboardHandler"
        />
        <input type="button" value="Xóa todo đã xong" @click="handleClearDone" />
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            currentContent: "",
        };
    },
    
    watch: {
        currentContent(newVal, oldVal) {
            this.searchTodo(this.currentContent);
        },
    },

    methods: {
        ...mapActions(["searchTodo", "deleteDoneTodo"]),

        clearContent() {
            this.currentContent = "";
        },

        keyboardHandler(event) {
            switch (event.key) {
                case "Escape":
                    this.clearContent();
                    break;
            }
        },

        handleClearDone() {
            this.deleteDoneTodo();
        }
    },
};
</script>
