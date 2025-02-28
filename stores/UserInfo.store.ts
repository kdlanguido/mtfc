import { UserInformationI } from "@/constants/interfaces";
import { atom } from "jotai";


//////////////
const LOCAL_STORAGE_USER_KEY = 'UserInformation';

const getPersistedUserInformation = (): UserInformationI => {

    const emptyUserInfo = {
        _id: "",
        email: "",
        password: "",
        profileUrl: "",
        userType: "",
        fullName: "",
        gender: "",
        fitnessGoal: ""
    }

    if (typeof window === 'undefined') return emptyUserInfo;

    const storedUserInfo = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    return storedUserInfo ? JSON.parse(storedUserInfo) : emptyUserInfo;
};

export const UserInformation = atom<UserInformationI>(getPersistedUserInformation());


//////////////
const LOCAL_STORAGE_KEY = 'IsUserAuthenticated';

type AuthStatus = boolean;

const getPersistedState = (): AuthStatus => {

    if (typeof window === 'undefined') return false;

    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);

    return storedValue ? JSON.parse(storedValue) : false;
};

export const IsUserAuthenticated = atom<AuthStatus>(getPersistedState());

export const updateUserInformation = (newUserInfo: UserInformationI) => {

    if (typeof window !== 'undefined') {

        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(newUserInfo));

    }
};
