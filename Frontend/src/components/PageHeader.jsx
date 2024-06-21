/* eslint-disable react/prop-types */


export default function PageHeader({image, children}) {
  return (
    <header className="relative md:h-[410px] bg-black bg-cover bg-center" style={{backgroundImage: `url(${image})`}}>
        <div className="absolute px-32 pt-48 inset-0 bg-gradient-to-b from-black from-20% via-black/55 via-80% to-black/25" >
            {children}
        </div>
    </header>

  )
}
