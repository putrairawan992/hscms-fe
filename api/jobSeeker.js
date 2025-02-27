import { request } from "@/api/request";
import { useContext, useRoute } from "@nuxtjs/composition-api";
import { jobProviderValidator } from "@/api/validator/jobProvider";

export const jobSeekerAPI = () => {
  const route = useRoute();
  const activePage = route.value.name;
  const getEndpoint = (path) => {
    const prefix =
      activePage === "pretest-admin"
        ? "jobseeker/pretest_admin/"
        : "jobseeker/";
    return `${prefix}${path}`;
  };

  // Map of endpoint paths based on active page
  const pretestEndpoints = {
    preview: {
      "pretest-admin": "preview/",
      default: "previewquestion/",
    },
    question: {
      "pretest-admin": "question/",
      default: "getquestion/",
    },
    answer: {
      "pretest-admin": "answer/",
      default: "answer/",
    },
    finish: {
      "pretest-admin": "finish/",
      default: "answerfinish/",
    },
  };

  // Helper to get the correct endpoint path based on active page
  const getPath = (type) => {
    return pretestEndpoints[type][activePage] || pretestEndpoints[type].default;
  };
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
  const postApplyJob = async (job_id) => {
    return await postRequest("jobseeker/apply/" + job_id);
  };

  const getListPretest = async () => {
    return await getRequest(
      activePage === "pretest-admin"
        ? "jobseeker/pretest_admin"
        : "jobseeker/getpretest"
    );
  };

  // API functions with cleaner URLs
  const getPreview = async (job_id, module_id) => {
    const path = getPath("preview") + job_id + "/" + module_id;
    return await getRequest(getEndpoint(path));
  };

  const getQuestionAPI = async (job_id, module_id, page_number) => {
    const path =
      getPath("question") + page_number + "/" + job_id + "/" + module_id;
    return await getRequest(getEndpoint(path));
  };

  const postAnswerAPI = async (body, module_id) => {
    const path = getPath("answer") + module_id;
    return await postRequest(getEndpoint(path), body);
  };

  const postEndTest = async (job_id, module_id) => {
    const path = getPath("finish") + job_id + "/" + module_id;
    return await postRequest(getEndpoint(path));
  };

  // Schedule
  const getTimeSchedule = async (job_post_id, date) => {
    return await getRequest(
      "jobseeker/scheduletime/" + job_post_id + "?date=" + date
    );
  };
  const getDateSchedule = async (month, year, job_post_id) => {
    return await getRequest(
      "jobseeker/schedule/" + month + "/" + year + "/" + job_post_id
    );
  };
  const postPickSchedule = async (body) => {
    return await postRequest("jobseeker/schedule", body);
  };

  // Biodata
  const getBiodata = async () => {
    return await getRequest(`jobseeker/biodata`);
  };
  const putBiodata = async (body) => {
    return await putRequest(`jobseeker/biodata`, body);
  };

  // File Attachment
  const getFileAttachment = async () => {
    return await getRequest(`jobseeker/file_attachment`);
  };
  const putReuploadAttachment = async (body, type_attachment) => {
    return await putRequest(
      `jobseeker/file_attachment/` + type_attachment,
      body
    );
  };
  const downloadFileAttachment = async (type_attachment) => {
    return await getRequest(
      `jobseeker/file_attachment_download/` + type_attachment,
      true,
      "arraybuffer"
    );
  };

  // Contract
  const getContract = async () => {
    return await getRequest(`jobseeker/contract`);
  };
  const downloadFileContract = async (body) => {
    return await postRequest(
      `jobseeker/downloadcontract`,
      body,
      false,
      "arraybuffer"
    );
  };
  const postUploadContract = async (
    body,
    batch_remuneration_id,
    tracking_id
  ) => {
    let param = "?";
    if (batch_remuneration_id != null) {
      param = param + "batch_remuneration_id=" + batch_remuneration_id + "&";
    }
    if (tracking_id != null) {
      param = param + "tracking_id=" + tracking_id;
    }
    return await postRequest(`jobseeker/contract` + param, body);
  };

  // Payslip
  const getPayslip = async (year, month, limit, paginate) => {
    let param = "?";
    if (year != null) {
      param = param + "year=" + year + "&";
    }
    if (month != null) {
      param = param + "month=" + month + "&";
    }
    if (limit != null) {
      param = param + "limit=" + limit + "&";
    }
    if (paginate != null) {
      param = param + "paginate=" + paginate;
    }

    return await getRequest("jobseeker/payslip" + param);
  };

  return {
    getJobs,
    postApplyJob,

    getListPretest,
    getPreview,
    getQuestionAPI,
    postAnswerAPI,
    postEndTest,

    getTimeSchedule,
    getDateSchedule,
    postPickSchedule,
    getBiodata,
    putBiodata,

    getFileAttachment,
    putReuploadAttachment,
    downloadFileAttachment,

    getContract,
    downloadFileContract,
    postUploadContract,

    getPayslip,
  };
};
