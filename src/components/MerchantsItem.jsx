function MerchantsItem({item}) {
  return (
    <li className={`h-[294px] flex items-center gap-[106px] ${item.isReverse && "flex-row-reverse"}`}>
              <img src={item.img} alt="merchang__bg" />
              <div className="w-[400px] flex flex-col gap-3">
                <p className="text-[#011F3A] text-2xl">{item.description}</p>
                <div className="flex gap-5 items-center">
                    <img src={item.avatar} alt="user__img" />
                    <div>
                        <h2 className="text-[#011F3A] text-lg">{item.userName}</h2>
                        <h3 className="text-[#A1A1A1] text-[15px]">{item.userJob}</h3>
                    </div>
                    <button className="text-[#3D5675] text-sm tracking-wider uppercase bg-[#F2F2F2] py-3.5 px-6.5 rounded-[44px] cursor-pointer">Their story</button>
                </div>
              </div>
    </li>
  )
}

export default MerchantsItem