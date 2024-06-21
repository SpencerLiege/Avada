/* eslint-disable react/prop-types */


export default function ProdcutList({ products }) {
  return (
    <div className="space-y-4">
        <img className='h-36 w-[330px] object-cover' src={products.image} alt="" />
        <p className="space-x-10">
            <span className="font-avada2 text-3xl">{products.name}</span>
            <span className="font-avada3 font-medium">${products.price}</span>
        </p>
        <p className="font-serif text-lg">
            {products.description}
        </p>
    </div>
  )
}
