<template>
    <div class="card" id="omnibox-container">
        <input
            type="text"
            id="omnibox"
            placeholder="Gõ tại đây để thêm todo &bull; Nhấn Enter = nhấn nút Thêm"
            v-model="currentContent"
            @keyup="keyboardHandler"
        />
        <input type="button" value="Thêm" @click="handleAdd" />
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

    methods: {
        ...mapActions(["addTodo"]),

        clearContent() {
            this.currentContent = "";
        },

        keyboardHandler(event) {
            switch (event.key) {
                case "Enter":
                    this.handleAdd();
                    break;
                case "Escape":
                    this.clearContent();
                    break;
            }
        },

        handleAdd() {
            if (this.currentContent.trim().length > 0) {
                this.addTodo(this.currentContent);
            }
            this.clearContent();
        },
    },
};
</script>
