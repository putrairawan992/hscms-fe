import { request } from '@/api/request'
import { useContext } from '@nuxtjs/composition-api'
import { jobProviderValidator } from '@/api/validator/jobProvider'

export const jobProviderAPI = () => {
    const { $api, $loader, $notifier } = useContext();
    const { jobPostValidator } = jobProviderValidator();
    const { getRequest ,postRequest, putRequest, deleteRequest } = request();
    
    const getJob = async (id_job) => {
        return await getRequest(id_job ? 'jobprovider/job/'+id_job : 'jobprovider/job', true);
    }
    const postJob = async (body, id_job) => {
        return await jobPostValidator(body) && postRequest(id_job ? 'jobprovider/job/'+id_job : 'jobprovider/job', body);
    }
    const deleteJob = async (id_job) => {
        return await deleteRequest('jobprovider/job/'+id_job);
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
    const postModule = async (body, id_pretest) => {
        return await postRequest('jobprovider/pretest/'+id_pretest, body);
    }
    const putModule = async (body, id_module) => {
        return await putRequest('jobprovider/pretest/'+id_module, body);
    }
    const deleteModule = async (id_module) => {
        return await putRequest('jobprovider/detailmodul/'+id_module);
    }
    const postActivateModule = async (body, id_job) => {
        return await postRequest('jobprovider/pickmoduldetail/'+id_job, body);
    }

    const getListJobOpening = async (sortBy='asc', status='Active') => {
        return await postRequest('jobprovider/listjob', {sort: sortBy, status: status});
    }

    // Talent Selection
    const getListCandidateAPI = async (body) => {
        return await postRequest('jobprovider/selection', body);
    }
    const postChooseCandidate = async (body) => {
        return await postRequest(`jobprovider/selection/choicecandidate`, body);
    }
    const getGrade = async (job_post_id) => {
        return await getRequest('jobprovider/grade/'+job_post_id);
    }
    const postGrade = async (body, job_post_id) => {
        return await postRequest('jobprovider/grade/'+job_post_id, body);
    }
    // Tahap 1
    const getDetailAnswerAPI = async (job_seeker_id, job_post_id, pretest_modul_detail_id) => {
        return await getRequest(`jobprovider/detailanswer/`+job_seeker_id+'/'+job_post_id+'/'+pretest_modul_detail_id);
    }
    const putInputScore = async (body,pretest_modul_detail_id) => {
        return await putRequest(`jobprovider/scoringanswer/`+pretest_modul_detail_id, body);
    }
    const postFinishScoring = async (body,pretest_modul_detail_id) => {
        return await postRequest(`jobprovider/finishscoringanswer/`+pretest_modul_detail_id, body);
    }
    // Tahap 2
    const getDetailJobSeeker = async (job_seeker_id) => {
        return await getRequest(`jobprovider/selection/user_detail/`+job_seeker_id);
    }
    // Tahap 3
    const getSchedule = async (job_post_id, month, year) => {
        return await getRequest('jobprovider/selection/scheduling/'+job_post_id+'/'+month+'/'+year);
    }
    const postSchedule = async (body) => {
        return await postRequest('jobprovider/selection/scheduling', body);
    }
    const postBlastSchedule = async (body, job_post_id) => {
        return await postRequest('jobprovider/blastinschedule/'+job_post_id, body);
    }
    // Tahap 4
    const getFormGrade = async (job_seeker_id, job_post_id) => {
        return await getRequest('jobprovider/selection/grade/'+job_seeker_id+'/'+job_post_id);
    }
    const getResultGrade = async (job_seeker_id, job_post_id) => {
        return await getRequest('jobprovider/selection/gradedetail/'+job_seeker_id+'/'+job_post_id);
    }
    const postFormGrade = async (body, job_seeker_id, job_post_id) => {
        return await postRequest('jobprovider/selection/grade/'+job_seeker_id+'/'+job_post_id, body);
    }
    const postLinkInterview = async (body, job_post_id) => {
        return await postRequest('jobprovider/selection/savelink/'+job_post_id, body);
    }
    const putAbstain = async (job_seeker_id, job_post_id) => {
        return await putRequest('jobprovider/selection/abstain/'+job_seeker_id+'/'+job_post_id);
    }
    // Tahap 5
    const postFinishSelection = async (body, job_post_id) => {
        return await postRequest('jobprovider/selection/finish/'+job_post_id, body);
    }


    // Employee Data
    const getEmployee = async (page, file, file_status, employee_status) => {
        let param = '?';
        if(file != null && file != 'Semua'){ param = param + 'file='+file+'&' };
        if(file_status != null && file_status != 'Semua'){ param = param + 'file_status='+file_status+'&' };
        if(employee_status != null && employee_status != 'Semua'){ param = param + 'employee_status='+employee_status };
        return await getRequest('jobprovider/employee/' +page + param);
    }
    const getEmployeeDetail = async (employee_id) => {
        return await getRequest('jobprovider/employeedetail/' +employee_id);
    }



    return {
        getJob,
        postJob,
        deleteJob,
        postPostingJob,

        getPretest,
        postPretest,
        deletePretest,
        postActivatePretest,

        getModule,
        getModules,
        postModule,
        putModule,
        deleteModule,
        postActivateModule,

        getListJobOpening,
        getListCandidateAPI,
        getDetailAnswerAPI,
        putInputScore,
        postFinishScoring,
        postChooseCandidate,
        getDetailJobSeeker,
        getGrade,
        postGrade,
        getSchedule,
        postSchedule,
        postBlastSchedule,

        getFormGrade,
        getResultGrade,
        postFormGrade,
        postLinkInterview,
        putAbstain,
        postFinishSelection,

        getEmployee,
        getEmployeeDetail,
    }
}
