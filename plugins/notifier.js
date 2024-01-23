export default ({ app, store }, inject) => {
    inject('notifier', {
            showMessage ({ content = '', status = '' }) {
            store.commit('snackbar/showMessage', { content, status })
        }
    })
}