"use client"
import { useParams } from "next/navigation"
import { Product } from "@/app/components/Product"
import { getById, selectProductById } from "@/lib/features/product/productSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect } from "react"
import React from "react"

type Item = {
    id: number,
    image: string,
    name: string,
    category: string,
    color: string,
    desc: string,
    price: number
}

export default function Page() {
    const dispatch = useAppDispatch()
    const productId = useAppSelector(selectProductById)
    const param = useParams()
    let pId = {id: Number(param.id)}
    
    useEffect(() => {
        dispatch(getById(pId))
    }, [])
    
    return (
        <>
            <Product item={productId} />
        </>
    )
}