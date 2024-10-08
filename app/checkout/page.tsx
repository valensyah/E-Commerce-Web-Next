"use client"
import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { selectCart } from "@/lib/features/product/productSlice"
import { chooseCourier, selectCourier, selectedCourier, selectPayment, choosePayment, selectedPayment } from "@/lib/features/checkout/checkoutSlice"
import { useRouter } from "next/navigation"
export default function Checkout() {
    const [load, setLoad] = useState<boolean>(false)
    const courier = useAppSelector(selectCourier)
    const courierSelected = useAppSelector(selectedCourier)
    const paymentSelected = useAppSelector(selectedPayment)
    const payment = useAppSelector(selectPayment)
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const setCourier = (id: any) => {
        dispatch(chooseCourier(id))
    }

    const setPayment = (id: any) => {
        dispatch(choosePayment(id))
    }

    const checkoutProduct = () => {
        let productId: any = []
        cart.forEach((item => {
            productId.push(item.id)
        }))
        let data = {
            courierId: courierSelected[0].id,
            paymentId: paymentSelected[0].id,
            productId,
        }
        router.push('/success')
    }
    
    useEffect(() => {
        console.log(cart)
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])
    return (
        <div className="bg-white rounded-xl p-5 w-full min-h-screen md:min-h-[70vh] flex-col md:flex-row">
            <div className="w-full md:w-6/12 p-5 md:p-10 min-h-min md:h-[70vh]">
            {
                load ? <div className="w-full h-24 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
                    <div>
                        <div className="w-32 h-4 mb-3 rounded-full bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
                        <div className="w-52 h-4 rounded-full bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
                    </div>
                </div>
                <div className="w-6 h-6 rounded-lg bg-gray-300 animate-pulse duration-150 ease-in-out translate-x-full"></div>
            </div> :
                cart?.map((item: any) => {
                    return (
                        <div className="w-full h-24 flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-6">
                                <img className="w-20 h-20 rounded-lg" src={ item.image } />
                                <div>
                                    <p className="text-xl font-semibold">{ item.name }</p>
                                    <p className="text-md mb-2">{ item.color }</p>
                                    <p className="text-md mb-3">Rp. { item.price }</p>
                                </div>
                            </div>
                            <button className="w-6 h-6 rounded-lg bg-white shadow translate-x-full">X</button>
                        </div>
                    )
                })
            }
            </div>
            <div className="w-full md:w-6/12 p-5 md:p-10 min-h-[70vh] mb-5">
                    {
                        load ?
                            <div className="w-full rounded-lg bg-slate-50 shadow-md p-5">
                                <div className="w-32 h-4 mb-5 rounded-full bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
                                <div className="w-full h-fit grid grid-cols-2 gap-4 mb-5">
                                    <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                                    <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                                    <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                                    <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                                </div>
                            </div>
                         : 
                            <div className="w-full rounded-lg bg-slate-50 shadow-md p-5">
                                <p className="text-lg font-semibold mb-5">Jasa Pengiriman</p>
                                <div className="w-full h-fit grid grid-cols-2 gap-4 mb-5">
                                    {
                                        courier.map(item => {
                                            return <button key={item.id} id={`courier-${item.id}`} className={["w-full h-24 rounded-lg shadow p-3.5 bg-white hover:animate hover:duration-150 hover:ease-in-out hover:border hover:border-blue-500 hover:shadow-md", item.active ? "active" : ""].join(" ")} onClick={() => setCourier(item.id)}>
                                            <img className="w-full h-full" src={item.img} />
                                        </button>
                                        })
                                    }
                                </div>
                            </div>
                        
                    }
                    {
                        load ?
                        <div className="w-full rounded-lg bg-slate-50 shadow-md p-5">
                            <div className="w-32 h-4 mb-5 rounded-full bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
                            <div className="w-full h-fit grid grid-cols-2 gap-4 mb-5">
                                <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                                <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                                <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                                <div className="w-full h-24 rounded-lg bg-gray-300 shadow animate-pulse duration-150 ease-in-out"></div>
                            </div>
                            <button className="w-full h-10 mb-5 rounded-lg bg-gray-300 animate-pulse duration-150 ease-in-out"></button>
                        </div>
                         : 
                        <div className="w-full rounded-lg bg-slate-50 shadow-md p-5">
                            <p className="text-lg font-semibold mb-5">Pembayaran</p>
                            <div className="w-full h-fit grid grid-cols-2 gap-4 mb-5">
                            {
                                payment.map(item => {
                                    return <button key={item.id} id={`courier-${item.id}`} className={["w-full h-24 rounded-lg shadow p-3.5 bg-white hover:animate hover:duration-150 hover:ease-in-out hover:border hover:border-blue-500 hover:shadow-md", item.active ? "active" : ""].join(" ")} onClick={() => setPayment(item.id)}>
                                    <img className="w-full h-full" src={item.img} />
                                </button>
                                })
                            }
                            </div>
                            <button className="w-full h-10 mb-5 rounded-lg border border-green-500 text-green-500" onClick={() => checkoutProduct()}>Checkout</button>
                        </div>
                    }
            </div>
        </div>
    )
}