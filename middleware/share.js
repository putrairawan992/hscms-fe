export default ({ store, redirect, params }) => {
    if (store.state.auth.loggedIn == true) {
        return redirect('/job/'+params.id)
    }else{
        return redirect('/job/share/'+params.id)
    }
}