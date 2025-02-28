import mongoose, { Schema, Document, Model } from "mongoose";

interface CartItem {
    name: string;
    price: number;
    qty: number;
    imgUrl: string;
}

const cartItemSchema = new Schema<CartItem>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    imgUrl: { type: String, required: false },
});

interface Cart extends Document {
    userId: string;
    cartStatus: string;
    cartItems: CartItem[];
}

const cartSchema = new Schema<Cart>({
    userId: { type: String, required: true },
    cartStatus: { type: String, required: true },
    cartItems: { type: [cartItemSchema], required: true },
});

const CartModel = mongoose.models.Cart || mongoose.model<Cart>("Cart", cartSchema);

export default CartModel;
