export interface SignUpFormI {
  firstName: string;
  lastName: string;
  gender: string | null;
  fitnessGoal: string | null;
  email: string;
  password: string;
}

export interface ProductI {
  _id: string;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

export interface LoginI {
  email: string;
  password: string;
}

export interface UserInformationI {
  email: string;
  profileUrl: string;
  userType: string;
  fullName: string;
}

export interface NavLinksI {
  label: string;
  url: string;
}

export interface GymInfoI {
  name: string;
  title: string;
  description: string;
  scheduleWeekDays: string;
  scheduleWeekEnds: string;
  imageUrl: string;
  reverse: boolean;
}

export interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  error: boolean;
}

export interface Product {
  title: string;
  image: string;
  price: number;
  description: string;
}

export interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export interface CartState {
  quantities: number[];
  checked: boolean[];
}

export interface EmailInfoI {
  to: string;
  subject: string;
  html: string;
}

export interface ForgotPasswordNewPasswordI {
  newPassword: string;
  newPasswordMatch: string;
  handleChangeNewPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeNewPasswordMatch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmChangePassword: () => void;
}
