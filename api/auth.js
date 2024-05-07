import { request } from '@/api/request'
import { useContext } from '@nuxtjs/composition-api'
import { authValidator } from '@/api/validator/auth'

export const authAPI = () => {
    const { registerValidator } = authValidator();
    const { getRequest ,postRequest } = request();
    const { $api, $loader, $notifier } = useContext();
    
    const getRegistrationData = async () => {
        return await getRequest('auth/registration_master');
    }
    const getRegistration = async (id_registration) => {
        return await getRequest(id_registration ? 'auth/registration/'+id_registration : 'auth/registration');
    }
    const postRegistration = async (body, id_registration) => {
        return await postRequest(id_registration ? 'auth/registration/'+id_registration : 'auth/registration', body);
    }

    return {
        getRegistration,
        postRegistration,
        getRegistrationData,
    }
}
