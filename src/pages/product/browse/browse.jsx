import React from "react";
import browse1 from "../../../assets/browse2-image.png"
import browse2 from "../../../assets/browse3-image.png"
import browse3 from "../../../assets/browse4-image.png"
import browse4 from "../../../assets/browse5-image.png"


export const Browse = () => {
    return (
        <div className="flex justify-center items-center w-full h-[1026px]">
            <div className="bg-[#f0f0f0] w-[1239px] h-[866px] rounded-[40px]">
                <h2 className="font-bold text-[48px] text-center mt-[70px]">BROWSE BY DRESS STYLE</h2>
                <div className="ml-[64px] mt-[64px]">
                    <div className="flex gap-[20px]">
                        <div>
                            <img src={browse1} alt="" />
                        </div>
                        <div>
                            <img src={browse2} alt="" />
                        </div>
                    </div>
                    <div className="flex gap-[20px] mt-[20px]">
                        <div>
                            <img src={browse3} alt="" />
                        </div>
                        <div>
                            <img src={browse4} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}