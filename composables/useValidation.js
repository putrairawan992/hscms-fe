// composables/useValidationRules.js
export function useValidationRules() {
  return {
    required: (v) => !!v || "Field is required",
    email: (v) => /.+@.+\..+/.test(v) || "Invalid email format",
    phone: (v) => /^\+?[\d\s-]{10,}$/.test(v) || "Invalid phone number format",
    password: (v) => v?.length >= 8 || "Password must be at least 8 characters",
    confirmPassword: (password) => (v) =>
      v === password || "Passwords must match",
    nik: (v) => /^\d{16}$/.test(v) || "NIK must be 16 digits",
    npwp: (v) => !v || /^\d{15,16}$/.test(v) || "NPWP must be 15-16 digits",
    url: (v) => !v || /^https?:\/\/.+\..+/.test(v) || "Invalid URL format",
    number: (v) => !isNaN(v) || "Must be a number",
    gpa: (v) => (v >= 0 && v <= 4) || "GPA must be between 0 and 4",
    fileSize: (maxSize) => (file) => {
      if (!file) return true;
      return (
        file.size <= maxSize ||
        `File size must not exceed ${maxSize / 1024 / 1024}MB`
      );
    },
  };
}

// composables/useBiodataForm.js
