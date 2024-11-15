import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getBasicFruits } from '../api/Api'
import { Loader, Loader2, TriangleAlert } from 'lucide-react'

const BasicFruits = () => {
    const [basicfruits, setBasicFruits] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const res = await getBasicFruits()
            if (res.status === 200) {
                setBasicFruits(res.data)
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
                </div>
            </>
        )
    }
    if (!basicfruits || basicfruits.length === 0) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <TriangleAlert className='text-orange-400 h-12 w-12' />
                    <p>
                        No Products Available !
                    </p>
                </div>
            </>
        )
    }

    // const img = "https://loremflickr.com/640/480/cats"
    // const name = "Bespoke Fresh Mouse"
    // const price = "101.00"
    return (
        <>
            <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>

                {basicfruits.map((basicfruits, index) => (
                    <ProductCard img={basicfruits.img} name={basicfruits.title} price={basicfruits.price} key={basicfruits._id} />
                ))
                }
            </div>
        </>
    )
}

export default BasicFruits