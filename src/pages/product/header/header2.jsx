import React from "react";
import logo from "../../../assets/logo.svg"



export const Header2 = () => {
    return (
        <div className="flex justify-center gap-[40px] items-center w-full h-[98px]">
            <img src={logo} alt="" />
            <ul className="flex gap-6">
                <li><a href="#">Shop</a></li>
                <li><a href="#">On Sale</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">New Arrivals</a></li>
            </ul>
            <input  type="text" className="w-[577px] h-[48px] bg-[#f0f0f0] p-[12px] rounded-[62px]" placeholder="Search for products..." />
            <a><i className='bx bx-cart-add'></i></a>
            <span><i class='bx bx-user-circle' ></i></span>
        </div>
    )
}