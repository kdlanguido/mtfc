import { GymEquipmentI, IUser, ProductI, SessionClientI, TrainerI } from "@/constants/interfaces";
import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

export const MyProfileModalState = atom(false);

export const ProductModalState = atom(false)

export const ProductModalStateAdd = atom(false)

export const SelectedProduct = atom<ProductI>()


export const GymEquipmentModalStateEdit = atom(false)

export const GymEquipmentModalStateAdd = atom(false)

export const SelectedGymEquipment = atom<GymEquipmentI>()


export const MemberModalStateEdit = atom(false)

export const MemberModalStateAdd = atom(false)

export const SelectedMember = atom<IUser>()


export const TrainerModalStateEdit = atom(false)

export const TrainerModalStateAdd = atom(false)

export const SelectedTrainer = atom<TrainerI>()


export const SessionModalState = atom(false)

export const SessionClientInformation = atom<SessionClientI>()


const adminSidebarSelectedIndex = createJSONStorage<number>(() => sessionStorage)

export const AdminSideBarSelectedIndex = atomWithStorage<number>('adminSidebarSelectedIndex', 0, adminSidebarSelectedIndex)

