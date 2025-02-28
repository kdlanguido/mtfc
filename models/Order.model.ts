import mongoose, { Schema, Document } from "mongoose";

interface OrderPayment {
    paymentMethod: "GCASH" | "CREDITCARD";
    paymentPrice: number;
    accountNo: string;
    referenceNo: string | null;
    expirationDate: Date | null;
    cvv: number | null;
    nameOnCard: string | null;
}

const orderPaymentSchema = new Schema<OrderPayment>({
    paymentMethod: { type: String, required: true },
    paymentPrice: { type: Number, required: true },
    accountNo: { type: String, required: true },
    referenceNo: { type: String, required: false, default: null },
    expirationDate: { type: Date, required: false, default: null },
    cvv: { type: Number, required: false, default: null },
    nameOnCard: { type: String, required: false, default: null }
});

interface OrderItem {
    name: string;
    price: number;
    qty: number;
    imgUrl: string;
}

const orderItemSchema = new Schema<OrderItem>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    imgUrl: { type: String, required: false }
});

interface Order extends Document {
    userId: string;
    orderStatus: string;
    orderDate: Date;
    orderPayment: OrderPayment;
    orderItems: OrderItem[];
}

const orderSchema = new Schema<Order>({
    userId: { type: String, required: true },
    orderStatus: { type: String, required: true },
    orderDate: { type: Date, required: true },
    orderPayment: { type: orderPaymentSchema, required: false },
    orderItems: { type: [orderItemSchema], required: true },
});

const Order = mongoose.models.Order || mongoose.model<Order>("Order", orderSchema);

export default Order;
