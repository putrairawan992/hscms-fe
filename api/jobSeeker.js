import { request } from '@/api/request'
import { useContext } from '@nuxtjs/composition-api'
import { jobProviderValidator } from '@/api/validator/jobProvider'

export const jobSeekerAPI = () => {
    const { $api, $loader, $notifier } = useContext();
    const { jobPostValidator } = jobProviderValidator();
    const { getRequest ,postRequest, deleteRequest, putRequest } = request();
    
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

    // Schedule
    const getTimeSchedule = async (job_post_id, date) => {
        return await getRequest('jobseeker/scheduletime/'+job_post_id+'?date='+date);
    }
    const getDateSchedule = async (month, year, job_post_id) => {
        return await getRequest('jobseeker/schedule/'+month+'/'+year+'/'+job_post_id);
    }
    const postPickSchedule = async (body) => {
        return await postRequest('jobseeker/schedule', body);
    }

    // Biodata
    const getBiodata = async () => {
        return await getRequest(`jobseeker/biodata`);
    }
    const putBiodata = async (body) => {
        return await putRequest(`jobseeker/biodata`, body);
    }

    // File Attachment
    const getFileAttachment = async () => {
        return await getRequest(`jobseeker/file_attachment`);
    }
    const putReuploadAttachment = async (body, type_attachment) => {
        return await putRequest(`jobseeker/file_attachment/`+type_attachment, body);
    }
    const downloadFileAttachment= async (type_attachment) => {
        return await getRequest(`jobseeker/file_attachment_download/`+type_attachment, true, 'arraybuffer');
    }


    return {
        getJobs,
        postApplyJob,

        getListPretest,
        getPreview,
        getQuestionAPI,
        postAnswerAPI,
        postEndTest,

        getTimeSchedule,
        getDateSchedule,
        postPickSchedule,
        getBiodata,
        putBiodata,

        getFileAttachment,
        putReuploadAttachment,
        downloadFileAttachment,

    }
}
