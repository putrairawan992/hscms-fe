import { ref, reactive } from "vue";
import { useValidationRules } from "./useValidation";

export function useBiodataForm(initialData = {}) {
  const rules = useValidationRules();
  const form = ref(null);
  const loading = ref(false);
  const isPreview = ref(false);

  const formData = reactive({
    personalInfo: {
      fullname: "",
      birthplace: "",
      birthdate: null,
      email: "",
      gender: "",
      maritalStatus: "",
      ...initialData.personalInfo,
    },
    contact: {
      phone: "",
      linkedin: "",
      residential_address: "",
      address_on_identity_card: "",
      ...initialData.contact,
    },
    documents: {
      identity_number: "",
      npwp_number: "",
      bpjskes: "",
      bpjstk: "",
      ...initialData.documents,
    },
    bankInfo: {
      bankName: "",
      accountNumber: "",
      accountName: "",
      ...initialData.bankInfo,
    },
    emergency: {
      name: "",
      relationship: "",
      phone: "",
      ...initialData.emergency,
    },
    workExperiences: [...(initialData.workExperiences || [])],
    education: [...(initialData.education || [])],
    certificates: [...(initialData.certificates || [])],
    files: {
      cv: null,
      photo: null,
      idCard: null,
      familyCard: null,
      npwp: null,
      bpjs: null,
      ...initialData.files,
    },
  });

  const errorMessages = reactive({
    personalInfo: {},
    contact: {},
    documents: {},
    bankInfo: {},
    emergency: {},
    files: {},
  });

  const validateForm = () => {
    // Reset error messages
    Object.keys(errorMessages).forEach((key) => {
      errorMessages[key] = {};
    });

    let isValid = true;

    // Validate Personal Info
    if (!formData.personalInfo.fullname) {
      errorMessages.personalInfo.fullname = "Name is required";
      isValid = false;
    }
    if (!formData.personalInfo.email) {
      errorMessages.personalInfo.email = "Email is required";
      isValid = false;
    } else if (!rules.email(formData.personalInfo.email)) {
      errorMessages.personalInfo.email = "Invalid email format";
      isValid = false;
    }

    // Validate Contact
    if (!formData.contact.phone) {
      errorMessages.contact.phone = "Phone number is required";
      isValid = false;
    } else if (!rules.phone(formData.contact.phone)) {
      errorMessages.contact.phone = "Invalid phone number";
      isValid = false;
    }

    // Validate Documents
    if (!formData.documents.identity_number) {
      errorMessages.documents.identity_number = "NIK is required";
      isValid = false;
    } else if (!rules.nik(formData.documents.identity_number)) {
      errorMessages.documents.identity_number = "Invalid NIK format";
      isValid = false;
    }

    // Validate Required Files
    if (!formData.files.cv) {
      errorMessages.files.cv = "CV is required";
      isValid = false;
    }
    if (!formData.files.photo) {
      errorMessages.files.photo = "Photo is required";
      isValid = false;
    }

    return isValid;
  };

  const submitForm = async () => {
    if (!validateForm()) {
      return false;
    }

    loading.value = true;
    try {
      const formPayload = new FormData();

      // Add personal info
      Object.entries(formData.personalInfo).forEach(([key, value]) => {
        if (value) formPayload.append(`personalInfo[${key}]`, value);
      });

      // Add contact info
      Object.entries(formData.contact).forEach(([key, value]) => {
        if (value) formPayload.append(`contact[${key}]`, value);
      });

      // Add documents
      Object.entries(formData.documents).forEach(([key, value]) => {
        if (value) formPayload.append(`documents[${key}]`, value);
      });

      // Add bank info
      Object.entries(formData.bankInfo).forEach(([key, value]) => {
        if (value) formPayload.append(`bankInfo[${key}]`, value);
      });

      // Add emergency contact
      Object.entries(formData.emergency).forEach(([key, value]) => {
        if (value) formPayload.append(`emergency[${key}]`, value);
      });

      // Add work experiences
      formData.workExperiences.forEach((exp, index) => {
        Object.entries(exp).forEach(([key, value]) => {
          if (value)
            formPayload.append(`workExperiences[${index}][${key}]`, value);
        });
      });

      // Add education
      formData.education.forEach((edu, index) => {
        Object.entries(edu).forEach(([key, value]) => {
          if (value) formPayload.append(`education[${index}][${key}]`, value);
        });
      });

      // Add certificates
      formData.certificates.forEach((cert, index) => {
        Object.entries(cert).forEach(([key, value]) => {
          if (value)
            formPayload.append(`certificates[${index}][${key}]`, value);
        });
      });

      // Add files
      Object.entries(formData.files).forEach(([key, file]) => {
        if (file) formPayload.append(`files[${key}]`, file);
      });

      // Here you would make your API call
      // const response = await api.submitBiodata(formPayload)
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      return false;
    } finally {
      loading.value = false;
    }
  };

  const resetForm = () => {
    // Reset all form fields to initial state
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key] = [];
      } else if (typeof formData[key] === "object") {
        Object.keys(formData[key]).forEach((subKey) => {
          formData[key][subKey] = "";
        });
      } else {
        formData[key] = "";
      }
    });

    // Reset error messages
    Object.keys(errorMessages).forEach((key) => {
      errorMessages[key] = {};
    });

    // Reset file inputs
    formData.files = {
      cv: null,
      photo: null,
      idCard: null,
      familyCard: null,
      npwp: null,
      bpjs: null,
    };

    isPreview.value = false;
  };

  const addWorkExperience = () => {
    formData.workExperiences.push({
      position: "",
      company: "",
      startDate: null,
      endDate: null,
      location: "",
      employmentType: "",
    });
  };

  const removeWorkExperience = (index) => {
    formData.workExperiences.splice(index, 1);
  };

  const addEducation = () => {
    formData.education.push({
      institution: "",
      degree: "",
      major: "",
      startDate: null,
      endDate: null,
      gpa: "",
    });
  };

  const removeEducation = (index) => {
    formData.education.splice(index, 1);
  };

  const addCertificate = () => {
    formData.certificates.push({
      name: "",
      issuer: "",
      issueDate: null,
      expiryDate: null,
      credentialId: "",
      credentialUrl: "",
      certificateFile: null,
    });
  };

  const removeCertificate = (index) => {
    formData.certificates.splice(index, 1);
  };

  const togglePreview = () => {
    isPreview.value = !isPreview.value;
  };
  const isStepValid = (step) => {
    switch (step) {
      case 1: // Personal Info
        return (
          formData.personalInfo.fullname &&
          formData.personalInfo.email &&
          formData.personalInfo.birthplace &&
          formData.personalInfo.birthdate &&
          formData.personalInfo.gender &&
          formData.personalInfo.maritalStatus
        );

      case 2: // Contact Info
        return (
          formData.contact.phone &&
          formData.contact.residential_address &&
          formData.contact.address_on_identity_card &&
          formData.emergency.name &&
          formData.emergency.relationship &&
          formData.emergency.phone
        );

      case 3: // Documents
        return (
          formData.documents.identity_number &&
          // NPWP is optional
          // BPJS is optional
          formData.files.cv &&
          formData.files.photo
        );

      case 4: // Work Experience
        // Optional section, always valid
        return true;

      case 5: // Education
        // At least one education entry is required
        if (formData.education.length === 0) return false;
        return formData.education.every(
          (edu) => edu.institution && edu.degree && edu.major && edu.startDate
        );

      case 6: // Certificates
        // Optional section, always valid
        return true;

      default:
        return false;
    }
  };

  return {
    form,
    formData,
    loading,
    isStepValid,
    isPreview,
    errorMessages,
    validateForm,
    submitForm,
    resetForm,
    addWorkExperience,
    removeWorkExperience,
    addEducation,
    removeEducation,
    addCertificate,
    removeCertificate,
    togglePreview,
  };
}
