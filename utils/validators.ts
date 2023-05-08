export const checkNull = (value: string) => {
  if (!value || value.trim() === "") {
    return true;
  } else {
    return false;
  }
};

export const checkEmail = (value: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) return true;
  else return false;
};

export const checkLength = (value: string, min?: number, max?: number) => {
  if (min && max) {
    if (value.length < min || value.length > max) return true;
    else return false;
  } else if (min) {
    if (value.length < min) return true;
    else return false;
  } else if (max) {
    if (value.length > max) return true;
    else return false;
  } else return false;
};
