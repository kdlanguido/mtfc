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
  isOnSale: boolean;
}

export interface PriceInfoI {
  title: string;
  inclusions: string;
  inclusions2: string;
  price: number;
}

export interface GymInfoI {
  name: string;
  title: string;
  description: string;
  scheduleWeekDays: string;
  scheduleWeekEnds: string;
  imageUrl: string;
  reverse?: boolean;
}
