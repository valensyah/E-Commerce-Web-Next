import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

interface Item {
    courierId: number;
    paymentId: number;
    productId: Array<number>;
}

interface Courier {
    id: number;
    name: string;
    img: string;
    active: boolean;
}

interface Payment {
    id: number;
    name: string;
    img: string;
    active: boolean;
}

export interface CheckoutSliceState {
    value: Item;
    courier: Array<Courier>;
    payment: Array<Payment>
}

const initialState: CheckoutSliceState = {
    value: {
        courierId: 0,
        paymentId: 0,
        productId: []
    },
    courier: [
        {
            id: 1,
            name: "JNE",
            img: "/checkouts/logo-jne.png",
            active: false
        },
        {
            id: 2,
            name: "JNT",
            img: "/checkouts/logo-jnt.png",
            active: false
        },
        {
            id: 3,
            name: "GOSEND",
            img: "/checkouts/logo-gosend.png",
            active: false
        },
        {
            id: 4,
            name: "GRABEXPRESS",
            img: "/checkouts/logo-grabexpress.png",
            active: false
        },
    ],
    payment: [
        {
            id: 1,
            name: "BCA",
            img: "/checkouts/logo-bca.png",
            active: false
        },
        {
            id: 2,
            name: "BNI",
            img: "/checkouts/logo-bni.png",
            active: false
        },
        {
            id: 3,
            name: "MANDIRI",
            img: "/checkouts/logo-mandiri.png",
            active: false
        }
    ]
}

export const checkoutSlice = createAppSlice({
    name: "checkout",
    initialState,
    reducers: (create) => ({
        checkoutInfo: create.reducer((state, data: PayloadAction<Item>) => {
            state.value = data.payload
        }),
        chooseCourier: create.reducer((state, id: PayloadAction<number>) => {
            console.log("test")
            state.courier.forEach((item: any) => {
                if (item.active && item.id !== id.payload) {
                    item.active = false
                }
                if (item.id === id.payload) {
                    item.active = !item.active
                }
                return item
            })
        }),
        choosePayment: create.reducer((state, id: PayloadAction<number>) => {
            console.log("test")
            state.payment.forEach((item: any) => {
                if (item.active && item.id !== id.payload) {
                    item.active = false
                }
                if (item.id === id.payload) {
                    item.active = !item.active
                }
                return item
            })
        }),
        checkout: create.reducer((state, data: PayloadAction) => {
            console.log("Sukses!")
        })
    }),
    selectors: {
        selectCheckouts: (checkout) => checkout.value,
        selectCourier: (checkout) => checkout.courier,
        selectedCourier: (checkout) => checkout.courier.filter(x => x.active),
        selectPayment: (checkout) => checkout.payment,
        selectedPayment: (checkout) => checkout.payment.filter(x => x.active),

    }
})

export const { checkoutInfo, chooseCourier, choosePayment, checkout } = checkoutSlice.actions;

export const { selectCheckouts, selectCourier, selectedCourier, selectPayment, selectedPayment } = checkoutSlice.selectors;