"use client"
import { useRouter } from "next/navigation"
export default function Success() {
    const navigate = useRouter()
    return (
        <div className="w-full min-h-1/2 flex flex-col justify-center items-center p-5 text-center">
            <img className="w-1/2 mb-5" src="/checkouts/success.svg" alt="" />
            <p className="text-4xl font-bold text-green-600 mb-5">Success!</p>
            <p className="text-md text-neutral-950">Your payment has been recieved. We will process your order max in 2 days. Thank you!</p>
            <button className="rounded-xl bg-green-500 p-3 text-white mt-3" onClick={() => navigate.push('/')}>Home</button>
        </div>
    )
}