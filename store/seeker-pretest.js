import { API } from '@/api/index'
import { useContext } from '@nuxtjs/composition-api'

export const state = () => ({
	page: null,
	preview: {},
	question: {},
	pretests: [],
	finish: null,
    job_id: null,
    module_id: null,
    category_id: null,
})

export const mutations = {
	setPage(state, page) {
		state.page = page;
        localStorage.setItem('JOB_SEEKER_PRETEST_PAGE', page);
	},
	setPretest(state, pretests) {
		state.pretests = pretests;
	},
	setPreview(state, preview) {
		state.preview = preview;
	},
	setQuestion(state, question) {
		state.question = question;
	},
    setJobID(state, job_id) {
		state.job_id = job_id;
        localStorage.setItem('JOB_SEEKER_JOB_ID', job_id);
	},
    setModuleID(state, module_id) {
		state.module_id = module_id;
        localStorage.setItem('JOB_SEEKER_MODULE_ID', module_id);
	},
    setCategoryID(state, category_id) {
		state.category_id = category_id;
        localStorage.setItem('JOB_SEEKER_CATEGORY_ID', category_id);
	},
    endPretest(state, finish_res) {
		state.job_id = null;
		state.module_id = null;
		state.category_id = null;
		state.finish = finish_res;
        localStorage.removeItem('JOB_SEEKER_JOB_ID');
        localStorage.removeItem('JOB_SEEKER_MODULE_ID');
        localStorage.removeItem('JOB_SEEKER_CATEGORY_ID');
	},
}

export const actions = {
	async getPretest(context) {
        const { getListPretest } = API();
        await getListPretest().then((result)=>{
            if(result){
                context.commit('setPretest', result);
            }
        })
	},
	async getPreview(context) {
        const { getPreview } = API();
        await getPreview(context.getters.job_id, context.getters.module_id).then((result)=>{
            if(result){
                context.commit('setPreview', result);
            }
        })
	},
	async getQuestion(context, page_number = 1) {
        const { getQuestionAPI } = API();
        await getQuestionAPI(context.getters.job_id, context.getters.module_id, page_number).then((result)=>{
            context.commit('setQuestion', result);
        })
	},
}

export const getters = {
	page: (state) => {
        let page = state.page;
        if(page == null){
            page = localStorage.getItem('JOB_SEEKER_PRETEST_PAGE');
        }
		return page;
	},
	job_id: (state) => {
        let job_id = state.job_id;
        if(job_id == null){
            job_id = localStorage.getItem('JOB_SEEKER_JOB_ID');
        }
		return job_id;
	},
	module_id: (state) => {
        let module_id = state.module_id;
        if(module_id == null){
            module_id = localStorage.getItem('JOB_SEEKER_MODULE_ID');
        }
		return module_id;
	},
	category_id: (state) => {
        let category_id = state.category_id;
        if(category_id == null){
            category_id = localStorage.getItem('JOB_SEEKER_CATEGORY_ID');
        }
		return category_id;
	},
}