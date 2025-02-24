export const VALIDATION_RULES = {
  required: (v) => !!v || "Field is required",
  email: (v) => /.+@.+\..+/.test(v) || "Invalid email format",
  phone: (v) => /^\+?[\d\s-]{10,}$/.test(v) || "Invalid phone number",
  nik: (v) => /^\d{16}$/.test(v) || "NIK must be 16 digits",
  npwp: (v) => !v || /^\d{15,16}$/.test(v) || "NPWP must be 15-16 digits",
  gpa: (v) =>
    (parseFloat(v) >= 0 && parseFloat(v) <= 4) || "GPA must be between 0 and 4",
};

export const FILE_TYPES = {
  cv: {
    accept: ".pdf,.doc,.docx",
    maxSize: 3 * 1024 * 1024, // 3MB
    required: true,
  },
  photo: {
    accept: "image/*",
    maxSize: 2 * 1024 * 1024, // 2MB
    required: true,
  },
  idCard: {
    accept: ".pdf,image/*",
    maxSize: 2 * 1024 * 1024,
    required: false,
  },
};
