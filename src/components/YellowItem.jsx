import Button from "./Button"

function YellowItem({item}) {
  return (
    <li className={`flex flex-col items-center gap-3.5 px-30 py-24 relative`}>
      <img src={item.img} alt={item.title} width={210} height={210}/>
      <h2 className="font-bold text-2xl">{item.title}</h2>
      <p className="text-[#3D5675] text-[15px] w-[356px] text-center">{item.description}</p>
      <Button content={item.btnContext} bgColor={"white"}/>
      {item.rightLine && <p className="absolute right-0 w-[2px] h-[410px] bg-[#A1A1A166]"></p>}
    </li>
  )
}

export default YellowItem