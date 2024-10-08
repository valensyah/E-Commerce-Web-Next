"use client";
import { useState, useEffect } from "react";
import { getProducts, selectProducts, selectStatus, selectShowCase } from "@/lib/features/product/productSlice"
import { useAppDispatch, useAppSelector} from "@/lib/hooks";
import Link from "next/link";
import { Loader } from "../Loader";

export const Catalogue = () => {
    // const dipatch = useAppDispatch();
    const products = useAppSelector(selectShowCase);
    const status = useAppSelector(selectStatus);
    const [load, setLoad] = useState(false)
    const loading = () => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }
    useEffect(() => {
        loading()
    }, [])
    return (
            <div className="flex flex-nowrap md:grid md:grid-cols-4 overflow-x-scroll md:overflow-visible hide-scroll gap-4">
                {
                    load && <Loader type="card"/>
                }
                {
                    !load && products?.map((item) => {
                        return(
                            <div key={item.id} className="w-44 h-2/3 md:w-full md:h-72 shrink-0 shadow group rounded-xl bg-white hover:animate hover:duration-150 hover:ease-in-out hover:shadow-lg overflow-hidden">
                                <Link href={`/product/${item.id}`} key={item.id} className="md:h-fit">
                                    <div className="w-full h-full md:h-4/6 p-3 flex justify-center items-center border-b">
                                        <img src={item?.image} alt={item.name} className="rounded-tl-xl rounded-tr-xl w-24 h-24 md:w-1/2 md:h-3/4" />
                                    </div>
                                    <div className="p-3 h-full group-hover:bg-gradient-to-r group-hover:from-neutral-950 group-hover:to-neutral-950 group-hover:animate group-hover:duration-150 group-hover:ease-in-out">
                                        <p className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-white group-hover:animate group-hover:duration-150 group-hover:ease-in-out truncate">{ item?.name }</p>
                                        <p className="text-sm group-hover:text-white group-hover:animate group-hover:duration-150 group-hover:ease-in-out">{ item?.category }</p>
                                    </div>
                                </Link>
                            </div>
                            // <div key={item.id} className="w-fit h-fit md:h-72 shadow group rounded-xl bg-white hover:animate hover:duration-150 hover:ease-in-out hover:shadow-lg">
                                // <Link href={`/product/${item.id}`} key={item.id} className="w-fit h-full overflow-hidden">
                                //         <img src={item?.image} alt={item.name} className="rounded-tl-xl rounded-tr-xl w-32 h-32 md:w-1/2 md:h-3/4 border-b" />
                                //     {/* <div className="w-full h-fit md:w-fit md:h-4/6 p-3 flex justify-center items-center">
                                //     </div> */}
                                //     <div className="p-3 h-full group-hover:bg-gradient-to-r group-hover:from-neutral-950 group-hover:to-neutral-950 group-hover:animate group-hover:duration-150 group-hover:ease-in-out">
                                //         <p className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-white group-hover:animate group-hover:duration-150 group-hover:ease-in-out truncate">{ item?.name }</p>
                                //         <p className="text-sm group-hover:text-white group-hover:animate group-hover:duration-150 group-hover:ease-in-out">{ item?.category }</p>
                                //     </div>
                                // </Link>
                            // </div>
                        )
                    })
                }
            </div>
        // <div className="w-screen h-fit md:min-h-screen justify-center bg-slate-50 p-5">
        //     {/* <div className="w-3/12 h-72 shadow-md rounded-xl bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
        //     <div className="w-3/12 h-72 shadow-md rounded-xl bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
        //     <div className="w-3/12 h-72 shadow-md rounded-xl bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
        //     <div className="w-3/12 h-72 shadow-md rounded-xl bg-gray-300 animate-pulse duration-150 ease-in-out"></div> */}
        // </div>
    )
}