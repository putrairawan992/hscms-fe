const helper = {
    ping(value) {
        
    }
}

export default ({ app }, inject) => {
    inject('helper', helper)
}