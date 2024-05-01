import { authAPI } from '@/api/auth'
import { jobSeekerAPI } from '@/api/jobSeeker'
import { jobProviderAPI } from '@/api/jobProvider'

export const API = () => {
    const {
        getRegistration,
        postRegistration,
    } = authAPI();

    const {
        getJobs,
        postApplyJob,

        getListPretest,
        getPreview,
        getQuestionAPI,
        postAnswerAPI,
        postEndTest,

        getTimeSchedule,
        getDateSchedule,
        postPickSchedule
    } = jobSeekerAPI();

    const {
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
    } = jobProviderAPI();
    

    return {
        // authAPI
            getRegistration,
            postRegistration,



        // jobSeekerAPI
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



        // jobProviderAPI
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
    }
}
