import React from "react";
import versace from "../../../assets/versace.svg"
import zara from "../../../assets/zara.svg"
import gucci from "../../../assets/gucci.svg"
import prada from "../../../assets/prada.svg"
import calvincelvin from "../../../assets/calvin-clein.svg"


export const Hero = () => {
    return (
        <div className="flex justify-center items-center w-full h-[122px] bg-[#000]">
            <div className="flex justify-center items-center gap-[106px]">
                <div>
                    <img src={versace} alt="" />
                </div>
                <div>
                    <img src={zara} alt="" />
                </div>
                <div>
                    <img src={gucci} alt="" />
                </div>
                <div>
                    <img src={prada} alt="" />
                </div>
                <div>
                    <img src={calvincelvin} alt="" />
                </div>
            </div>
        </div>
    )
}