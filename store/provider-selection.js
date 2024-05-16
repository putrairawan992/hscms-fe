import { API } from '@/api/index'
import { useContext } from '@nuxtjs/composition-api'

export const state = () => ({
    jobOpening: [],
    listCandidate: [],
    detailAnswer: null,
	tahapanNonSeleksi: {tahap: null, detail: null},
	tahapan: {tahap: null, jobSelected: null, detail: null},
})

export const mutations = {
	setTahapan(state, data) {
		state.tahapan = data;
        localStorage.setItem('JOB_PROVIDER_TAHAPAN_SELECTION', JSON.stringify(data));
	},
	setTahapanNonSeleksi(state, data) {
		state.tahapanNonSeleksi = data;
        localStorage.setItem('JOB_PROVIDER_TAHAPAN_NON_SELECTION', JSON.stringify(data));
	},
	setJobOpening(state, data) {
		state.jobOpening = data;
	},
	setListCandidate(state, data) {
		state.listCandidate = data;
	},
	setDetailAnswer(state, data) {
		state.detailAnswer = data;
	},
}

export const actions = {
	async getJobOpening(context) {
        const { getListJobOpening } = API();
        await getListJobOpening().then((result)=>{
            if(result){
                context.commit('setJobOpening', result.data);
            }
        })
	},
	async getListCandidate(context) {
        const { getListCandidateAPI } = API();
        await getListCandidateAPI({
            selection_path: "selection",
            status_step: context.getters.tahapanGetter.tahap,
            job_post_id: context.getters.tahapanGetter.jobSelected?.id
        }).then((result)=>{
            if(result){
                context.commit('setListCandidate', result.data);
            }
        })
	},

    // Tahap 1
	// async getDetailAnswer(context) {
    //     const { getDetailAnswerAPI } = API();
    //     let job_post_id = context.getters.tahapanGetter.jobSelected?.id;
    //     let job_seeker_id = context.getters.tahapanGetter.detail?.job_seeker_id;
    //     let pretest_modul_detail_id = context.getters.tahapanGetter.detail?.module?.pretest_modul_detail_id;

    //     await getDetailAnswerAPI(job_seeker_id, job_post_id, pretest_modul_detail_id).then((result)=>{
    //         if(result){
    //             context.commit('setDetailAnswer', result);
    //         }
    //     })
	// },
}

export const getters = {
	tahapanGetter: (state) => {
        let data = state.tahapan;
        if(data.tahap == null){
            data = JSON.parse(localStorage.getItem('JOB_PROVIDER_TAHAPAN_SELECTION'));
        }
		return data;
	},
	tahapanNonSeleksiGetter: (state) => {
        let data = state.tahapan;
        if(data.tahap == null){
            data = JSON.parse(localStorage.getItem('JOB_PROVIDER_TAHAPAN_NON_SELECTION'));
        }
		return data;
	},
}