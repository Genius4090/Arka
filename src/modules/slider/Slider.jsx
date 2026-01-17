import Slider__1 from "../../assets/images/slider__1.svg"
import Slider__2 from "../../assets/images/slider__2.svg"
import Slider__3 from "../../assets/images/slider__3.svg"
function Slider() {
  return (
    <div className=' flex items-center justify-center'>
        <div className="container">
           <ul className="flex items-center justify-between py-5">
            <li className="flex items-center cursor-pointer gap-4"> <img src={Slider__1} alt="silder__logo__1" /><p className="text-[#A1A1A1] text-[15px]">Shopify <br /> Integrated</p></li>
            <li className="flex items-center cursor-pointer gap-4">  <img src={Slider__2}  alt="silder__logo__2" /><p className="text-[#A1A1A1] text-[15px]">Amazon <br /> Certified</p></li>
            <li className="flex items-center cursor-pointer gap-4"> <img src={Slider__3} alt="silder__logo__3" /><p className="text-[#A1A1A1] text-[15px]">Eco-Frie <br /> ndly</p></li>
           </ul>
          
           
        </div>
    </div>
  )
}

export default Slider