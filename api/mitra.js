import { request } from "@/api/request";
import { useContext } from "@nuxtjs/composition-api";
import { jobProviderValidator } from "@/api/validator/jobProvider";

export const mitraAPI = () => {
  const { $api, $loader, $notifier } = useContext();
  const { jobPostValidator } = jobProviderValidator();
  const { getRequest, postRequest, deleteRequest, putRequest } = request();

  const getJobs = async (tahun, bulan, search) => {
    let param = "?";
    if (tahun != null) {
      param = param + "year=" + tahun + "&";
    }
    if (bulan != null) {
      param = param + "month=" + bulan + "&";
    }
    if (search != null) {
      param = param + "keys=" + search;
    }
    return await getRequest("jobseeker/job" + param);
  };

  const getTalents = async (params) => {
    try {
      const queryParams = new URLSearchParams({
        limit: params.limit || 1,
        paginate: params.paginate || 10,
        key_search: params.key_search || "",
        education_id: params.education_id || "",
        experience_id: params.experience_id || "",
        job_specialist_id: params.job_specialist_id || "",
      });

      return await getRequest(`mitra/talent?${queryParams}`);
    } catch (error) {
      console.error("Error fetching talents:", error);
      throw error;
    }
  };

  const postApplyJob = async (job_id) => {
    return await postRequest("jobseeker/apply/" + job_id);
  };

  // File Attachment
  const getFileAttachment = async () => {
    return await getRequest(`jobseeker/file_attachment`);
  };

  // Template Download
  const downloadTalentTemplate = async () => {
    try {
      const response = await getRequest(
        "mitra/talent/registration/template_download",
        {
          responseType: "arraybuffer",
          headers: {
            Accept:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "talent_registration_template.xlsx");

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, 100);

      return true;
    } catch (error) {
      console.error("Download template error:", {
        error,
        message: error.message,
        response: error.response,
        data: error.response?.data,
      });
      throw error;
    }
  };

  const uploadTalentTemplate = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file_talent_upload", file);

      const response = await postRequest(
        "mitra/talent/registration/template_upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response;
    } catch (error) {
      console.error("Upload template error:", error);
      throw error;
    }
  };

  const talentRegistration = async (data) => {
    try {
      const response = await postRequest("mitra/talent/registration", data);
      return response;
    } catch (error) {
      console.error("Upload template error:", error);
    }
  };

  return {
    downloadTalentTemplate,
    getFileAttachment,
    getJobs,
    getTalents,
    postApplyJob,
    uploadTalentTemplate,
    talentRegistration,
  };
};
