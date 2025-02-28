import { atom } from "jotai";

const LS_CART_KEY = 'UserCardId';

const getPersistCartId = (): string => {

    const EmptyCartId = ""

    if (typeof window === 'undefined') return EmptyCartId;

    const storedCartId = localStorage.getItem(LS_CART_KEY);

    return storedCartId ? JSON.parse(storedCartId) : EmptyCartId;
};

export const StoredCartId = atom<string>(getPersistCartId());

