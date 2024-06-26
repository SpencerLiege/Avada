import PageHeader from "../components/PageHeader"
import Loader from "../components/Loader"
import { useGetProductDetailsQuery } from "../slices/productApiSlice"
import { useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { addToCart } from "../slices/cartSlice"
import Message from "../components/Message"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";

export default function TakeoutScreen() {
    const { id: productId } = useParams()
    const { data: product, isLoading, isError } = useGetProductDetailsQuery(productId)

    const [ qty, setQty ] = useState(1)
    const [message, setMessage] = useState(false)
    const dispatch = useDispatch()


    const increaseCount = ()=> {
        setQty(prevCount => prevCount + 1)
    }

    const decreaseCount = () => {
        setQty(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount))
    }

    const messageToggle = ()=>{
        setMessage(true)
        // setTimeout(()=> {
        //     setMessage(false)
        // }, 10000)
    }

    const addToCartHandler = ()=> {
        const item = {...product, qty}
        // console.log(item)
        dispatch(addToCart(item))
        messageToggle()
    }
  return (
    <>
    {
        isLoading ? (<Loader />) :
         isError ? (
            <div>{isError?.data?.message || isError.error}</div>
         ) : 
        (
            <div>
                <PageHeader image={product.image}>
                    <div className='uppercase text-white text-center'>
                    <p className='font-workSans tracking-wider text-[15px]' >restuarant takeout</p>
                    <p className='font-avada2 font-semibold text-[70px]'> {product.category} </p>
                    </div>
                </PageHeader>
                <div className="my-10 mx-32">
                    <p className="text-[12px]"> <span className="font-serif capitalize">category:</span> <span className="font-avada1 uppercase">{product.category}</span> </p>
                    {message && <Message type="success">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-x-2 items-center">
                                <span><IoMdCheckmarkCircleOutline /></span>
                                <span>&quot;{product.name}&quot;</span>
                                <span>has been added to you cart</span>
                            </div>
                            <Link to='/cart' className="flex items-center">
                                <TiShoppingCart />
                                <span>View cart</span>
                            </Link>
                        </div>
                        
                        </Message>}
                    <div className="grid grid-cols-2">
                        <div className="relative bg-cover bg-center h-[650px]" style={{backgroundImage: `url(${product.image})`}}>
                                <span className="absolute bottom-2 left-4 text-white font-avada1 text-[25px]">${product.price}</span>
                        </div>
                        <div className="bg-black text-white p-20 ">
                            <div className="grid gap-y-10">
                                <span className="font-avada2 text-5xl">{product.name}</span>
                                <p className='border-b-2 w-20 '></p>
                                <span className="font-serif text-xl">{product.description}</span>
                                <div className="flex justify-between">
                                    <div className="border flex items-center w-40">
                                        <button onClick={decreaseCount} className="border-r h-full hover:bg-slate-900 w-16">-</button>
                                        <span className="text-center pt-3 text-lg border-r h-full w-32">{qty}</span>
                                        <button onClick={increaseCount} className=" h-full hover:bg-slate-900 w-16  ">+</button>
                                    </div>
                                    <button onClick={addToCartHandler} className="bg-white text-black py-4 px-10 text-[15px] font-workSans uppercase">
                                        add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    </>

  )
}
