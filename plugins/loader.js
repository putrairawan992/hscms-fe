export default ({ app, store }, inject) => {
    inject('loader', {
            showLoading ({ show = '' }) {
            store.commit('loading/showLoading', { show })
        }
    })
}