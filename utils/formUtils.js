export const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toISOString().split("T")[0];
};

export const parseDate = (dateString) => {
  if (!dateString) return null;
  return new Date(dateString);
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const validateFileType = (file, acceptedTypes) => {
  if (!file || !acceptedTypes) return true;
  const fileType = file.type.toLowerCase();
  return acceptedTypes.split(",").some((type) => {
    type = type.trim().toLowerCase();
    if (type.startsWith(".")) {
      return file.name.toLowerCase().endsWith(type);
    }
    if (type.endsWith("/*")) {
      return fileType.startsWith(type.slice(0, -2));
    }
    return fileType === type;
  });
};
