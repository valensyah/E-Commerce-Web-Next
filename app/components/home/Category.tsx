"use client"
import { selectCategory, filterByCategory } from "@/lib/features/product/productSlice"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { useEffect, useState } from "react"
import { Loader } from "../Loader"

export const Category = () => {
    const category = useAppSelector(selectCategory)
    const dispatch = useAppDispatch()
    const [load, setLoad] = useState(false)

    const pickCategory = async (event: any) => {
        event.preventDefault()
        dispatch(filterByCategory({category: event.target.innerText}))
        let btn = document.getElementsByClassName("btn-category")
        let currentList = [...event.target.classList]
        for (let i = 0; i < btn.length; i++) {
            let classList = [...btn[i].classList]
            if (classList.includes("active-category") && btn[i].id !== event.target.id) {
                btn[i].classList.remove("active-category")
            }
        }
        if (currentList.includes("active-category")) {
            event.target.classList.remove("active-category")
            return true
        }
        event.target.classList.add("active-category")
    }

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
        <div className="min-w-screen h-fit flex flex-nowrap gap-4 overflow-x-auto py-2 mb-3 hide-scroll">
            {
                load && <Loader type="btn-list" />
            }
            {
                !load && category?.map(item => {
                    return (
                        <button key={item.id} onClick={pickCategory} id={`btn-${item.id}`} className="btn-category md:min-w-14 h-fit px-1.5 py-1 md:px-2.5 md:py-2 text-md md:text-lg rounded-lg border border-green-300 text-green-300 hover:animation hover:duration-150 hover:bg-green-400 hover:text-white">{ item.category }</button>
                    )
                })
            }
        </div>
    )
}