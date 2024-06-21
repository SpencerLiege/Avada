/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function Menu({children, image}) {
  return (
    <div className='relative bg-cover bg-center h-[450px] my-20' style={{backgroundImage: `url(${image})`}}>
    <div className='absolute inset-0 bg-gradient-to-t from-black/45 from-5% via-transparent to-transparent grid justify-center items-end'>
        <Link className='font-avada3 uppercase text-white text-base tracking-wide p-4' >{children}</Link>
    </div> 
</div>
  )
}
