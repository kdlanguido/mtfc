import { CartItemsI } from "@/constants/interfaces";
import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

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


export const termsModalAtom = atom(false);

export const cardModalAtom = atom(false);

export const gcashModalAtom = atom(false);

export const CartDrawerState = atom<boolean>(false)

const storage = createJSONStorage<CartItemsI[]>(() => sessionStorage)

export const CartItems = atomWithStorage<CartItemsI[]>('cartItems', [{
  name: "",
  price: 0,
  qty: 0,
  imgUrl: ""
}], storage)

