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
