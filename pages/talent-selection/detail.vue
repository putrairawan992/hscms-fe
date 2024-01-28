<template>
    
    <TalentSelection-Tahap2-Detail />
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
    name: "jobProvider",
    layout: "jobPost",
    components: { 
        Multiselect,
    },
    data: () => ({
        select1: null,
        html: null,
        showDialog: false,
        showAlertApproval: false,

        arrayJalur: ['Seleksi', 'Non-Seleksi'],
        arrayJobOpening: ['Marketing Staff', 'UI/UX Designer', 'Graphic Designer'],
        arrayTahapan: ['Tahap 1', 'Tahap 2', 'Tahap 3', 'Tahap 4'],
    }),
    watch: {
    },
    methods: {
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
