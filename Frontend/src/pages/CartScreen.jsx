// import Message from "../components/Message"
import PageHeader from "../components/PageHeader"
import mxw from '../assets/mxw.jpg'
import { useSelector, useDispatch } from "react-redux"
import { updateCartQty, removeItem } from "../slices/cartSlice"
import { Link } from "react-router-dom"
import { MdDeleteForever } from "react-icons/md";
import Message from "../components/Message"
import { MdMenuBook } from "react-icons/md";
import Shipping from "../components/Shipping"


export default function CartScreen() {

    const { cartItems, shippingPrice, taxPrice, totalPrice, itemPrice } = useSelector((state) => state.shop)
    const dispatch = useDispatch()
 
  
    const increaseCount = (item) => {
        dispatch(updateCartQty({ _id: item._id, qty: item.qty + 1}))

    }
    const decreaseCount = (item) => {
        dispatch(updateCartQty({_id: item._id, qty: item.qty > 1 ? item.qty - 1 : item.qty}))
    }

    const removeFromCart = (id)=> {
        dispatch(removeItem(id))
    }
  

  return (
    <>
    <PageHeader image={mxw}>
        <p className='font-avada2 tracking-wider text-7xl text-white text-center uppercase' >cart</p>
    </PageHeader>
    {cartItems.length === 0 ? (
        <div className="m-10">
            <Message type="">
                <div className="flex justify-between">
                    <span>Your Cart Is Empty</span>
                    <Link to='/menu' className="flex gap-x-2 border px-2 py-1 bg-slate-100 hover:bg-slate-500/70 hover:text-white transition ease-in-out duration-500 rounded-full items-center"><span>Menu</span> <MdMenuBook /></Link>
                </div> 
            </Message>
            
        </div>

        ) :
        (
            <div className="mx-10 my-20 grid grid-cols-3 gap-x-4">
            <div className="col-span-2">
                <section>
                    <header className="font-avada2 text-slate-700 text-3xl gap-x-4 grid grid-cols-6 my-10">
                        <span className="col-span-2">product</span>
                        <span>price</span>
                        <span>quantity</span>
                        <span>subtotal</span>
                        <span></span>
                    </header>
                    <main>
                        {cartItems.map((item) => (
                                    <div className="grid grid-cols-6 gap-x-4 my-6 items-center font-avada1 text-lg text-slate-700" key={item._id}>
                                        <span className="col-span-2" ><Link to={`/menu/${item._id}/takeout`} className="flex items-center gap-x-4"><img className="w-24 h-24 object-cover" src={item.image} alt="" /> <span>{item.name}</span></Link></span>
                                        <span>${item.price}</span>
                                        <span className="border w-24 flex justify-between">
                                            <button className="border px-2" onClick={()=> decreaseCount(item)}>-</button>
                                            <span className="">{item.qty}</span>
                                            <button className="border px-2" onClick={()=> increaseCount(item)}>+</button>
                                            </span>
                                        <span>${(item.qty * item.price).toFixed(2)}</span>
                                        <button onClick={()=> removeFromCart(item._id) }><MdDeleteForever className="w-6 h-6" /></button>
                                        
                                    </div>
                        ))}
    
    
                    </main>
                    
                </section>

                <Shipping />
    
            </div>
            <div>
                <div className="relative bg-cover bg-center h-[550px]" style={{backgroundImage: `url(${mxw})`}}>
                    <div className="p-8 grid gap-y-10 bg-black/50 absolute w-full h-full text-white font-avada2">
                        <h1 className="text-3xl">Cart total: {cartItems.reduce((acc, item)=> acc + item.qty, 0)} items</h1>
                        <p className="flex justify-between text-xl">
                            <span>subtotal</span>
                            <span className="font-avada1">$ {itemPrice} </span>
                        </p>
                        <p className="flex justify-between text-xl">
                            <span>shipping</span>
                            <span className="font-avada1">Shipping to Nigeria </span>
                        </p>
                        <p className="flex justify-between text-xl">
                            <span>shipping fee/tax</span>
                            <span className="font-avada1">${shippingPrice}/{taxPrice}</span>
                        </p>
                        <p className="flex justify-between text-xl">
                            <span>total</span>
                            <span className="font-avada1">${totalPrice}</span>
                        </p>
                        <button className="my-1 font-workSans w-full uppercase bg-[#BDA16B] hover:text-black p-3 hover:bg-white transition ease-in-out duration-300">proceed to checkout</button>
                        

                    </div>

                </div>
            </div>
            
        </div>
        )}

    </>

  )
}
