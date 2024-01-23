import { request } from '@/api/request'
import { useContext } from '@nuxtjs/composition-api'
import { jobProviderValidator } from '@/api/validator/jobProvider'

export const jobSeekerAPI = () => {
    const { $api, $loader, $notifier } = useContext();
    const { jobPostValidator } = jobProviderValidator();
    const { getRequest ,postRequest, deleteRequest } = request();
    
    const getJobs = async () => {
        return await getRequest('jobseeker/job');
    }
    const postApplyJob = async (job_id) => {
        return await postRequest('jobseeker/apply/'+job_id);
    }

    const getListPretest = async () => {
        return await getRequest('jobseeker/getpretest');
    }
    const getPreview = async (job_id, module_id) => {
        return await getRequest('jobseeker/previewquestion/'+job_id+'/'+module_id);
    }
    const getQuestionAPI = async (job_id, module_id, page_number) => {
        return await getRequest('jobseeker/getquestion/'+page_number+'/'+job_id+'/'+module_id);
    }
    const postAnswerAPI = async (body, module_id) => {
        return await postRequest('jobseeker/answer/'+module_id, body);
    }
    const postEndTest = async (job_id, module_id) => {
        return await postRequest('jobseeker/answerfinish/'+job_id+'/'+module_id);
    }

    return {
        getJobs,
        postApplyJob,

        getListPretest,
        getPreview,
        getQuestionAPI,
        postAnswerAPI,
        postEndTest,
    }
}
