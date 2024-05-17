import { request } from '@/api/request'
import { useContext } from '@nuxtjs/composition-api'
import { jobProviderValidator } from '@/api/validator/jobProvider'

export const jobProviderAPI = () => {
    const { $api, $auth, $notifier } = useContext();
    const { jobPostValidator } = jobProviderValidator();
    const { getRequest ,postRequest, putRequest, deleteRequest } = request();
    
    const getProfile = async () => {
        return await getRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/profile' :
            'jobseeker/profile' 
        );
    }
    const putUpdateProfile = async (body) => {
        console.log('body',body);
        return await putRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/profile' :
            'jobseeker/profile' , body
        );
    }
    const getHelpCenter = async () => {
        return await getRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/help_center' :
            'jobseeker/help_center' 
        );
    }
    const getListNotification = async () => {
        return await getRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/notification' :
            'jobseeker/notification' 
        );
    }

    const getJob = async (id_job) => {
        return await getRequest(id_job ? 'jobprovider/job/'+id_job : 'jobprovider/job', true);
    }
    const postJob = async (body, id_job) => {
        return await jobPostValidator(body) && postRequest(id_job ? 'jobprovider/job/'+id_job : 'jobprovider/job', body);
    }
    const putJob = async (body, id_job) => {
        return await jobPostValidator(body) && putRequest('jobprovider/job/'+id_job, body);
    }
    const deleteJob = async (id_job) => {
        return await deleteRequest('jobprovider/job/'+id_job);
    }
    const postPostingJob = async (body, id_job) => {
        return await postRequest('jobprovider/job/posting/'+id_job, body);
    }

    const geSharedJob = async (id_job) => {
        return await getRequest('jobprovider/sharejob/'+id_job, true);
    }
    const geCategoryJob = async (category) => {
        return await getRequest('jobprovider/category_job/'+category);
    }

    const getPretest = async (id_job) => {
        return await getRequest('jobprovider/modul/'+id_job, true);
    }
    const postPretest = async (body, id_pretest) => {
        return await postRequest(id_pretest ? 'jobprovider/modul/'+id_pretest : 'jobprovider/modul/', body);
    }
    const deletePretest= async (id_pretest) => {
        return await putRequest('jobprovider/modul/'+id_pretest);
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

    const getListJobOpening = async (sortBy, status, id_job) => {
        return await postRequest( id_job ? 'jobprovider/listjob/'+id_job : 'jobprovider/listjob/', {sort: sortBy, status: status});
    }
    const putUnactiveJobOpening = async (id_job) => {
        return await putRequest('jobprovider/unactive_job/'+id_job,);
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
    const getFileAnswer = async (apply_job_answer_id) => {
        return await getRequest(`jobprovider/selection/file_answer/`+apply_job_answer_id, true, 'arraybuffer');
    }
    const putInputScore = async (body, pretest_modul_detail_id) => {
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
        return await postRequest('jobprovider/selection/finish/'+job_post_id, body, true);
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
    const getEmployeeDataPDF = async (employee_id) => {
        return await getRequest('jobprovider/pdf/employee/' +employee_id, true, 'arraybuffer');
    }
    const getEmployeeDataCSV = async () => {
        return await getRequest('jobprovider/download/employee', true, 'arraybuffer');
    }
    const getEmployeeDataZIP = async () => {
        return await getRequest('jobprovider/compress/employee', true, 'arraybuffer');
    }


    // Remuneration
    const getRemuneration = async (remuneration_id, employee_name) => {
        let param = '?';
        if(employee_name != null){ param = param + 'employee_name='+employee_name };

        return await getRequest(
            remuneration_id ? 
            'jobprovider/remuneration/'+remuneration_id + param :
            'jobprovider/remuneration/' + param 
        );
    }
    const getRemunerationDetail = async (remuneration_detail_id) => {
        return await getRequest('jobprovider/remuneration/detail/' + remuneration_detail_id);
    }
    const getRemunerationByStatus = async (status) => {
        let param = '?';
        if(status != null){ param = param + 'status='+status };
        return await getRequest('jobprovider/remuneration_status/' + param);
    }
    const getListEmployee = async (remuneration_id, employee_name) => {
        let param = '?';
        if(employee_name != null){ param = param + 'employee_name='+employee_name + '&' };
        if(remuneration_id != null){ param = param + 'batch_remuneration_id='+remuneration_id };
        return await getRequest('jobprovider/remuneration/employee' + param);
    }
    const postPickEmployee = async (body, remuneration_id) => {
        return await postRequest(
            remuneration_id ? 
                'jobprovider/remuneration/pick_employee/'+remuneration_id :
                'jobprovider/remuneration/pick_employee'
            , body);
    }
    const putDetailRemuneration = async (body, remuneration_detail_id) => {
        return await putRequest('jobprovider/remuneration/employee/'+remuneration_detail_id, body);
    }
    const putRemunerationRequestType = async (body, remuneration_detail_id) => {
        return await putRequest('jobprovider/remuneration/request_type/'+remuneration_detail_id, body);
    }
    const deleteListEmployee = async (employee_id) => {
        return await deleteRequest('jobprovider/remuneration/employee/'+employee_id);
    }
    const getAttachment = async (remuneration_id) => {
        return await getRequest('jobprovider/remuneration/attachment/'+remuneration_id);
    }
    const postAttachment = async (body, attachment_id) => {
        return await postRequest('jobprovider/remuneration/attachment/'+attachment_id, body);
    }
    const deleteAttachment = async (attachment_id) => {
        return await deleteRequest('jobprovider/remuneration/attachment/'+attachment_id);
    }
    const postCreateSimulation = async (remuneration_id) => {
        return await postRequest('jobprovider/simulation/'+remuneration_id);
    }
    const getDownloadSimulation = async (remuneration_id) => {
        return await getRequest('jobprovider/downloadsimulation/'+remuneration_id, true, 'arraybuffer');
    }
    const postRequestApproval = async (remuneration_id) => {
        return await postRequest('jobprovider/remuneration/request/'+remuneration_id);
    }
    const postRemunerationRecreate = async (remuneration_id) => {
        return await postRequest('jobprovider/remuneration/recreate/'+remuneration_id);
    }
    const deleteRemuneration = async (remuneration_id) => {
        return await deleteRequest('jobprovider/remuneration/'+remuneration_id);
    }

    // inbox
    const getListEmployeeInbox = async () => {
        return await getRequest('jobprovider/inbox/listemployee');
    }
    const getListMessage = async () => {
        return await getRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/inbox' :
            'jobseeker/inbox'
        );
    }
    const getDetailMessage = async (message_id) => {
        return await getRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/detail_inbox/' + message_id :
            'jobseeker/detail_inbox/' + message_id
        );
    }
    const getMessageAttachment = async (detail_message_id) => {
        return await getRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/inbox/download_file/' + detail_message_id :
            'jobseeker/inbox/download_file/' + detail_message_id, true, 'arraybuffer'
        );
    }
    const postCreateMessage = async (body) => {
        return await postRequest('jobprovider/inboxcreate', body);
    }
    const postReplyMessage = async (body, message_id) => {
        return await postRequest(
            $auth.user.role_user == 'jobprovider' ?
            'jobprovider/inbox/' + message_id :
            'jobseeker/inbox/' + message_id 
        , body);
    }

    // Non Selection
    const getDownloadTemplate = async () => {
        return await getRequest('jobprovider/nonselection/template_download', true, 'arraybuffer');
    }
    const postUploadTemplate = async (body) => {
        return await postRequest('jobprovider/nonselection/template_upload', body);
    }
    const postCreateQuestion = async (body, job_post_id) => {
        return await postRequest('jobprovider/nonselection/create_question/'+job_post_id, body);
    }
    const getListEmployeeNS = async (step) => {
        let param = '?';
        if(step != null){ param = param + 'status_step='+step };
        return await getRequest('jobprovider/nonselection/employee_list' + param);
    }
    const postReminder = async (body) => {
        console.log('postReminder', body);
        return await postRequest('jobprovider/nonselection/reminder', body);
    }
    const deleteListEmployeeNS = async (body) => {
        console.log('deleteListEmployeeNS', body);
        return await deleteRequest('jobprovider/nonselection/employee_list', {
            "employee_id":["bwIGimRMiPCpfjd2qhmDq"]
        });
    }
    const postContinueNS = async (body) => {
        return await postRequest('jobprovider/nonselection/nextstep', body);
    }
    const postFinishNS = async (body) => {
        return await postRequest('jobprovider/nonselection/finishstep', body);
    }


    return {
        getProfile,
        putUpdateProfile,
        getHelpCenter,
        getListNotification,

        getJob,
        postJob,
        putJob,
        deleteJob,
        postPostingJob,
        geSharedJob,
        geCategoryJob,

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
        putUnactiveJobOpening,
        getListCandidateAPI,
        getDetailAnswerAPI,
        getFileAnswer,
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
        getEmployeeDataPDF,
        getEmployeeDataCSV,
        getEmployeeDataZIP,

        getRemuneration,
        getRemunerationDetail,
        getListEmployee,
        postPickEmployee,
        deleteListEmployee,
        getRemunerationByStatus,
        putDetailRemuneration,
        putRemunerationRequestType,
        getAttachment,
        postAttachment,
        deleteAttachment,
        postCreateSimulation,
        getDownloadSimulation,
        postRequestApproval,
        postRemunerationRecreate,
        deleteRemuneration,

        getListMessage,
        getDetailMessage,
        postReplyMessage,
        postCreateMessage,
        getListEmployeeInbox,
        getMessageAttachment,

        getDownloadTemplate,
        postUploadTemplate,
        postCreateQuestion,
        getListEmployeeNS,
        postReminder,
        deleteListEmployeeNS,
        postContinueNS,
        postFinishNS
    }
}
