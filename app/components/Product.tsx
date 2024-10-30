import { addToCart } from "@/lib/features/product/productSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useRouter } from "next/navigation"
type Item = {
    id: number,
    image: string,
    name: string,
    category: string,
    color: string,
    desc: string,
    price: number
}

type Props = {
    item: Item
}

export const Product = (props: any) => {
    const { item } = props
    const dispatch = useAppDispatch()
    const router = useRouter()

    const productAction = (data: Item, type: string) => {
        dispatch(addToCart(data))
        router.push('/checkout')
        // if (type === 'BUY_NOW') {
        // }
    }

    return (
        <div className="md:mt-5 bg-white md:rounded-xl p-5 w-full min-h-screen md:min-h-[70vh] flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-6/12 h-full p-5 md:p-10">
                <img src={item.image} className="w-full h-full" alt="" />
            </div>
            <div className="w-full md:w-6/12 h-full p-5 md:p-10">
                <p className="font-bold text-2xl md:text-4xl text-indigo-950 mb-1">{item.name}</p>
                <p className="text-lg md:text-xl text-indigo-950 mb-2">{item.category}</p>
                <div className="w-full py-1 mb-2">
                    <div className="border border-slate-200"></div>
                </div>
                <p className="text-md md:text-lg font-semibold text-indigo-950 mb-1.5">Description :</p>
                <p className="text-md md:text-lg text-indigo-950 mb-3">
                    {item.desc}
                </p>
                <div className="w-full h-fit flex gap-4 mb-3">
                    <p className="text-md md:text-lg font-semibold text-indigo-950">Color :</p>
                    <div className="relative w-6/12">
                        <div className="w-8 h-8 rounded-full bg-gray-200 absolute top-0 left-0 z-10"></div>
                        <div className="w-8 h-8 rounded-full bg-amber-800 absolute top-0 left-3.5 z-20"></div>
                        <div className="w-8 h-8 rounded-full bg-neutral-900 absolute top-0 left-7 z-30"></div>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-4 mb-3">
                    <p className="text-md md:text-lg font-semibold text-indigo-950">Harga :</p>
                    <p className="text-xl md:text-2xl font-bold text-indigo-950 text-end">
                        Rp. {item.price}
                    </p>
                </div>
                <div className="w-full h-fit flex gap-4">
                    <button className="w-6/12 h-fit rounded-full text-center py-2.5 border border-sky-500 text-sky-500 hover:animate hover:duration-150 hover:ease-in-out hover:text-white hover:bg-sky-500" onClick={() => productAction(item, 'BUY_NOW')}>Buy Now</button>
                    <button className="w-6/12 h-fit rounded-full text-center py-2.5 border border-lime-500 text-lime-500 hover:animate hover:duration-150 hover:ease-in-out hover:text-white hover:bg-lime-500" onClick={() => productAction(item, 'ADD_TO_CART')}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}