import Advantage from "./advantage/Advantage"
import Instruction from "./Instruction/Instruction"
import MainCard from "./MainCard/MainCard"

function Main() {
  return (
    <div className="bg-[#EEEEEE]">
       <div className="container flex justify-between py-14">
        <h2 className="text-[32px] text-[#011F3A]">Products you can customize</h2>
        <button className="py-3 px-6 bg-[#3D5675] rounded-[44px] uppercase text-white text-sm tracking-[1.96px] cursor-pointer">Browse all products</button>
       </div>
       <div className="container flex flex-wrap">
        <MainCard/>
        <Instruction/>
        <Advantage/>
       </div>
    </div>
  )
}

export default Main