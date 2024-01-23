import { useContext } from '@nuxtjs/composition-api'

export const authValidator = () => {
    const { $notifier } = useContext()

    const loginValidator =  (body) => {
        if(body.email == ""){ return $notifier.showMessage({ content: 'Email belum terisi.', status: 'warning' }) }
        if(body.password == ""){  return $notifier.showMessage({ content: 'Email belum terisi.', status: 'warning' }) }
        return true;
    }

    return {
        loginValidator,
    }
}
