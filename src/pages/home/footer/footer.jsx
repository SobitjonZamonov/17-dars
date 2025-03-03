import React from "react";
import logo from "../../../assets/logo.svg"
import Social from "../../../assets/Social.svg"
import payment from "../../../assets/payment.svg"
import { Line } from "../../../components/line";
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <div className="w-full h-[499px] bg-[#f0f0f0] mt-[200px]">
            <div className="flex w-[1240px] h-[180px] bg-[#000] ml-[130px] rounded-[20px] relative bottom-[80px] justify-center items-center gap-[212px]">
                <h2 className="font-bold text-[40px] text-[#fff] w-[551px]">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h2>
                <div className="w-[349px] h-[108px]">
                    <input className="p-[12px] bg-[#fff] w-[349px] h-[48px] rounded-[62px]" type="text" placeholder="Enter your email address" />
                    <button className="p-[12px] bg-[#fff] w-[349px] h-[48px] rounded-[62px] font-medium text-[16px] mt-[14px] cursor-pointer">Subscribe to Newsletter</button>
                </div>
            </div>
            <div className="w-full h-[177px] bg-[#f0f0f0] flex justify-center items-center gap-[113px]">
                <div className="w-[248px] h-[177px]">
                    <img src={logo} alt="" />
                    <p className="font-normal text-[14px] leading-[157%] opacity-[40%] mt-[25px] mb-[35px]">
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </p>
                    <img src={Social} alt="" />
                </div>

                <div className="w-[104px] h-[177px]">
                    <h3 className="font-medium text-[16px] text-[#000] mb-[26px]">
                        Company
                    </h3>
                    <ul className="opacity-[80%]">
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">About</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Features</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Works</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Career</a></li>
                    </ul>
                </div>

                <div className="w-[140px] h-[177px]">
                    <h3 className="font-medium text-[16px] text-[#000] mb-[26px]">
                        Help
                    </h3>
                    <ul className="opacity-[80%]">
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Customer Support</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Delivery Details</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Terms & Conditions</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="w-[149px] h-[177px]">
                    <h3 className="font-medium text-[16px] text-[#000] mb-[26px]">
                        FAQ
                    </h3>
                    <ul className="opacity-[80%]">
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Account</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Manage Deliveries</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Orders</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Payments</a></li>
                    </ul>
                </div>

                <div className="w-[104px] h-[177px]">
                    <h3 className="font-medium text-[16px] text-[#000] mb-[26px]">
                        Resources
                    </h3>
                    <ul className="opacity-[80%]">
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Free eBooks</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Development Tutorial</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">How to - Blog</a></li>
                        <li className="mb-[10px] text-[16px] font-normal"><a href="#">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-[1240px] h-[2px] bg-[#e9e9e9] ml-[140px] mt-[50px]"></div>;
            <div className="flex justify-center items-center gap-[630px] mt-[5px]">
                <h3>Shop.co © 2000-2023, All Rights Reserved</h3>
                <img src={payment} alt="" />
            </div>
        </div>
    )
}