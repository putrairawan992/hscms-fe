<template>
    <div id="tahap-1" v-if="tahap == 'Tahap 1'">
        <TalentSelection-Tahap1-PilihanGanda v-if="detail?.module.modul_type == 'Modul Pilihan Ganda'"/>
        <TalentSelection-Tahap1-Essay v-if="detail?.module.modul_type == 'Modul Essay'"/>
        <TalentSelection-Tahap1-UploadDokumen 
            v-if="
                detail?.module.modul_type == 'Modul Upload Document' ||
                detail?.module.modul_type == 'Modul Live Recording' ||
                detail?.module.modul_type == 'Modul Gambar'
            "
        />
    </div>
    <div id="tahap-2" v-else-if="tahap == 'Tahap 2'">
        <TalentSelection-Tahap2-Detail />
    </div>
    <div id="tahap-3" v-else-if="tahap == 'Tahap 3'">
        <TalentSelection-Tahap2-Detail />
    </div>
    <div id="tahap-4" v-else-if="tahap == 'Tahap 4'"></div>
    <div id="tahap-5" v-else-if="tahap == 'Tahap 5'">
        <TalentSelection-Tahap2-Detail />
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    name: "jobProvider",
    layout: "jobPost",
    components: {},
    data: () => ({
        tahap: null,
        detail: { job_seeker_id: null, module: null },
    }),
    watch: {
        // tahapan
    },
    computed: {
        ...mapState('provider-selection', ['tahapan']),
        ...mapGetters('provider-selection', ['tahapanGetter']),
    },
    async mounted(){
        this.detail = this.tahapan.detail == null ? this.tahapanGetter.detail : this.tahapan.detail;
        this.tahap = this.tahapan.tahap == null ? this.tahapanGetter.tahap : this.tahapan.tahap;
        if(this.detail == null){
            return this.$router.push("/talent-selection")
        }

    },
    methods: {
        ...mapMutations('provider-selection', ['setTahapan']),
        
        openDialog() {
            this.showDialog = true;
        },
        closeDialog() {
            this.showDialog = false;
        },
        closeAlertApproval() {
            this.showAlertApproval = false;
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.nilai-text {
    color: #ae445a;
    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}
.detail-selection-card{
    min-height: 164px;;
}
.text-soal-dan {
    color: #404041;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.edit-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}
.detail-text-question {
    color: #404041;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 553px;
}
.detail-text {
    color: #404041;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.history-1 {
    width: 100%;
    /* height: 71px; */
}
.frame-detail-text-question {
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 25px;
}
.foto-tahap1-parent {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
}
.generate-btn {
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    line-height: 50px;
    margin-left: 20px;
}
.card-register {
    border-radius: 40px;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}
.open-job-dan-draft {
    font-size: 20px;
    font-weight: 900;
    color: #ae445a;
    text-align: left;
    font-family: Nunito;
}
@media only screen and (max-width: 500px) {
    .open-job-dan-draft {
        font-size: 18px;
        text-align: center;
    }
}

.blokade-parent {
    font-size: 12px;
}

</style>
