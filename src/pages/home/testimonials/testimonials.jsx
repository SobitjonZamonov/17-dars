import React from "react";
import raiting from "../../../assets/raiting2.svg"
 

export const Testimonials = () => {
    return (
        <div className="flex w-full h-[338px] justify-center">
            <div className="w-[1240px] h-[338px]">
                <h2 className="font-bold text-[48px] mb-[40px]">
                    OUR HAPPY CUSTOMERS
                </h2>
                <div className="flex gap-[20px] justify-center items-center">
                    <div className="w-400px] h-[240px] border rounded-[20px] p-[32px]">
                        <img src={raiting} alt="" />
                        <h3 className="font-bold text-[20px] mt-[15px] mb-[12px]">
                            Sarah M.
                        </h3>
                        <p className="font-normal text-[16px] opacity-40">
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                        </p>
                    </div>

                    <div className="w-400px] h-[240px] border rounded-[20px] p-[32px]">
                        <img src={raiting} alt="" />
                        <h3 className="font-bold text-[20px] mt-[15px] mb-[12px]">
                            Sarah M.
                        </h3>
                        <p className="font-normal text-[16px] opacity-40">
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                        </p>
                    </div>

                    <div className="w-400px] h-[240px] border rounded-[20px] p-[32px]">
                        <img src={raiting} alt="" />
                        <h3 className="font-bold text-[20px] mt-[15px] mb-[20px]">
                            Sarah M.
                        </h3>
                        <p className="font-normal text-[16px] opacity-40">
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                        </p>
                    </div>
                </div>            
            </div>
        </div>
    )
}