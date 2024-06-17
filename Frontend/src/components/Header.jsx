/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom"
// import NewTakeOut from "./NewTakeOut"
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Header() {
    const navLinks = [
        { title: 'home', arrow: <MdOutlineKeyboardArrowDown /> },
        { title: 'history', arrow: <MdOutlineKeyboardArrowDown /> },
        { title: 'team', arrow: <MdOutlineKeyboardArrowDown /> },
        { title: 'menu', arrow: <MdOutlineKeyboardArrowDown /> },
        { title: 'takeout', arrow: <MdOutlineKeyboardArrowDown /> },
        { title: 'bulletin',  },
        { title: 'reservation',  },
        { title: <RiShoppingBasketLine className="w-6 h-6" />}
        
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
                    <Link className="flex items-center gap-x-0.5 mx-3 uppercase text-base text-[#777882] hover:text-white transition duration-500 hover:ease-in-out  font-WorkSans font-normal self-center tracking-widest " key={index}>
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
