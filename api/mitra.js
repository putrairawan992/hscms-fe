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
    return await getRequest(
      "mitra/talent/registration/template_download",
      true,
      "blob"
    );
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

  // pretest

  const getListPretestAdmin = async () => {
    return await getRequest("jobseeker/pretest_admin");
  };

  const getDashboardMitra = async () => {
    return await getRequest("mitra/dashboard?limit=10&paginate=1");
  };
  return {
    downloadTalentTemplate,
    getDashboardMitra,
    getFileAttachment,
    getJobs,
    getTalents,
    postApplyJob,
    uploadTalentTemplate,
    talentRegistration,
    getListPretestAdmin,
  };
};
