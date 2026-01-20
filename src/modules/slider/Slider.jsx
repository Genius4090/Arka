import Slider__1 from "../../assets/images/slider__1.svg"
import Slider__2 from "../../assets/images/slider__2.svg"
import Slider__3 from "../../assets/images/slider__3.svg"
import SliderItem from "../../components/SliderItem.jsx"
function Slider() {
  return (
    <div className=' flex items-center justify-center'>
        <div className="container">
           <ul className="flex items-center justify-between py-5">
           <SliderItem content={`Shopify Integrated`} sliderImg={Slider__1}/>
        <SliderItem content={"Amazon Certified"} sliderImg={Slider__2}/>
        <SliderItem content={"Eco-Friendly"} sliderImg={Slider__3}/>
           </ul>
       

           
        </div>
    </div>
  )
}

export default Slider