<template>
    <div>
        <v-card class="card-register">
            <v-row class="job-post-nav ma-0">
                <v-col cols="3" class="job-post-nav-container active">
                    <div class="job-post-nav-text">Job Post</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="">Draft (5)</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="">Rejected</div>
                </v-col>
                <v-col cols="3" class="job-post-nav-container">
                    <div class="job-post-nav-text" @click="">Approval</div>
                </v-col>
            </v-row>
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1" style="min-height: 785px;">
                    <div class="milestones mt-8 mb-8">
                        <div class="milestones-item" />
                        
                        <div class="stepts">
                            <div class="steps-process">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck1">
                                    <img class="vector-icon1" alt="" src="@/assets/svg/vector-register.svg" />
                                    <b class="b3">1</b>
                                    </div>
                                </div>
                                <div class="sub">
                                    <img class="crown-icon" alt="" src="@/assets/svg/crown.svg" />
                                    <div class="box">
                                        <div class="primery">
                                            <div class="on-color" />
                                            <b class="fill-in">Fill In</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="step >= 2" class="steps-process">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck1">
                                    <img class="vector-icon1" alt="" src="@/assets/svg/vector-register.svg" />
                                    <b class="b3">2</b>
                                    </div>
                                </div>
                                <div class="sub">
                                    <img class="crown-icon" alt="" src="@/assets/svg/crown.svg" />
                                    <div class="box">
                                        <div class="primery">
                                            <div class="on-color" />
                                            <b class="pretest">Set Pre-Test</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="steps-process1">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck2">
                                    <img class="vector-icon" alt="" src="@/assets/svg/rectangle-4137.svg" />
                                    <b class="b2">3</b>
                                    </div>
                                </div>
                                <div class="sub1">
                                    <img class="crown-icon1" alt="" src="@/assets/svg/crown1.svg" />
                                    <div class="box">
                                        <div class="process-name" />
                                        <b class="pretest">Set Pre-Test</b>
                                    </div>
                                </div>
                            </div>

                            <div v-if="step >= 3" class="steps-process">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck1">
                                    <img class="vector-icon1" alt="" src="@/assets/svg/vector-register.svg" />
                                    <b class="b3">2</b>
                                    </div>
                                </div>
                                <div class="sub">
                                    <img class="crown-icon" alt="" src="@/assets/svg/crown.svg" />
                                    <div class="box">
                                        <div class="primery">
                                            <div class="on-color" />
                                            <b class="preview">Preview</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="steps-process1">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck2">
                                    <img class="vector-icon" alt="" src="@/assets/svg/rectangle-4137.svg" />
                                    <b class="b2">3</b>
                                    </div>
                                </div>
                                <div class="sub1">
                                    <img class="crown-icon1" alt="" src="@/assets/svg/crown1.svg" />
                                    <div class="box">
                                        <div class="process-name" />
                                        <b class="preview">Preview</b>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="step >= 4" class="steps-process">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck1">
                                    <img class="vector-icon1" alt="" src="@/assets/svg/vector-register.svg" />
                                    <b class="b3">2</b>
                                    </div>
                                </div>
                                <div class="sub">
                                    <img class="crown-icon" alt="" src="@/assets/svg/crown.svg" />
                                    <div class="box">
                                        <div class="primery">
                                            <div class="on-color" />
                                            <b class="publish">Publish</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="steps-process1">
                                <div class="round">
                                    <div class="round-child" />
                                    <div class="bicheck2">
                                        <img class="vector-icon" alt="" src="@/assets/svg/rectangle-4137.svg" />
                                        <b class="b2">4</b>
                                    </div>
                                </div>
                                <div class="sub1">
                                    <img class="crown-icon1" alt="" src="@/assets/svg/crown2.svg" />
                                    <div class="box">
                                        <div class="process-name" />
                                        <b class="publish">Publish</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <JobPost-Fill-In v-if="step == 1" :next="next" :prev="prev"/>
                    <JobPost-PreTest v-if="step == 2" :next="next" :prev="prev"/>
                    <JobPost-Preview v-if="step == 3" :next="next" :prev="prev"/>
                    <JobPost-Publish v-if="step == 4" :next="next" :prev="prev"/>
                    <!-- <JobPost-Preview :next="next" :prev="prev"/> -->
                    <!-- <JobPost-Publish :next="next" :prev="prev"/> -->
                </div>
            </div>
        </v-card>
    </div>
</template>
<script>

import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import TextEditor from "~/components/TextEditor";

export default {
    name: "jobPost",
    middleware: "jobProvider",
    components: { 
        TextEditor,
        Multiselect,
    },
    data: () => ({
        step: 0,
    }),
    watch: {
    
    },
    setup() {
        const {  } = API()
        return {  };
    },
    async mounted() {
        const storageStep = localStorage.getItem('step_job_post');
        if(storageStep){
            this.step = storageStep;
        }else{
            this.step = 1;
        }
    },
    methods: {
        next(){
            this.step = parseInt(this.step) + 1;
            console.log('this.step', this.step);
            localStorage.setItem('step_job_post', this.step);
        },
        prev(){
            if(this.step > 1){
                this.step = this.step - 1;
                localStorage.setItem('step_job_post', this.step);
            }
        },
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.job-post-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.job-post-nav-text {
    width: 100%;
    cursor: pointer;
    text-align: center;
}
.job-post-nav-container {
    width: 100%;
    height: 74px;
    font-size: 20px;
    font-weight: 900;
    color: #ae445a;
    display: flex;
    align-items: center;
    font-family: Nunito;
    background-color: #ffffff00;
    border-radius: 30px 30px 0px 0px;
}
.job-post-nav-container.active {
    color: #ffffff;
    background-color: #ae445a;
}
.card-register {
    border-radius: 40px;
    background: linear-gradient(90deg, #F1F5FE 0%, #FFF 98.82%);
    box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5 !important;
}
.milestones-item {
    width: 90%;
    height: 14.74%;
    margin-bottom: -4%;
    background-color: #f0f0f0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15) inset;
    margin-right: auto;
    margin-left: auto;
}
@media only screen and (max-width: 750px) {
    .milestones-item {
        width: 80%;
    }
}
.round-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: #f0f0f0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    width: 40px;
    height: 40px;
}
.vector-icon {
    position: absolute;
    height: 40.54%;
    width: 50.95%;
    top: 29.77%;
    right: 23.52%;
    bottom: 29.69%;
    left: 25.53%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    display: none;
}
.b2 {
    position: absolute;
    height: 82.35%;
    width: 41.18%;
    top: 11.76%;
    left: 29.41%;
    letter-spacing: 0.01em;
    display: flex;
    align-items: center;
    justify-content: center;
}
.vector-icon1 {
    position: absolute;
    height: 40.54%;
    width: 50.95%;
    top: 29.77%;
    right: 23.52%;
    bottom: 29.69%;
    left: 25.53%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
}
.b3 {
    position: absolute;
    height: 82.35%;
    width: 41.18%;
    top: 11.76%;
    left: 29.41%;
    letter-spacing: 0.01em;
    display: none;
    align-items: center;
    justify-content: center;
}
.bicheck1 {
    position: absolute;
    top: 6.5px;
    left: 6.5px;
    border-radius: 15.88px;
    background: linear-gradient(180deg, #f39f5a, #ae445a);
    width: 27px;
    height: 27px;
    overflow: hidden;
}
.round {
    position: relative;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    flex-shrink: 0;
}
.crown-icon {
    position: absolute;
    top: 0px;
    left: 41.5px;
    width: 12px;
    height: 30px;
}
.process-name {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 26px;
    background-color: #f0f0f0;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1) inset;
    width: 95px;
    height: 31px;
}
.on-color {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 26px;
    background: linear-gradient(180deg, #f39f5a, #ae445a);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1) inset;
    width: 95px;
    height: 31px;
}
.fill-in {
    position: absolute;
    top: 6px;
    left: 31.5px;
    letter-spacing: 0.01em;
}
.primery {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 95px;
    height: 31px;
    font-size: 12px;
    color: #fff;
    font-family: Poppins;
}
.box {
    position: absolute;
    top: 10px;
    left: 0px;
    width: 95px;
    height: 33px;
}
.sub {
    position: relative;
    width: 95px;
    height: 43px;
    font-size: 16px;
    color: #8c8c8c;
}
.steps-process {
    height: 89px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 19.85px;
    font-family: Roboto;
}
.bicheck2 {
    position: absolute;
    top: 6.5px;
    left: 6.5px;
    border-radius: 15.88px;
    background-color: #bfbfbf;
    width: 27px;
    height: 27px;
    overflow: hidden;
}
.crown-icon1 {
    position: absolute;
    top: 0px;
    left: 41.5px;
    width: 12px;
    height: 10px;
}
.preview {
    position: absolute;
    top: 6px;
    left: 22.5px;
    letter-spacing: 0.01em;
}
.pretest {
    position: absolute;
    top: 6px;
    left: 10px;
    letter-spacing: 0.01em;
}
.sub1 {
    position: relative;
    width: 95px;
    height: 43px;
    color: #404041;
}
.steps-process1 {
    width: 95px;
    height: 87px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.publish {
    position: absolute;
    top: 6px;
    left: 24.5px;
    letter-spacing: 0.01em;
}
.stepts {
    position: absolute;
    height: 100%;
    width: 100%;
    top: -15%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.milestones {
    margin: auto;
    width: 85%;
    height: 95px;
    color: #fff;
    text-align: center;
    position: relative;
}
@media only screen and (max-width: 600px) {
    .milestones {
        width: 100%;
    }
}
.blokade-parent {
    font-size: 12px;
}

</style>
