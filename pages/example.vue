<template>
    <div class="new-hiring-dashboard">
      <img class="bg-icon" alt="" src="@/assets/bg@2x.png" />
      <img
        class="new-hiring-dashboard-child"
        alt=""
        src="@/assets/rectangle-226@2x.png"
      />
      <img class="space-bar-icon" alt="" src="@/assets/space-bar@2x.png" />
      <div class="frame-parent">
        <div class="tahun-parent">
          <b class="tahun">Tahun</b>
          <div class="masukkan-parent">
            <i class="masukkan">Tahun</i>
            <img class="vector-icon" alt="" src="@/assets/vector@2x.png" />
          </div>
        </div>
        <div class="tahun-parent">
          <b class="tahun">Bulan</b>
          <div class="masukkan-parent">
            <i class="masukkan">Pilih Bulan</i>
            <img class="vector-icon" alt="" src="@/assets/vector@2x.png" />
          </div>
        </div>
        <div class="ketikkan-nama-parent">
          <i class="ketikkan-nama">Ketikkan Nama</i>
          <img class="search-icon" alt="" src="@/assets/search@2x.png" />
        </div>
      </div>
      <div class="isi-lowongan">
        <div class="isi-lowongan-child" />
        <div class="frame-group">
          <div class="lowongan-1-parent">
            <div class="lowongan-1">
              <img class="lowongan-1-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="marketing-staff-parent">
                <b class="tahun">Marketing Staff</b>
                <div class="tahun">PT. Freedom Indonesia Jaya</div>
                <div class="tahun">IDR 5.000.000 - 6.500.000</div>
                <div class="tahun">2 Orang</div>
              </div>
              <div class="mei-2023">2 Mei 2023 | 09:00 WIB</div>
              <div class="apply-wrapper" @click="onFrameContainer7Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-parent">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIconClick"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIconClick" />
                <img class="vector-icon2" alt="" @click="onVectorIcon2Click" />
              </div>
            </div>
            <div class="lowongan-1">
              <img class="lowongan-1-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="apr-2023">20 Apr 2023 | 14:00 WIB</div>
              <div class="hrd-staff-parent">
                <b class="tahun">HRD Staff</b>
                <div class="tahun">PT. Gema Insani Group</div>
                <div class="tahun">IDR 5.000.000 - 6.500.000</div>
                <div class="tahun">3 Orang</div>
              </div>
              <div class="apply-wrapper" @click="onFrameContainer10Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-group">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIcon1Click"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIcon1Click" />
                <img class="vector-icon2" alt="" @click="onVectorIcon3Click" />
              </div>
            </div>
          </div>
          <div class="lowongan-1-parent">
            <div class="lowongan-1">
              <img class="lowongan-1-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="apr-20231">10 Apr 2023 | 10:00 WIB</div>
              <div class="content-creator-parent">
                <b class="tahun">Content Creator</b>
                <div class="tahun">PT. Melodi Dangdut</div>
                <div class="tahun">IDR 5.000.000 - 6.500.000</div>
                <div class="tahun">3 Orang</div>
              </div>
              <div class="apply-frame" @click="onFrameContainer14Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-container">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIcon2Click"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIcon2Click" />
                <img class="vector-icon2" alt="" @click="onVectorIcon4Click" />
              </div>
            </div>
            <div class="lowongan-1">
              <img class="lowongan-1-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="apr-20231">10 Apr 2023 | 10:00 WIB</div>
              <div class="it-staff-parent">
                <b class="tahun">IT Staff</b>
                <div class="tahun">PT. Lion Pride</div>
                <div class="tahun">IDR 9.000.000 - 10.000.000</div>
                <div class="tahun">1 Orang</div>
              </div>
              <div class="apply-frame" @click="onFrameContainer17Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-container">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIcon3Click"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIcon3Click" />
                <img class="vector-icon2" alt="" @click="onVectorIcon5Click" />
              </div>
            </div>
          </div>
          <div class="lowongan-1-parent">
            <div class="lowongan-1">
              <img class="lowongan-1-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="apr-20233">5 Apr 2023 | 07:00 WIB</div>
              <div class="content-creator-parent">
                <b class="tahun">Finance Staff</b>
                <div class="tahun">PT. Kucing Oyen</div>
                <div class="tahun">IDR 5.000.000 - 6.500.000</div>
                <div class="tahun">2 Orang</div>
              </div>
              <div class="apply-frame" @click="onFrameContainer21Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-container">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIcon4Click"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIcon4Click" />
                <img class="vector-icon2" alt="" @click="onVectorIcon6Click" />
              </div>
            </div>
            <div class="lowongan-1">
              <img class="lowongan-1-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="apr-20231">2 Apr 2023 | 10:00 WIB</div>
              <div class="marketing-staff-group">
                <b class="tahun">Marketing Staff</b>
                <div class="tahun">PT. Lion Pride</div>
                <div class="tahun">IDR 5.000.000 - 6.500.000</div>
                <div class="tahun">1 Orang</div>
              </div>
              <div class="apply-wrapper2" @click="onFrameContainer24Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-parent3">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIcon5Click"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIcon5Click" />
                <img class="vector-icon2" alt="" @click="onVectorIcon7Click" />
              </div>
            </div>
          </div>
          <div class="lowongan-1-parent">
            <div class="lowongan-7">
              <img class="lowongan-7-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon6"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="hrd-staff-group">
                <b class="tahun">HRD Staff</b>
                <div class="tahun">PT. Freedom Indonesia Jaya</div>
                <div class="tahun">IDR 5.000.000 - 6.500.000</div>
                <div class="tahun">2 Orang</div>
              </div>
              <div class="apr-20235">2 Apr 2023 | 09:00 WIB</div>
              <div class="apply-wrapper3" @click="onFrameContainer28Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-parent4">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIcon6Click"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIcon6Click" />
                <img class="vector-icon2" alt="" @click="onVectorIcon8Click" />
              </div>
            </div>
            <div class="lowongan-1">
              <img class="lowongan-1-child" alt="" src="@/assets/rectangle-4154@2x.png" />
              <img
                class="foto-perusaahaan-icon"
                alt=""
                src="@/assets/foto-perusaahaan@2x.png"
              />
              <div class="apr-2023">1 Apr 2023 | 14:00 WIB</div>
              <div class="hrd-staff-parent">
                <b class="tahun">IT Staff</b>
                <div class="tahun">PT. Gema Insani Group</div>
                <div class="tahun">IDR 5.000.000 - 6.500.000</div>
                <div class="tahun">3 Orang</div>
              </div>
              <div class="apply-wrapper" @click="onFrameContainer31Click">
                <div class="tahun">Apply</div>
              </div>
              <div class="bishare-fill-group">
                <img
                  class="bishare-fill-icon"
                  alt=""
                  src="@/assets/bisharefill@2x.png"
                  @click="onBishareFillIcon7Click"
                />
                <img class="x-circle-icon" alt="" @click="onXCircleIcon7Click" />
                <img class="vector-icon2" alt="" @click="onVectorIcon9Click" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lowongan-pekerjaan">Lowongan Pekerjaan</div>
      <div class="up-button-talent">
        <div class="up-button-parent">
          <div class="up-button">
            <div class="ellipse-parent">
              <div class="frame-child" />
              <img
                class="vuesaxlinearnotification-icon"
                alt=""
                src="@/assets/vuesaxlinearnotification@2x.png"
              />
            </div>
            <div class="user-profile">
              <img class="foto-user-icon" alt="" src="@/assets/foto-user@2x.png" />
            </div>
            <div class="ellipse-group">
              <div class="group-child" />
              <b class="b">4</b>
            </div>
          </div>
          <div class="ellipse-container">
            <div class="group-child" />
            <b class="b">4</b>
          </div>
        </div>
      </div>
      <div class="biodata-talent-3" />
      <div class="menu-button-t-job-vacancy">
        <div class="menu-button-remunerasi">
          <div class="menu-button-remunerasi">
            <div class="menu-left-child" />
            <div class="menu">
              <div class="dashboard" @click="onDashboardTextClick">Dashboard</div>
              <div class="dashboard" @click="onHelpCenterTextClick">
                Help Center
              </div>
              <div class="menu-child" />
              <div class="dashboard" @click="onBiodataTextClick">Biodata</div>
              <div class="dashboard" @click="onFileAttachmentTextClick">
                File Attachment
              </div>
              <div class="contract-wrapper" @click="onFrameContainer37Click">
                <div class="contract">Contract</div>
              </div>
              <div class="contract-wrapper" @click="onFrameContainer38Click">
                <div class="contract">Payslip</div>
              </div>
              <div class="menu-child" />
              <div class="dashboard" @click="onPreTestTextClick">Pre-test</div>
              <b class="job-vacancy" @click="onJobVacancyTextClick"
                >Job Vacancy</b
              >
              <div class="dashboard" @click="onScheduleTextClick">Schedule</div>
            </div>
            <img class="menu-left-item" alt="" src="@/assets/rectangle-4106@2x.png" />
            <img
              class="scala-new-2-icon"
              alt=""
              src="@/assets/scalanew-2@2x.png"
              @click="onScalaNew2ImageClick"
            />
          </div>
        </div>
        <img class="chevron-down-icon" alt="" src="@/assets/chevrondown@2x.png" />
      </div>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
        layout: "empty",
      name: "NewHiringDashboard",
      methods: {
        onFrameContainer7Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIconClick() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIconClick() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon2Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onFrameContainer10Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIcon1Click() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIcon1Click() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon3Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onFrameContainer14Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIcon2Click() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIcon2Click() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon4Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onFrameContainer17Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIcon3Click() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIcon3Click() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon5Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onFrameContainer21Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIcon4Click() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIcon4Click() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon6Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onFrameContainer24Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIcon5Click() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIcon5Click() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon7Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onFrameContainer28Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIcon6Click() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIcon6Click() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon8Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onFrameContainer31Click() {
          // Please sync "HC Admin - Approval Job Post Detail" to the project
        },
        onBishareFillIcon7Click() {
          // Please sync "HC Admin - Approval Job Post Share" to the project
        },
        onXCircleIcon7Click() {
          // Please sync "HC Admin - Approval Job Post (reject)" to the project
        },
        onVectorIcon9Click() {
          // Please sync "HC Admin - Approval Job Post (Approve)" to the project
        },
        onDashboardTextClick() {
          // Please sync "New Hiring - Dashboard" to the project
        },
        onHelpCenterTextClick() {
          // Please sync "HC Product - Help Center" to the project
        },
        onBiodataTextClick() {
          // Please sync "New Hiring - Introduction Data Diri" to the project
        },
        onFileAttachmentTextClick() {
          // Please sync "New Hiring - Berkas Lampiran" to the project
        },
        onFrameContainer37Click() {
          // Please sync "New Hiring - Kontrak" to the project
        },
        onFrameContainer38Click() {
          // Please sync "New Hiring - Kontrak" to the project
        },
        onPreTestTextClick() {
          // Please sync "New Hiring - Pre-Test" to the project
        },
        onJobVacancyTextClick() {
          this.$router.push("/");
        },
        onScheduleTextClick() {
          // Please sync "New Hiring - Jadwal 1" to the project
        },
        onScalaNew2ImageClick() {
          // Please sync "New Hiring - Dashboard" to the project
        },
      },
    });
  </script>
  <style scoped>
    .bg-icon {
      position: absolute;
      height: 100%;
      width: 101.39%;
      top: 0%;
      right: -1.39%;
      bottom: 0%;
      left: 0%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
    }
    .new-hiring-dashboard-child {
      position: absolute;
      top: 118px;
      left: 368px;
      width: 930px;
      height: 863px;
      object-fit: cover;
    }
    .space-bar-icon {
      position: absolute;
      top: 304px;
      left: 1243px;
      width: 20px;
      height: 636px;
      object-fit: contain;
    }
    .tahun {
      position: relative;
    }
    .masukkan {
      position: relative;
      display: inline-block;
      width: 238px;
      flex-shrink: 0;
    }
    .vector-icon {
      position: relative;
      width: 8.98px;
      height: 4.92px;
      object-fit: cover;
    }
    .masukkan-parent {
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #ae445a;
      box-sizing: border-box;
      width: 181px;
      height: 33px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px;
      font-size: 14px;
      color: #b6b6b6;
    }
    .tahun-parent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 5px;
    }
    .ketikkan-nama {
      position: relative;
      display: inline-block;
      width: 239px;
      flex-shrink: 0;
    }
    .search-icon {
      position: relative;
      width: 19.22px;
      height: 20.02px;
      object-fit: cover;
    }
    .ketikkan-nama-parent {
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #ae445a;
      box-sizing: border-box;
      width: 410px;
      height: 33px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px;
      font-size: 14px;
      color: #b6b6b6;
    }
    .frame-parent {
      position: absolute;
      top: 212px;
      left: 407px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
      gap: 15px;
    }
    .isi-lowongan-child {
      position: absolute;
      top: 499.1px;
      left: -10px;
    }
    .lowongan-1-child {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
      border-radius: 10px;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
    }
    .foto-perusaahaan-icon {
      position: absolute;
      height: 71.63%;
      width: 27.15%;
      top: 14.18%;
      right: 66.4%;
      bottom: 14.18%;
      left: 6.45%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
    }
    .marketing-staff-parent {
      position: absolute;
      top: 41.1px;
      left: 154px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      font-size: 12px;
    }
    .mei-2023 {
      position: absolute;
      width: 29.3%;
      top: 12.69%;
      left: 41.4%;
      display: inline-block;
    }
    .apply-wrapper {
      position: absolute;
      height: 12.06%;
      width: 13.17%;
      top: 11.98%;
      right: 5.38%;
      bottom: 75.96%;
      left: 81.45%;
      border-radius: 20px;
      background-color: #ae445a;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      color: #fff;
    }
    .bishare-fill-icon {
      position: relative;
      width: 12px;
      height: 12px;
      object-fit: cover;
      cursor: pointer;
    }
    .x-circle-icon {
      position: relative;
      width: 12px;
      height: 12px;
      object-fit: cover;
      display: none;
      cursor: pointer;
    }
    .vector-icon2 {
      position: relative;
      width: 13px;
      height: 9px;
      object-fit: cover;
      display: none;
      cursor: pointer;
    }
    .bishare-fill-parent {
      position: absolute;
      top: 118px;
      left: 340px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 12px;
    }
    .lowongan-1 {
      position: relative;
      width: 372px;
      height: 141px;
    }
    .apr-2023 {
      position: absolute;
      width: 30.38%;
      top: 12.69%;
      left: 41.4%;
      display: inline-block;
    }
    .hrd-staff-parent {
      position: absolute;
      height: 51.06%;
      width: 40.59%;
      top: 29.15%;
      right: 18.01%;
      bottom: 19.79%;
      left: 41.4%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      font-size: 12px;
    }
    .bishare-fill-group {
      position: absolute;
      height: 8.51%;
      width: 3.23%;
      top: 83.69%;
      right: 5.38%;
      bottom: 7.8%;
      left: 91.4%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 12px;
    }
    .lowongan-1-parent {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 36px;
    }
    .apr-20231 {
      position: absolute;
      width: 29.57%;
      top: 12.77%;
      left: 41.4%;
      display: inline-block;
    }
    .content-creator-parent {
      position: absolute;
      height: 51.06%;
      width: 40.59%;
      top: 29.22%;
      right: 18.01%;
      bottom: 19.71%;
      left: 41.4%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      font-size: 12px;
    }
    .apply-frame {
      position: absolute;
      height: 12.06%;
      width: 13.17%;
      top: 12.06%;
      right: 5.38%;
      bottom: 75.89%;
      left: 81.45%;
      border-radius: 20px;
      background-color: #ae445a;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      color: #fff;
    }
    .bishare-fill-container {
      position: absolute;
      height: 8.51%;
      width: 3.23%;
      top: 83.76%;
      right: 5.38%;
      bottom: 7.73%;
      left: 91.4%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 12px;
    }
    .it-staff-parent {
      position: absolute;
      height: 51.06%;
      width: 41.67%;
      top: 29.22%;
      right: 16.13%;
      bottom: 19.71%;
      left: 42.2%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      font-size: 12px;
    }
    .apr-20233 {
      position: absolute;
      width: 29.84%;
      top: 12.77%;
      left: 41.4%;
      display: inline-block;
    }
    .marketing-staff-group {
      position: absolute;
      height: 51.06%;
      width: 40.59%;
      top: 29.22%;
      right: 16.67%;
      bottom: 19.71%;
      left: 42.74%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      font-size: 12px;
    }
    .apply-wrapper2 {
      position: absolute;
      height: 12.06%;
      width: 13.17%;
      top: 11.91%;
      right: 5.38%;
      bottom: 76.03%;
      left: 81.45%;
      border-radius: 20px;
      background-color: #ae445a;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      color: #fff;
    }
    .bishare-fill-parent3 {
      position: absolute;
      height: 8.51%;
      width: 3.23%;
      top: 83.62%;
      right: 5.38%;
      bottom: 7.87%;
      left: 91.4%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 12px;
    }
    .lowongan-7-child {
      position: relative;
      border-radius: 10px;
      width: 372px;
      height: 141px;
      object-fit: cover;
      z-index: 0;
    }
    .foto-perusaahaan-icon6 {
      position: absolute;
      margin: 0 !important;
      height: 71.63%;
      width: 27.15%;
      top: 14.18%;
      right: 66.4%;
      bottom: 14.18%;
      left: 6.45%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .hrd-staff-group {
      margin: 0 !important;
      position: absolute;
      top: 41.1px;
      left: 154px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      z-index: 2;
      text-align: left;
      font-size: 12px;
    }
    .apr-20235 {
      position: absolute;
      margin: 0 !important;
      width: 29.3%;
      top: 12.69%;
      left: 41.4%;
      display: inline-block;
      z-index: 3;
    }
    .apply-wrapper3 {
      margin: 0 !important;
      position: absolute;
      height: 12.06%;
      width: 13.17%;
      top: 11.98%;
      right: 5.38%;
      bottom: 75.96%;
      left: 81.45%;
      border-radius: 20px;
      background-color: #ae445a;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      z-index: 4;
      color: #fff;
    }
    .bishare-fill-parent4 {
      margin: 0 !important;
      position: absolute;
      top: 118px;
      left: 340px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 12px;
      z-index: 5;
    }
    .lowongan-7 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      gap: 10px;
    }
    .frame-group {
      position: absolute;
      top: 0px;
      left: 0px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 25px;
    }
    .isi-lowongan {
      position: absolute;
      top: 303.9px;
      left: 407px;
      width: 780px;
      height: 653.9px;
      text-align: center;
      font-size: 10px;
    }
    .lowongan-pekerjaan {
      position: absolute;
      top: calc(50% - 376px);
      left: 406px;
      font-size: 26px;
      font-weight: 900;
      font-family: Nunito;
      color: #ae445a;
      display: inline-block;
      width: 273px;
      height: 35px;
    }
    .frame-child {
      position: relative;
      border-radius: 50%;
      background-color: #fff;
      width: 26px;
      height: 26px;
      z-index: 0;
    }
    .vuesaxlinearnotification-icon {
      position: absolute;
      margin: 0 !important;
      height: 61.54%;
      width: 61.54%;
      top: 19.23%;
      right: 19.23%;
      bottom: 19.23%;
      left: 19.23%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .ellipse-parent {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      gap: 10px;
      z-index: 0;
    }
    .foto-user-icon {
      position: relative;
      width: 42px;
      height: 42px;
      object-fit: cover;
    }
    .user-profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      z-index: 1;
    }
    .group-child {
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: 50%;
      background-color: #ae445a;
      width: 23px;
      height: 23px;
    }
    .b {
      position: absolute;
      top: 4px;
      left: 8px;
    }
    .ellipse-group {
      position: absolute;
      margin: 0 !important;
      top: -4px;
      left: 16px;
      width: 23px;
      height: 23px;
      z-index: 2;
    }
    .up-button {
      filter: drop-shadow(5px 0px 5px #b3b9c5);
      width: 97px;
      height: 41px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 0;
    }
    .ellipse-container {
      position: absolute;
      margin: 0 !important;
      top: 6px;
      left: 536px;
      width: 23px;
      height: 23px;
      z-index: 1;
    }
    .up-button-parent {
      width: 627px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      gap: 10px;
    }
    .up-button-talent {
      position: absolute;
      top: 43px;
      left: 684px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 10px;
      color: #fff;
    }
    .biodata-talent-3 {
      position: absolute;
      top: 187px;
      left: 368px;
      width: 450px;
      height: 155px;
    }
    .menu-left-child {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
      border-radius: 30px;
      background: linear-gradient(95.32deg, #e9f2ff, #fff);
      box-shadow: 5px 0px 5px #b3b9c5, -5px 0px 5px #b3b9c5;
    }
    .dashboard {
      position: relative;
      font-weight: 300;
      cursor: pointer;
    }
    .menu-child {
      position: relative;
      border-top: 1px solid #ae445a;
      box-sizing: border-box;
      width: 188px;
      height: 1px;
    }
    .contract {
      position: relative;
      font-weight: 300;
    }
    .contract-wrapper {
      width: 159px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .job-vacancy {
      position: relative;
      color: #ae445a;
      cursor: pointer;
    }
    .menu {
      position: absolute;
      top: calc(50% - 258px);
      left: calc(50% - 93.5px);
      height: 693px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .menu-left-item {
      position: absolute;
      height: 3.66%;
      width: 100%;
      top: 14.95%;
      right: 0%;
      bottom: 81.4%;
      left: 0%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
    }
    .scala-new-2-icon {
      position: absolute;
      height: 7.1%;
      width: 70.59%;
      top: 4.19%;
      right: 14.97%;
      bottom: 88.71%;
      left: 14.44%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
    .menu-button-remunerasi {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      left: 0%;
    }
    .chevron-down-icon {
      position: absolute;
      height: 1.93%;
      width: 9.61%;
      top: 38.39%;
      right: 4.3%;
      bottom: 59.68%;
      left: 86.1%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: contain;
    }
    .menu-button-t-job-vacancy {
      position: absolute;
      top: 52px;
      left: 144px;
      width: 187px;
      height: 930px;
      text-align: center;
    }
    .new-hiring-dashboard {
      position: relative;
      background-color: #fff;
      width: 100%;
      height: 1024px;
      overflow: hidden;
      text-align: left;
      font-size: 16px;
      color: #404041;
      font-family: Poppins;
    }
  </style>
  