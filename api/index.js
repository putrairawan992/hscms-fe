import { authAPI } from '@/api/auth'
import { jobSeekerAPI } from '@/api/jobSeeker'
import { jobProviderAPI } from '@/api/jobProvider'

export const API = () => {
    const {
        getRegistration,
        postRegistration,
        getRegistrationData,
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
        postPickSchedule,
        getBiodata,
        putBiodata,

        getFileAttachment,
        putReuploadAttachment,
        downloadFileAttachment,

        getContract,
        downloadFileContract,
        postUploadContract
    } = jobSeekerAPI();

    const {
        getDashboard,
        getProfile,
        putUpdateProfile,
        getHelpCenter,
        getListNotification,
        putReadNotification,

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
    } = jobProviderAPI();
    

    return {
        // authAPI
            getRegistration,
            postRegistration,
            getRegistrationData,



        // jobSeekerAPI
            getProfile,
            putUpdateProfile,
            getJobs,
            postApplyJob,
            getListNotification,
            putReadNotification,

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

            getContract,
            downloadFileContract,
            postUploadContract,



        // jobProviderAPI
            getDashboard,
            getHelpCenter,

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
