// constants/formOptions.js
export const GENDER_OPTIONS = [
  { text: "Laki - Laki", value: "male" },
  { text: "Perempuan", value: "female" },
];

export const MARITAL_STATUS_OPTIONS = [
  { text: "Sudah Menikah", value: "married" },
  { text: "Belum Menikah", value: "single" },
];

export const EMPLOYMENT_TYPES = [
  { text: "Full Time", value: "FULL_TIME" },
  { text: "Part Time", value: "PART_TIME" },
  { text: "Contract", value: "CONTRACT" },
  { text: "Internship", value: "INTERNSHIP" },
];

export const EDUCATION_LEVELS = [
  { text: "SMA/SMK", value: "HIGH_SCHOOL" },
  { text: "D3", value: "DIPLOMA" },
  { text: "S1", value: "BACHELOR" },
  { text: "S2", value: "MASTER" },
  { text: "S3", value: "DOCTORATE" },
];

export const BANK_LIST = [
  { text: "BNI", value: "BNI" },
  { text: "BRI", value: "BRI" },
  { text: "BCA", value: "BCA" },
  { text: "MANDIRI", value: "MANDIRI" },
];

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
