
function Button({bgColor,content}) {
  return <button className={`${bgColor == "gray" ? "bg-[#3D5675] text-white" : "bg-white text-[#3D5675] font-bold"} py-3 px-6 rounded-[44px] uppercase  text-sm tracking-[1.96px] cursor-pointer`}>{content}</button>
  
}

export default Button