// validation.ts
export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassword = (password: string) => {
  // 최소 8자, 숫자/문자/특수문자 포함
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

export const isValidPhoneNumber = (phone: string) => {
  const regex = /^01[0-9]{8,9}$/;
  return regex.test(phone);
};
