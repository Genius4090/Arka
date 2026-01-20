

function SliderItem({content,sliderImg}){
    return <li className="flex items-center cursor-pointer gap-4"> <img src={sliderImg} alt="slider__logo" /><p className="text-[#A1A1A1] text-[15px] w-[60px]">{content}</p></li>

}

export default SliderItem