/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";


export default function StartRating({ value }) {
    return (
    <div className="flex space-x-6">
        <span> {value >=1 ?  <FaStar className=""/> : value>= 0.5 ? <FaRegStarHalfStroke /> :   <FaRegStar /> } </span>
        <span> {value >=2 ?  <FaStar /> : value>= 1.5 ? <FaRegStarHalfStroke /> :   <FaRegStar /> } </span>
        <span> {value >=3 ?  <FaStar /> : value>= 3.5 ? <FaRegStarHalfStroke /> :   <FaRegStar /> } </span>
        <span> {value >=4 ?  <FaStar /> : value>= 3.5 ? <FaRegStarHalfStroke /> :   <FaRegStar /> } </span>
        <span> {value >=5 ?  <FaStar /> : value>= 4.5 ? <FaRegStarHalfStroke /> :   <FaRegStar /> } </span>
    </div>
    )
}




