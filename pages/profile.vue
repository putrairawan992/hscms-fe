    <template>
    <div>
        <v-card class="card-register">
            <div class="my-2" style="position: relative;">
                <div class="blokade-parent ma-8 pt-1" style="min-height: 850px; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <v-row align="center" class="my-4">
                            <v-col cols="12" class="text-left">
                                <div class="open-job-dan-draft">
                                    Edit Profil
                                </div>
                            </v-col>
                        </v-row>
                        <v-row class="mb-6">
                            <v-col cols="6" style="text-align: left; display: flex; justify-content: space-between;">
                                <div class="d-flex" style="align-items: center;">
                                    <img v-if="photo"
                                        class="foto-profile-icon" alt="photo"
                                        :src="newProfile ? newProfile : photo" @error="handleImgError"
                                    />
                                    <img v-else
                                        class="foto-profile-icon" alt="photo"
                                        :src="newProfile ? newProfile : '@/assets/img/user-red.png'" @error="handleImgError"
                                    />
                                    <div class="d-flex text-left ml-4 ganti-foto-profil" style="flex-direction: column;" @click="selectFile()">
                                        <div>Ganti foto profil</div>
                                        <input class="d-none" type="file" ref="fileInput" @change="onSelectFile($event)">
                                    </div>
                                </div>
                            </v-col>
                            <v-col v-if="$auth.user.role_user == 'jobseeker'" cols="6" style="text-align: left; display: flex; justify-content: end;">
                                <div class="d-flex" style="align-items: center;">
                                    <div class="d-flex text-left ml-4 ganti-foto-profil" style="text-decoration: none;">
                                        <div>{{working}}</div>
                                    </div>
                                </div>

                            </v-col>
                        </v-row>
                        <div v-if="$auth.user.role_user == 'jobprovider'">
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Digital Product:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukkan Digital Product" v-model="provider_name" readonly/>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Username:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Username" v-model="name"/>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Alamat E-Mail:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Alamat E-Mail" v-model="email"/>
                                </v-col>
                            </v-row>
                        </div>

                        <div v-if="$auth.user.role_user == 'jobseeker'">
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Nama Lengkap:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukkan Nama Lengkap" v-model="name"/>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Tempat Tanggal Lahir:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <v-row align="center">
                                        <v-col cols="6">
                                            <input class="register-text-input" placeholder="Masukkan Nama Kota" v-model="place_birth" :readonly="preview" />
                                        </v-col>
                                        <v-col cols="6" class="calendar-input-container">
                                            <v-menu
                                            :ref="datePickerBirthDate"
                                            v-model="datePickerBirthDate" offset-y
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            max-width="290px"
                                            min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <div v-on="!preview && on" style="position: relative;">
                                                        <input
                                                        v-bind="attrs"
                                                        outlined readonly
                                                        v-model="date_birth"
                                                        @blur="date_birth = parseDate(date_birth)"
                                                        placeholder="Masukkan Tanggal Lahir"
                                                        class="register-text-input"
                                                        />
                                                        <img class="feather-icon-calendar" alt="" src="@/assets/svg/feathericon--calendar.svg" />
                                                    </div>
                                                </template>
                                                <v-date-picker
                                                    @input="datePickerBirthDate = false"
                                                    plas v-model="date_birth" no-title
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Alamat E-Mail:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukan Alamat E-Mail" v-model="email"/>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Nomor Handphone:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukan Nomor Handphone" v-model="handphone"/>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                    <b>Alamat Domisili:</b>
                                </v-col>
                                <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                    <input class="register-text-input" placeholder="Masukan Alamat Domisili" v-model="residential_address"/>
                                </v-col>
                            </v-row>
                        </div>

                        <div class="group-inner" />
                        <v-row align="center">
                            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                <b>Password</b>
                            </v-col>
                            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                <input type="password" class="register-text-input" placeholder="Masukkan Password" v-model="old_password"/>
                            </v-col>
                        </v-row>
                        <v-row align="center">
                            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                <b></b>
                            </v-col>
                            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                <input type="password" class="register-text-input" placeholder="Masukkan Password Baru" v-model="new_password"/>
                            </v-col>
                        </v-row>
                        <v-row align="center">
                            <v-col cols="12" xs="3" md="3" lg="3" xl="3" xxl="3" class="label">
                                <b></b>
                            </v-col>
                            <v-col cols="12" xs="9" md="9" lg="9" xl="9" xxl="9">
                                <input type="password" class="register-text-input" placeholder="Masukkan Ulang Password Baru" v-model="confirm_password"/>
                            </v-col>
                        </v-row>
                    </div>

                    <div class="mb-8 mt-12" style="position: relative; display: flex; justify-content: end; column-gap: 10px;">
                        <div class="orange-btn" style="">
                            <div class="" @click="updateProfile()">
                                <b class="button mx-4">Save</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
        
    </div>
</template>
<script>
import { API } from '@/api/index'
import Multiselect from 'vue-multiselect'
import userRedImage from '~/assets/img/user-red.png';
export default {
    name: "jobProvider",
    layout: "jobPost",
    components: { 
        Multiselect,
    },
    data: () => ({
        photo: null,
        newProfile: null,
        provider_name: null,
        working: null,
        datePickerBirthDate: false,
        preview: false,

        // data
        name: null,
        email: null,
        file_profile: null,
        old_password: null,
        new_password: null,
        confirm_password: null,

        handphone: null,
        date_birth: null,
        place_birth: null,
        residential_address: null,
    }),
    watch: {
    },
    setup() {
        const { getProfile, putUpdateProfile } = API()
        return { getProfile, putUpdateProfile };
    },
    async mounted() {
        this.getData();
    },
    methods: {
        async getData(){
            await this.getProfile().then((result)=>{if(result){
                this.name = result?.name;
                this.email = result?.email;
                this.photo = result?.photo;
                this.handphone = result?.handphone;
                this.place_birth = result?.place_birth;
                this.provider_name = result?.provider_name;
                this.working = result?.working;
                this.residential_address = result?.residential_address;
                this.date_birth = result?.date_birth ? new Date(result?.date_birth).toISOString().substr(0, 10) : "";
                console.log('result', result);
            }})
        },
        async updateProfile(){
            const body = new FormData();
            body.append('file_profile', this.file_profile);
            body.append('name', this.name);
            body.append('email', this.email);
            if(this.old_password != null){
                body.append('old_password', this.old_password);
                body.append('new_password', this.new_password);
                body.append('confirm_password', this.confirm_password);
            }

            if(this.$auth.user.role_user == 'jobseeker'){
                body.append('handphone', this.handphone);
                body.append('date_birth', this.date_birth);
                body.append('place_birth', this.place_birth);
                body.append('residential_address', this.residential_address);
            }

            await this.putUpdateProfile(body).then((result)=>{if(result){
                this.getData();
                this.$alert.showAlert({ content: 'Berhasil edit profil.', show: true });
            }})
        },
        parseDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        selectFile(question){
            this.$refs.fileInput.click();
        },
        onSelectFile (event) {
            this.file_profile = event.srcElement.files[0];
            this.newProfile = URL.createObjectURL(this.file_profile);
        },
        handleImgError(event) {
            event.target.src = userRedImage;
        }
    }

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.ganti-foto-profil{
    cursor: pointer;
    font-family: Poppins;
    font-size: 12px;
    color: #404041;
    text-decoration: underline;

}
.foto-profile-icon {
    width: 64px;
    height: 64px;
    padding: 2px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #ae445a;
}
.group-inner {
    border-top: 2px solid #ae445a;
    box-sizing: border-box;
    margin-bottom: 40px;
    margin-top: 40px;
    width: 100%;
    height: 2px;
}
.label {
    text-align: left;
}
.register-text-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 47px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
}.register-text-input::placeholder {
    font-style: italic;
}
.notif-hr{
    background: #C2C2C2;
    margin-bottom: 5px;
    height: 1px;
    width: 100%;
}
.notif-date {
    font-family: Poppins;
    font-size: 12px;
    color: #404041;
}
.notif-text {
    font-family: Poppins;
    font-size: 12px;
    color: #404041;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.notif-text.unread {
    font-family: Poppins;
    font-size: 12px;
    color: #AE445A;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.card-vacancy {
    /* height: 144px; */
    padding: 3px;
    color: #404041;
    margin: unset;
    position: relative;
    border-radius: 10px;
    background: linear-gradient(90deg, #F39F5A 0%, #AE445A 100%);
}
.card-vacancy.terminate {
    background: linear-gradient(90deg, #718199 0%, #B6B6B6 100%) !important;
}
.card-vacancy-edit-parent {
    position: absolute;
    bottom: 10%;
    right: 4%;
}
.vacancy-status-container {
    border-radius: 20px;
    background-color: #AE445A;
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 10px;
    color: #fff;
    cursor: pointer;
}
.card-vacancy.terminate .vacancy-status-container {
    border-radius: 20px;
    background-color: #718199;
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 10px;
    color: #fff;
}
.edit-icon {
    position: relative;
    width: 12px;
    height: 12px;
    overflow: hidden;
    flex-shrink: 0;
}
.minuscircle-icon {
    position: relative;
    width: 12px;
    height: 12px;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
}
.bishare-fill-icon {
    position: relative;
    width: 12px;
    height: 12px;
}
.mei-2023 {
    /* position: absolute;
    width: 29.3%;
    top: 12.69%;
    left: 41.4%; */
    font-size: 10px;
    text-align: center;
    display: inline-block;
}

.job-vacancy-icon {
    width: 101px;
    height: 101px;
    padding: 6px;
    border-radius: 50%;
    border: 3px solid #AE445A;
}

.dash-container {
    max-width: 20px;
    display: flex;
    align-items: center;
}
.dash {
    font-weight: 900;
    color: #ae445a;
    text-align: center;
}
.value9 {
    width: 268px;
    height: 75px;
}
.date2 {
    border-radius: 4px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 120px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 10px;
    gap: 10px;
    font-size: 12px;
}
.input-checkbox-container{
    display: flex;
    column-gap: 20px;
    flex-direction: row;
}
.checkbox-label {
    font-size: 12px;
    font-weight: 400;
    line-height: 0px;
    margin-left: -5px;
}
.attach-mpr-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.frame-container {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 135px;
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
.gear-icon {
    width: 25px;
    height: 29px;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 5px;
}
.isilah-13-kolom-container {
    font-size: 18px;
    color: #ae445a;
    text-align: left;
    line-height: 15px;
}
.job-post-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.job-post-nav-text {
    width: 100%;
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
    background-color: #ffffff;
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
}.save-container {
    width: 100%;
    display: flex;
    margin: 30px 30px 20px 30px;
    justify-content: space-between;
}
.label {
    font-size: 14px;
    text-align: left;
}
.header-select-input {
    border-radius: 10px;
    border: 1px solid #ae445a;
    box-sizing: border-box;
    width: 100%;
    height: 27px !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
}.header-select-input::placeholder {
    font-style: italic;
}
.tempat-tanggal-lahir {
    position: relative;
}
.calendar-input-container{
    position: relative;
}
.feather-icon-calendar {
    top: 25%;
    right: 7%;
    width: 20px;
    height: 20px;
    position: absolute;
}
.opsional {
    font-weight: 300;
}
.opsional-dapat-dikosongkan {
    font-weight: 300;
    text-align: center;
}
.group-inner {
    border-top: 2px solid #ae445a;
    box-sizing: border-box;
    margin-bottom: 40px;
    margin-top: 40px;
    width: 100%;
    height: 2px;
}
.disclaimer-seluruh-data {
    margin: 0;
    font-size: 8px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
}
.ukuran-maksimal-berkas {
    text-align: left;
    font-weight: 300;
}
.pluscirclefill-icon {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;
}
.plus {
    border-radius: 10px;
    border: 2px solid #ae445a;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 13px 14px;
}
.pas-foto-4x6 {
    position: relative;
    font-weight: 300;
    display: inline-block;
    width: 109px;
    flex-shrink: 0;
}
.foto {
    width: 129px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
}
.pas-foto {
    /* position: absolute;
    top: 94px;
    left: 140px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.ktp2 {
    margin: 0;
    font-weight: 300;
}
.optional {
    margin: 0;
    width: 100%;
    font-size: 10px;
}
.pluscirclefill {
    position: absolute;
    max-height: 58px;
    max-width: 58px;
    top: 0%;
    right: 2.57%;
    /* bottom: 52.42%; */
    /* left: 90.75%; */
    /* max-width: 100%; */
    overflow: hidden;
    /* max-height: 100%; */
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
.button-wrapper {
    border-radius: 10px;
    background: linear-gradient(90deg, #f39f5a, #ae445a);
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 101px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
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
.div {
    position: relative;
    letter-spacing: 0.01em;
    display: none;
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
