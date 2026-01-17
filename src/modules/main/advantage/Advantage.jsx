import Advantage__1 from "../../../assets/images/Advantage__1.png"
import Advantage__2 from "../../../assets/images/Advantage__2.png"
import Advantage__3 from "../../../assets/images/Advantage__3.png"


function Advantage() {
    return (
        <div className="w-full py-20 px-[42px] flex flex-col justify-center gap-20">
            <h2 className="text-[#011F3A] text-[32px] text-start">The Arka advantage</h2>

            <ul className="flex justify-between gap-[100px] w-full">
                <li className="flex flex-col items-center gap-12">
                    <img src={Advantage__1} alt="instruction__img__1" className="cursor-pointer" width={254} height={254} /> <span className="w-[250px]"><h3 className="text-lg text-[#011F3A] font-bold tracking-[0.36px]">Eco-Friendly Material</h3> <p className="text-[15px] text-[#A1A1A1] mt-2">Order as little as 10, giving you the lowest minimums in the industry at the best prices.</p></span></li>
                <li className="flex flex-col items-ccenter gap-12">
                    <img src={Advantage__2} alt="instruction__img__2" className="cursor-pointer" width={254} height={254} /> <span className="w-[250px]"><h3 className="text-lg text-[#011F3A] font-bold tracking-[0.36px]">Full Outside Print</h3> <p className="text-[15px] text-[#A1A1A1] mt-2">Design what you want - no extra cost! Prices include 100% exterior print, change design whenever!</p></span></li>
                <li className="flex flex-col items-ccenter gap-12">
                    <img src={Advantage__3} alt="instruction__img__3" className="cursor-pointer" width={254} height={254} /> <span className="w-[250px]"><h3 className="text-lg text-[#011F3A] font-bold tracking-[0.36px]">Proofing</h3> <p className="text-[15px] text-[#A1A1A1] mt-2">After you order, our internal designers help make sure your designs are 100% ready for printing!</p></span></li>
            </ul>
        </div>
    )
}

export default Advantage












