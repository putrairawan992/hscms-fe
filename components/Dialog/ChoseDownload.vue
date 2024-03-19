<template>
    <div>
        <v-dialog persistent v-model="show" width="289" height="289" style="overflow: hidden !important;">
                <v-card title="Dialog" style="border-radius: 8px !important;">
                    <div class="d-flex" style="justify-content: center; flex-direction: column;">
                        
                        <div class="text-notes mt-8" style="width: 100%;">
                            Silahkan pilih data yang<br>ingin anda unduh.
                        </div>

                        <div class="item-container ma-auto mt-5" @click="downloadCSV()">
                            <img
                                alt="csv"
                                width="35" height="35"
                                src="@/assets/img/office.png" class="mr-4"
                            />
                            <b class="" style="color:#AE445A; font-size: 16px;">
                                Data Diri
                            </b>
                        </div>
                        <div class="item-container ma-auto mt-3 mb-5" @click="downloadZIP()">
                            <img
                                alt="zip/rar"
                                width="35" height="30"
                                src="@/assets/img/folder.png" class="mr-4"
                            />
                            <b class="" style="color:#AE445A; font-size: 16px;">
                                Berkas Lampiran
                            </b>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; padding: 0px 90px 30px 90px;">
                        <button class="button-wrapper" @click="closeDialog">
                            <b class="tempat-tanggal-lahir">Close</b>
                        </button> 
                    </div>
                </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { API } from '@/api/index'
export default {
    data() {
        return {
            dialog: false,
        }
    },
    props: {
        show: { type: Boolean, default() { return false } },
        closeDialog: { type: Function, default() { return {} } },
    },
    setup() {
        const { getEmployeeDataZIP, getEmployeeDataCSV } = API()
        return { getEmployeeDataZIP, getEmployeeDataCSV };
    },
    async mounted() {
        this.dialog = this.show;
        // this.downloadCSV();
    },
    methods: {
        async downloadCSV() {
            await this.getEmployeeDataCSV().then((result) => {
                var filename = "employee-data.xlsx";
                var pom = document.createElement('a');
                var bb = new Blob([result], {type: 'application/vnd.ms-excel'});

                console.log('getEmployeeDataCSV', result);

                pom.setAttribute('href', window.URL.createObjectURL(bb));
                pom.setAttribute('download', filename);

                pom.dataset.downloadurl = ['application/vnd.ms-excel,', pom.download, pom.href].join(':');
                pom.draggable = true; 
                pom.classList.add('dragout');
                pom.click();

                return this.closeDialog(true);
            })
            .catch((e) => {
                console.log(e)
            })
        },
        async downloadZIP() {
            try {
                const zipData = await this.getEmployeeDataZIP(); // Assuming this function returns the ZIP data
                
                // Assuming you have received zipData in the form of a Blob or ArrayBuffer

                const filename = "employee-data.zip";
                
                // Creating a Blob from the zipData
                const zipBlob = new Blob([zipData], {type: 'application/zip'});

                // Creating an anchor tag for downloading
                const pom = document.createElement('a');
                pom.setAttribute('href', window.URL.createObjectURL(zipBlob));
                pom.setAttribute('download', filename);

                // Creating a download URL
                pom.dataset.downloadurl = ['application/zip', pom.download, pom.href].join(':');

                // Making the anchor tag draggable
                pom.draggable = true; 
                
                // Adding a class to the anchor tag
                pom.classList.add('dragout');

                // Triggering the click event to start download
                pom.click();

                return this.closeDialog(true);
            } catch (error) {
                console.error(error);
            }
        }
        // async downloadZIP() {
        //     await this.getEmployeeDataZIP().then((result) => {
        //         var filename = "employee-data.zip";
        //         var pom = document.createElement('a');
        //         var bb = new Blob([result], {type: 'application/zip'});

        //         console.log('getEmployeeDataCSV', result);

        //         pom.setAttribute('href', window.URL.createObjectURL(bb));
        //         pom.setAttribute('download', filename);

        //         pom.dataset.downloadurl = ['application/zip,', pom.download, pom.href].join(':');
        //         pom.draggable = true; 
        //         pom.classList.add('dragout');

        //         return pom.click();
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //     })
        // },
    }
}
</script>
<style>
.item-container {
    border-radius: 10px;
    border: 1px solid #ae445a;
    width: 213px;
    height: 47px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
}
.alert-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
}
.text-notes {
    color: #5D5C5D;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    width: 257px;
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
    font-family: Poppins;
}
.button-batal-wrapper {
    border-radius: 10px;
    background: #fff;
    border: 2px solid #ae445a;
    box-shadow: 5px 0px 5px #b3b9c5;
    width: 101px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    color: #ae445a;
    font-family: Poppins;
}
</style>