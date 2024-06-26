/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom"
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Header() {
    const navLinks = [
        { title: 'home', arrow: <MdOutlineKeyboardArrowDown />, url: '/' },
        { title: 'history', arrow: <MdOutlineKeyboardArrowDown />, url: '/history' },
        { title: 'team', arrow: <MdOutlineKeyboardArrowDown />, url: '/team' },
        { title: 'menu', arrow: <MdOutlineKeyboardArrowDown />, url: '/menu' },
        { title: 'takeout', arrow: <MdOutlineKeyboardArrowDown />, url: '/takeout' },
        { title: 'bulletin', url: '/bulletin' },
        { title: 'reservation', url: '/reservation'  },
        { title: <RiShoppingBasketLine className="w-6 h-6" />, url: '/cart'}
        
    ]
  return (
    <header className="w-full absolute bg-gradient-to-b from-black via-black/30 to-black/0 flex justify-between pt-[45px] pb-3 px-[80px] items-center z-20" >
        {/* Website description */}
        <section className="">
            <img className="w-64" src="https://avada.website/restaurant/wp-content/uploads/sites/112/2021/04/logo-svg.svg" alt="logo" />
        </section>

        {/* Navigation links */}
        <nav className="flex ">
            {
                navLinks.map((x, index)=> (
                    <Link to={x.url} className="flex items-center gap-x-0.5 mx-3 uppercase text-base text-slate-300/90 hover:text-white transition duration-500 hover:ease-in-out  font-WorkSans font-normal self-center tracking-widest " key={index}>
                        <span> {x.title} </span>
                        <span> {x.arrow} </span>
                     </Link>
                ))
            }
            {/* <NewTakeOut />  */}
        </nav>
    </header>
  )
}
