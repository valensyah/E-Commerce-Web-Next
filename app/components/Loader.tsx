import React from "react";

type Props = {
    type: string;
}
export const Loader = (props: Props) => {
    const { type } = props
    return (
        <>
            {
                type == "card" && Array(4).fill(4).map((item, i) => {
                    return (
                        <div key={i} className="w-44 h-2/3 md:w-full md:h-72 shrink-0 shadow group rounded-xl bg-white hover:animate hover:duration-150 hover:ease-in-out hover:shadow-lg overflow-hidden">
                            <div className="w-full h-full">
                                <div className="rounded-tl-xl rounded-tr-xl bg-gray-300 w-full h-1/2 animate-pulse duration-150 ease-in-out"></div>
                                <div className="p-3 h-full bg-white">
                                    <div className="bg-gray-300 w-20 h-6 rounded-xl animate-pulse duration-150 ease-in-out mb-2"></div>
                                    <div className="bg-gray-300 w-32 h-6 rounded-xl animate-pulse duration-150 ease-in-out"></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                type == "btn-list" && Array(4).fill(4).map((item, i) => {
                    return <div className="w-24 h-8 rounded-lg bg-gray-300 animate-pulse duration-150 ease-in-out"></div>
                })
            }
        </>
    )
}