import React from "react";
import bg from "../../../assets/features-background.png"


export const Features = () => {
    return (
        <div className="flex w-full h-[663px]"
            style={{ backgroundImage: `url(${bg})` }}>
            <div className="w-[577px] h-[173px] ml-[100px] mt-[101px]">
                <h2 className="font-bold text-[64px] leading-[100%] text-black">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h2>
                <p className="font-normal text-[16px] leading-[137%] opacity-40 mt-[32px]">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className="pt-[15px] pb-[15px] pl-[67px] pr-[67px] rounded-[62px] bg-[#000] text-[#fff] font-medium text-[16px] cursor-pointer mt-[32px]">Shop Now</button>
                <div className="flex gap-[64px] mt-[48px]">
                    <div>
                        <h3 className="font-bold text-[40px] text-black">
                            200+
                        </h3>
                        <p className="font-normal text-[16px] leading-[137%] opacity-40">
                            International Brands
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-[40px] text-black">
                            2,000+
                        </h3>
                        <p className="font-normal text-[16px] leading-[137%] opacity-40">
                            High-Quality Products
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-[40px] text-black">
                            30,000+
                        </h3>
                        <p className="font-normal text-[16px] leading-[137%] opacity-40">
                            Happy Customers
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
