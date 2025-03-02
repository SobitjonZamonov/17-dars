import React from "react";
import { Card } from "../../../components/card";


export const Services = () => {
    return (
        <div className="flex w-full h-[681px] justify-center items-center">
            <div className="w-[1240px] h-[609px]">
                <h2 className="font-bold text-[48px] text-center">
                    NEW ARRIVALS
                </h2>
                <div className="flex justify-center w-[1240px] h-[408px] gap-[20px] mt-[55px]">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <button className="pt-[15px] pb-[15px] pl-[67px] pr-[67px] rounded-[62px] bg-[#fff] border text-[#000] font-medium text-[16px] cursor-pointer ml-[40%] mt-[36px]">View All</button>
            </div>
        </div>
    )
}