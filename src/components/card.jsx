import React from "react";
import futbolka from "../assets/futbolka.png"
import raiting from "../assets/raiting.svg"

export const Card = () => {
    return (
        <div className="w-[295px] h-[408px]">
            <img src={futbolka} alt="" />
            <h3 className="font-bold text-[20px] text-black mt-[16px]">
                T-SHIRT WITH TAPE DETAILS
            </h3>
            <img className="mt-[8px]" src={raiting} alt="" />
            <h3 className="font-bold text-[24px] text-black mt-[8px]">
                $120
            </h3>
        </div>
    )
}

