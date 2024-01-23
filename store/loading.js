export const state = () => ({
    show: ''
})

export const mutations = {
    showLoading (state, payload) {
        state.show = payload.show
    }
}