
import Instruction__1 from "../../../assets/images/Instruction__1.png"
import Instruction__2 from "../../../assets/images/Instruction__2.png"
import Instruction__3 from "../../../assets/images/Instruction__3.png"

function Instruction() {
  return (
    <div className="w-full h-[744px] bg-[#72BDA3] my-20 flex flex-col items-center justify-center gap-10">
        <h2 className="text-[#011F3A] text-[32px]">Fast and easy custom boxes your customers will love</h2>
        <div>
            <ul className="flex item gap-[100px]">
                <li className="flex flex-col items-center text-center"> 
                  <img src={Instruction__1} alt="instruction__img__1" className="cursor-pointer"/> <span className="w-[200px]"><h3 className="text-lg text-[#011F3A] tracking-[0.38px]">Your Order</h3> <p className="text-[15px] text-[#3D5675] mt-2">Design and order boxes in a few clicks.</p></span></li>
                <li className="flex flex-col items-center  text-center">
                  <img src={Instruction__2} alt="instruction__img__2" className="cursor-pointer"/> <span className="w-[200px]"><h3 className="text-lg text-[#011F3A] tracking-[0.38px]">We Proof</h3> <p className="text-[15px] text-[#3D5675] mt-2">Approve your designs before production.</p></span></li>
                <li className="flex flex-col items-center  text-center">
                  <img src={Instruction__3} alt="instruction__img__3" className="cursor-pointer"/> <span  className="w-[200px]"><h3 className="text-lg text-[#011F3A] tracking-[0.38px]">We Print & Ship</h3> <p className="text-[15px] text-[#3D5675] mt-2">Your order gets printed and shipped with tracking.</p></span></li>
            </ul>
           
            
            
        </div>
    </div>
  )
}

export default Instruction