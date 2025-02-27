import { atom } from "jotai";

export const ViewProductModalState = atom(false);

export const ViewProductItemId = atom<string>("")







export const selectedNavItemAtom = atom<string | null>("Gym");

export const cartAtom = atom<{ quantities: number[]; checked: boolean[] }>({
  quantities: [],
  checked: [],
});

export const totalQuantityAtom = atom((get) => {
  const { quantities } = get(cartAtom);
  return quantities.reduce((acc, quantity) => acc + quantity, 0);
});


export const CartDrawerState = atom<boolean>(false)

export const CartItems = atom<[]>