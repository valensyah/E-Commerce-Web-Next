import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

type Item = {
    id: number,
    image: string,
    name: string,
    category: string,
    color: string,
    desc: string,
    price: number
}

type Category = {
    id: number,
    category: string
}

export interface ProductSliceState {
    value: Array<Item>;
    category: Array<Category>;
    status: "idle" | "loading";
    productById: Object;
    cart: Array<Item>;
    showCase: Array<Item>
}

const initialState: ProductSliceState = {
    value: [
        {
            id: 1,
            image: '/products/new-balance.png',
            name: 'New Balance 574',
            category: 'Fashion',
            color: 'Brown',
            desc: 'Sepatu New Balance 574 sangat nyaman dipakai untuk aktivitas seperti bekerja ataupun hang out bersama teman-teman. tersedia berbagai ukuran. segera checkout sebelum kehabisan!',
            price: 999000
        },
        {
            id: 2,
            image: '/products/nonstick-frying-pan.png',
            name: 'Nonstick Frying Pan',
            category: 'Kitchen',
            color: 'Black',
            desc: 'Pan Nonstick Tahan Lama, ideal untuk menggoreng makanan dengan minyak atau mentega minimum untuk memasak sehat',
            price: 275000
        },
        {
            id: 3,
            image: '/products/rog.png',
            name: 'Laptop ROG',
            category: 'Electronic',
            color: 'Black',
            desc: 'Laptop gaming ROG dengan spesifikasi RAM 16GB, SSD 1tb, NVDIA GTX 2060',
            price: 21000000
        },
        {
            id: 4,
            image: '/products/work-table.png',
            name: 'Simple Work Table',
            category: 'Furniture',
            color: 'Brown',
            desc: 'Meja kerja simple berbahan kayu mahoni anti rayap. pemasangan mudah dan tidak terlalu berat sehingga mudah untuk dipindahkan.',
            price: 1020000
        },
        {
            id: 5,
            image: '/products/espresso-maker.png',
            name: 'Espresso Maker',
            category: 'Kitchen',
            color: 'Silver',
            desc: 'Mesin espresso harga murah dan hemat listrik.',
            price: 5000000
        },
        {
            id: 6,
            image: '/products/gaming-chair.png',
            name: 'Gaming Chair',
            category: 'Furniture',
            color: 'Black & White',
            desc: 'Kursi gaming nyaman untuk digunakan saat bermain game.',
            price: 1750000
        },
        {
            id: 7,
            image: '/products/rolex.png',
            name: 'Jam Tangan Rolex',
            category: 'Fashion',
            color: 'Silver',
            desc: 'Jam tangan Rolex terlihat sangat mewah ketika digunakan',
            price: 3000000
        },
        {
            id: 8,
            image: '/products/ip15.png',
            name: 'Iphone 15 Pro',
            category: 'Electronic',
            color: 'Grey',
            desc: 'Iphone 15 ori terbaru dengan harga terbaik. buruan checkout!',
            price: 18000000
        },
    ],
    category: [
        {
            id: 1,
            category: 'All'
        },
        {
            id: 2,
            category: 'Fashion'
        },
        {
            id: 3,
            category: 'Furniture'
        },
        {
            id: 4,
            category: 'Kitchen'
        },
        {
            id: 5,
            category: 'Electronic'
        },
    ],
    status: "idle",
    productById: {},
    cart: [],
    showCase: [
        {
            id: 1,
            image: '/products/new-balance.png',
            name: 'New Balance 574',
            category: 'Fashion',
            color: 'Brown',
            desc: 'Sepatu New Balance 574 sangat nyaman dipakai untuk aktivitas seperti bekerja ataupun hang out bersama teman-teman. tersedia berbagai ukuran. segera checkout sebelum kehabisan!',
            price: 999000
        },
        {
            id: 2,
            image: '/products/nonstick-frying-pan.png',
            name: 'Nonstick Frying Pan',
            category: 'Kitchen',
            color: 'Black',
            desc: 'Pan Nonstick Tahan Lama, ideal untuk menggoreng makanan dengan minyak atau mentega minimum untuk memasak sehat',
            price: 275000
        },
        {
            id: 3,
            image: '/products/rog.png',
            name: 'Laptop ROG',
            category: 'Electronic',
            color: 'Black',
            desc: 'Laptop gaming ROG dengan spesifikasi RAM 16GB, SSD 1tb, NVDIA GTX 2060',
            price: 21000000
        },
        {
            id: 4,
            image: '/products/work-table.png',
            name: 'Simple Work Table',
            category: 'Furniture',
            color: 'Brown',
            desc: 'Meja kerja simple berbahan kayu mahoni anti rayap. pemasangan mudah dan tidak terlalu berat sehingga mudah untuk dipindahkan.',
            price: 1020000
        },
        {
            id: 5,
            image: '/products/espresso-maker.png',
            name: 'Espresso Maker',
            category: 'Kitchen',
            color: 'Silver',
            desc: 'Mesin espresso harga murah dan hemat listrik.',
            price: 5000000
        },
        {
            id: 6,
            image: '/products/gaming-chair.png',
            name: 'Gaming Chair',
            category: 'Furniture',
            color: 'Black & White',
            desc: 'Kursi gaming nyaman untuk digunakan saat bermain game.',
            price: 1750000
        },
        {
            id: 7,
            image: '/products/rolex.png',
            name: 'Jam Tangan Rolex',
            category: 'Fashion',
            color: 'Silver',
            desc: 'Jam tangan Rolex terlihat sangat mewah ketika digunakan',
            price: 3000000
        },
        {
            id: 8,
            image: '/products/ip15.png',
            name: 'Iphone 15 Pro',
            category: 'Electronic',
            color: 'Grey',
            desc: 'Iphone 15 ori terbaru dengan harga terbaik. buruan checkout!',
            price: 18000000
        },
    ]
};

export const productSlice = createAppSlice({
    name: "product",
    initialState,
    reducers: (create) => ({
        getProducts: create.reducer((state, data: PayloadAction<Array<Item>>) => {
            state.value = data.payload;
        }),
        getById: create.reducer((state, data: PayloadAction<{ id: number }>) => {
            const {id} = data.payload
            state.productById = state.value.filter((item) => item.id === id)[0]
        }),
        addToCart: create.reducer((state, data: PayloadAction<Item>) => {
            state.cart.push(data.payload);
        }),
        filterByCategory: create.reducer((state, data: PayloadAction<{ category: string }>) => {
            console.log(data.payload.category)
            if (data.payload.category == "All") {
                state.showCase = state.value.filter(x => x.category !== data.payload.category)
            } else {
                state.showCase =  state.value.filter(x => x.category === data.payload.category)
            }
        })
    }),
    selectors: {
        selectProducts: (product) => product.value,
        selectStatus: (product) => product.status,
        selectProductById: (product) => product.productById,
        selectCart: (product) => product.cart,
        selectCategory: (product) => product.category,
        selectShowCase: (product) => product.showCase
    }
})

export const { getProducts, getById, addToCart, filterByCategory } = productSlice.actions;

export const { selectProducts, selectStatus, selectProductById, selectCart, selectCategory, selectShowCase } = productSlice.selectors;