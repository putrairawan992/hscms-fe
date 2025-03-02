<script>
// BiodataForm.vue
import { defineComponent, reactive } from "vue";
import Multiselect from "vue-multiselect";
import { API } from "@/api/index";

export default defineComponent({
  name: "BiodataForm",
  components: { Multiselect },

  setup() {
    // Form state
    const formData = reactive({
      personalInfo: {
        fullname: "",
        birthplace: "",
        birthdate: "",
        email: "",
        password: "",
        confirmPassword: "",
        linkedin: "",
        phone: "",
        gender: "",
        maritalStatus: "",
        workPosition: "",
        salaryExpectation: "",
      },

      addresses: {
        current: "",
        permanent: "",
      },

      documents: {
        identityNumber: "",
        npwpNumber: "",
        bpjskes: "",
        bpjstk: "",
      },

      bankInfo: {
        bankName: "",
        accountNumber: "",
        accountName: "",
      },

      emergency: {
        name: "",
        relationship: "",
        phone: "",
      },

      workExperiences: [],
      education: [],
      certificates: [],
      uploadedFiles: {
        cv: null,
        photo: null,
        idCard: null,
        familyCard: null,
        npwp: null,
        bpjs: null,
      },
    });

    // Form options
    const options = {
      gender: ["Laki - Laki", "Perempuan"],
      maritalStatus: ["Sudah Menikah", "Belum Menikah"],
      educationLevels: ["SMA/SMK", "D3", "D4", "S1", "S2", "S3"],
    };

    // Upload handlers
    const handleFileUpload = (type, event) => {
      const file = event.target.files[0];
      if (!file) return;

      const maxSize = 3 * 1024 * 1024; // 3MB
      if (file.size > maxSize) {
        alert("File size exceeds 3MB limit");
        return;
      }

      formData.uploadedFiles[type] = file;
    };

    // Dynamic form handlers
    const addFormItem = (type) => {
      switch (type) {
        case "experience":
          formData.workExperiences.push({
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            location: "",
            type: "",
          });
          break;

        case "education":
          formData.education.push({
            institution: "",
            degree: "",
            major: "",
            startDate: "",
            endDate: "",
            gpa: "",
          });
          break;

        case "certificate":
          formData.certificates.push({
            name: "",
            issuer: "",
            score: "",
            year: "",
          });
          break;
      }
    };

    // Form validation
    const validateForm = () => {
      const required = ["fullname", "email", "phone", "identityNumber"];

      for (const field of required) {
        if (!formData.personalInfo[field]) {
          return `${field} is required`;
        }
      }

      if (
        formData.personalInfo.password !== formData.personalInfo.confirmPassword
      ) {
        return "Passwords do not match";
      }

      return null;
    };

    // Form submission
    const handleSubmit = async () => {
      const error = validateForm();
      if (error) {
        alert(error);
        return;
      }

      const formPayload = new FormData();

      // Add personal info
      Object.entries(formData.personalInfo).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      // Add files
      Object.entries(formData.uploadedFiles).forEach(([key, file]) => {
        if (file) formPayload.append(key, file);
      });

      // Add arrays
      ["workExperiences", "education", "certificates"].forEach((array) => {
        formData[array].forEach((item, index) => {
          Object.entries(item).forEach(([key, value]) => {
            formPayload.append(`${array}[${index}][${key}]`, value);
          });
        });
      });

      try {
        const { putBiodata } = API();
        const result = await putBiodata(formPayload);
        if (result) {
          alert("Data saved successfully");
        }
      } catch (error) {
        alert("Error saving data");
        console.error(error);
      }
    };

    return {
      formData,
      options,
      handleFileUpload,
      addFormItem,
      handleSubmit,
    };
  },
});
</script>
