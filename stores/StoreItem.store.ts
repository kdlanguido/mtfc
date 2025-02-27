import { atom } from "jotai";

export const viewProductModalState = atom(false);
export const selectedNavItemAtom = atom<string | null>("Gym");
export const cartAtom = atom<{ quantities: number[]; checked: boolean[] }>({
  quantities: [],
  checked: [],
});

export const totalQuantityAtom = atom((get) => {
  const { quantities } = get(cartAtom);
  return quantities.reduce((acc, quantity) => acc + quantity, 0);
});

export const termsModalAtom = atom(false);
export const cardModalAtom = atom(false);
export const gcashModalAtom = atom(false);
