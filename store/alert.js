export const state = () => ({
    show: '',
    content: ''
})

export const mutations = {
    showAlert (state, payload) {
        state.show = payload.show;
        state.content = payload.content;
    }
}