import avadabar from '../assets/avadabar.jpg'
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
        <footer >
            <div className="bg-cover bg-center relative h-[500px]" style={{backgroundImage: `url(${avadabar})` }}>
                <div className='absolute inset-0 bg-gradient-to-b from-black via-black to-transparent'>  
                    <div className='grid place-content-center text-white  mx-96 mt-24 py-6  space-y-6 '>
                        <img className='justify-self-center' src='https://avada.website/restaurant/wp-content/uploads/sites/112/2021/04/logo-svg.svg' alt="" />
                        <span className='font-serif text-center text-xl text-slate-300'>Quam eu proin sit massa condimentum. Volutpat non pulvinar
                        aliquet nunc. Quam eu proin sit massa condimentum.</span>
                        <section className='flex place-content-center py-8 space-x-2' >
                            <TiSocialFacebook className='w-12 h-12 rounded-full p-4 text-black bg-white hover:bg-black hover:text-white transition ease-in-out duration-300' />
                            <RiTwitterXFill className='w-12 h-12 rounded-full p-4 text-black bg-white hover:bg-black hover:text-white transition ease-in-out duration-300' />
                            <IoLogoInstagram className='w-12 h-12 rounded-full p-4 text-black bg-white hover:bg-black hover:text-white transition ease-in-out duration-300' />
                            <FaYoutube className='w-12 h-12 rounded-full p-4 text-black bg-white hover:bg-black hover:text-white transition ease-in-out duration-300' />
                            <FaLinkedinIn className='w-12 h-12 rounded-full p-4 text-black bg-white hover:bg-black hover:text-white transition ease-in-out duration-300'/>
                        </section>
                    </div>
                </div>
            </div>
            <div className='p-6 space-x-2 bg-black text-white text-center font-serif text-[13px]'>
                <span className='text-slate-400'>@copyright 2024 |</span>
                <span>Avada Website Builder <span className='text-slate-400'>by</span> ThemeFusion |</span>
                <span className='text-slate-400'>All Rights Reserved | Powered by</span>
                <span>WordPress</span>

            </div>
        </footer>
    </>
  )
}













