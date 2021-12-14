import { uniqueId, findIndex } from "lodash";
import { createStore } from "vuex";

export default createStore({
    // Tương tự "data" trong Vue component
    state: {
        searchQuery: "",
        allTodos: [
            { id: uniqueId(), content: "Học Vue", done: true },
            { id: uniqueId(), content: "Học Vuex", done: true },
            { id: uniqueId(), content: "Tìm hiểu React", done: false },
            { id: uniqueId(), content: "Tìm hiểu Vue", done: false },
            { id: uniqueId(), content: "Tìm hiểu Svelte", done: false },
            { id: uniqueId(), content: "Đi ngủ 💤", done: true },
            { id: uniqueId(), content: "Viết bài thuyết trình", done: true },
        ],
    },

    // Tương tự "computed" trong Vue component
    getters: {
        todos: (state, getters) => {
            return state.allTodos.filter(each =>
                each.content.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        }
    },

    // Actions commit Mutations
    actions: {
        // Thực tế: rã context ra lấy commit() cho nhanh
        searchTodo(context, payload) {
            // Thực tế: đặt tên mutation giống như action
            const mutationName = "searchTodoMutation";
            context.commit(mutationName, payload);
        },

        addTodo({ commit }, payload) {
            commit("addTodo", payload);
        },
        updateTodo({ commit }, payload) {
            commit("updateTodo", payload);
        },
        deleteTodo({ commit }, payload) {
            commit("deleteTodo", payload);
        },
        deleteDoneTodo({ commit }) {
            commit("deleteDoneTodo");
        },
    },

    // Mutations "mutate" state
    mutations: {
        searchTodoMutation(state, query) {
            state.searchQuery = query;
        },
        addTodo(state, content) {
            state.allTodos.unshift({ // unshift = insert at index 0
                id: uniqueId(),
                content,
                done: false,
            });
        },
        updateTodo(state, payload) {
            const targetIndex = findIndex(state.allTodos, each => each.id === payload.id);
            console.log(targetIndex);
            // Giả sử payload có chính xác {id, content, done}
            state.allTodos.splice(targetIndex, 1, payload);
        },
        deleteTodo(state, id) {
            state.allTodos = state.allTodos.filter(each => each.id !== id);
        },
        deleteDoneTodo(state) {
            state.allTodos = state.allTodos.filter(each => each.done !== true);
        },
    },
});
