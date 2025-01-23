export const useForm = () => {
  const parseDate = (date) => {
    if (!date) return null;
    const [year, month, day] = date.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const isNumber = (e) => {
    let char = String.fromCharCode(e.keyCode);
    if (/^[0-9]+$/.test(char)) return true;
    else e.preventDefault();
  };

  return {
    parseDate,
    isNumber,
  };
};
