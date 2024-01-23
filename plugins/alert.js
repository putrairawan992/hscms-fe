export default ({ app, store }, inject) => {
    inject('alert', {
            showAlert ({ show = '', content = '' }) {
            store.commit('alert/showAlert', { show, content })
        }
    })
}