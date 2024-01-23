<template>
    <div class="countdown-container ma-auto mt-2">
        <div class="attach-mpr-parent">
            <b class="button">
                Sisa waktu: 
                <span class="ml-2">
                    {{ days > 0 ? days < 10 ? "0"+days+" : " : days+" : " :""}}
                    {{ hours > 0 ? hours < 10 ? "0"+hours+" : " : hours+" : " :"00 : "}}
                    {{ minutes > 0 ? minutes < 10 ? "0"+minutes+" : " : minutes+" : " :"00 : "}}
                    {{ seconds > 0 ? seconds < 10 ? "0"+seconds : seconds :"00"}}
                </span>
            </b>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expired: false,
            currentDate: new Date(),
            targetDate: new Date(new Date().getTime() + 120 * 60 * 1000)
        }
    },
    computed: {
        timeRemaining() {
            let difference = this.targetDate - this.currentDate;

            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        },
        days() {
            return this.timeRemaining.days;
        },
        hours() {
            return this.timeRemaining.hours;
        },
        minutes() {
            return this.timeRemaining.minutes;
        },
        seconds() {
            return this.timeRemaining.seconds;
        }
    },
    props: {
        timeOut: { type: Function, default() { return {} }},
        date: { type: Date, default() { return new Date(new Date().getTime() + 120 * 60 * 1000); } },
    },
    async mounted() {
        this.updateTimer();
        if(this.date !== ""){
            this.targetDate = this.date;
        }
    },
    methods: {
        updateTimer() {
            setInterval(() => {
                this.currentDate = new Date();
                this.checkRemainingTime();
            }, 1000);
        },
        checkRemainingTime(){
            if(!this.expired){
                if(this.days <= 0){
                    if(this.hours <= 0){
                        if(this.minutes <= 0){
                            if(this.seconds <= 0){
                                this.timeOut();
                                this.expired = true;
                            }
                        }
                    }
                }
            }
        }
    }
}
</script>
<style>
.countdown-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: -webkit-fit-content;
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
}
.attach-mpr-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>