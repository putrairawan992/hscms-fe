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
    } = jobSeekerAPI();

    const {
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

        // jobProviderAPI
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
