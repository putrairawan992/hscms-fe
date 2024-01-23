export const state = () => ({
    content: '',
    status: ''
})

export const mutations = {
    showMessage (state, payload) {
        state.content = payload.content
        state.status = payload.status
    }
}