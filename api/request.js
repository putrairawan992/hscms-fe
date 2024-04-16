import { useContext } from '@nuxtjs/composition-api'

export const request = () => {
    const { $api, $loader, $notifier } = useContext();

    const getRequest = async (endpoint, doubleData, responseType) => {
        if(responseType){ $loader.showLoading({ show: true }); };
        const result = await $api.get(endpoint, {responseType: responseType ? responseType : 'json',}).catch((err) => {
            $notifier.showMessage({ content: err.response?.data?.message ? err.response.data.message : err, status: 'warning' });
            $loader.showLoading({ show: false });
        });

        if(responseType){console.log('result', result);}
        
        $loader.showLoading({ show: false });
        if(doubleData){
            return result ? result : [];
        }else{
            return result ? result.data : [];
        }
    }
    const putRequest = async (endpoint, body) => {
        $loader.showLoading({ show: true });
        const result = await $api.put(endpoint, body).catch((err) => {
            $notifier.showMessage({ content: err.response?.data?.error_validate ? err.response.data.error_validate[0].validate : err.response.data.message, status: 'warning' });
            $loader.showLoading({ show: false });
        });
        $loader.showLoading({ show: false });
        return result ? result : false;
    }
    const postRequest = async (endpoint, body, multipleError) => {
        $loader.showLoading({ show: true });
        const result = await $api.post(endpoint, body).catch((err) => {
            console.log('postRequest', err.response?.data);
            if(multipleError){
                $notifier.showMessage({ content: err.response?.data?.error_validate ? err.response.data.error_validate[0].validate : err.response.data.message[0].error, status: 'warning' });
            }else{
                $notifier.showMessage({ content: err.response?.data?.error_validate ? err.response.data.error_validate[0].validate : err.response.data.message, status: 'warning' });
            }
            $loader.showLoading({ show: false });
        });
        $loader.showLoading({ show: false });
        return result ? result : false;
    }
    const deleteRequest = async (endpoint, body) => {
        $loader.showLoading({ show: true });
        const result = await $api.delete(endpoint, body).catch((err) => {
            $notifier.showMessage({ content: err.response?.data?.error_validate ? err.response.data.error_validate[0].validate : err.response.data.message, status: 'warning' });
            $loader.showLoading({ show: false });
        });
        $loader.showLoading({ show: false });
        return result ? true : false;
    }

    return {
        getRequest,
        putRequest,
        postRequest,
        deleteRequest
    }
}
