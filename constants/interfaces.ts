import mongoose, { Types } from "mongoose";

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
  _id: string;
  email: string;
  profileUrl: string;
  userType: string;
  fullName: string;
  fitnessGoal: string;
  gender: string;
}

export interface NavLinksI {
  label: string;
  url: string;
}

export interface AdminNavLinksI {
  label: string;
  url: string;
  imgUrl: string;
}

export interface GymInfoI {
  profileUrl: string;
  fullName: string;
  gender: string;
  email: string;
  phone: string;
  shortIntro: string;
  instructorSchedule: string;
  hourlyRate: number;
  specialization: string;
  instructorFor: string;
}

export interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  error: boolean;
  name: string;
}

export interface ProductI {
  _id: string;
  name: string;
  imgUrl: string;
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

export interface ButtonI {
  style: string;
  onClick: () => void;
  title: string;
}

export interface CartItemsI {
  name: string,
  price: number,
  qty: number,
  imgUrl: string
}

export interface PricingI {
  _id: string;
  name: string;
  inclusions: [string];
  price: number;
  sport: string;
}

export interface GymEquipmentI {
  _id: string;
  name: string,
  description: string,
  price: number,
  datePurchased: string,
  qty: number,
  vendorDetails: {
    name: string,
    contactNumber: string,
    address: string,
  },

}

export interface SubscriptionI extends Document {
  userId: string;
  status: string;
  endDate: Date;
  startDate: Date;
  type: string;
  name: string;
  pricingId: string;
  qrCodeUrl: string;
}

export interface AttendanceI extends Document {
  timeIn: string;
  timeOut: Date;
  date: Date;
  status: string;
}



export interface SessionsI {
  userId: string;
  fullName: string;
  time: string;
  date: Date;
  status: string;
}

export interface SessionClientI {
  _id: string,
  fullName: string,
}

export interface TrainerI extends Document {
  _id: string;
  profileUrl: string;
  fullName: string;
  gender: string;
  email: string;
  phone: string;
  shortIntro: string;
  instructorSchedule: string;
  hourlyRate: number;
  specialization: string;
  instructorFor: string;
}