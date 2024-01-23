import { request } from '@/api/request'
import { useContext } from '@nuxtjs/composition-api'
import { jobProviderValidator } from '@/api/validator/jobProvider'

export const jobProviderAPI = () => {
    const { $api, $loader, $notifier } = useContext();
    const { jobPostValidator } = jobProviderValidator();
    const { getRequest ,postRequest, deleteRequest } = request();
    
    const getJob = async (id_job) => {
        return await getRequest(id_job ? 'jobprovider/job/'+id_job : 'jobprovider/job', true);
    }
    const postJob = async (body, id_job) => {
        return await jobPostValidator(body) && postRequest(id_job ? 'jobprovider/job/'+id_job : 'jobprovider/job', body);
    }
    const postPostingJob = async (body, id_job) => {
        return await postRequest('jobprovider/job/posting/'+id_job, body);
    }

    const getPretest = async (id_job) => {
        return await getRequest('jobprovider/modul/'+id_job, true);
    }
    const postPretest = async (body, id_pretest) => {
        return await postRequest(id_pretest ? 'jobprovider/modul/'+id_pretest : 'jobprovider/modul/', body);
    }
    const deletePretest= async (id_pretest) => {
        return await deleteRequest('jobprovider/modul/'+id_pretest);
    }
    const postActivatePretest = async (body, id_job) => {
        return await postRequest('jobprovider/pickmodul/'+id_job, body);
    }

    const getModule = async (id_module) => {
        return await getRequest(id_module ? 'jobprovider/pretest/'+id_module : 'jobprovider/pretest', true);
    }
    const getModules = async (id_pretest) => {
        return await getRequest('jobprovider/detailmodul/'+id_pretest);
    }
    const postModule = async (body, id_module) => {
        return await postRequest('jobprovider/pretest/'+id_module, body);
    }
    const deleteModule = async (id_module) => {
        return await deleteRequest('jobprovider/detailmodul/'+id_module);
    }
    const postActivateModule = async (body, id_job) => {
        return await postRequest('jobprovider/pickmoduldetail/'+id_job, body);
    }

    return {
        getJob,
        postJob,
        postPostingJob,

        getPretest,
        postPretest,
        deletePretest,
        postActivatePretest,

        getModule,
        getModules,
        postModule,
        deleteModule,
        postActivateModule
    }
}
