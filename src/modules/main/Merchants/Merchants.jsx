import {Merchant1,Merchant2, User1,User2,User3,MerchantBg1,MerchantBg2,MerchantBg3} from "../../../assets/images"
import MerchantsItem from "../../../components/MerchantsItem"
import Button from "../../../components/Button"

function Merchants() {
  const merchantsList = [
    {
        img: MerchantBg1,
        description: "“Arka’s team is super fast, knowledgeable, and easy to work with - highly recommended!”",
        avatar: User1,
        userName: "Jesse",
        userJob: "Subscription Catalyst"
    }, {
        img: MerchantBg2,
        description: "“I really like Arka because it’s a really nice box, I’ve gotten a lot of compliments on&nbsp;it.”",
        avatar: User2,
        userName: "Leslie",
        userJob: "Burgundy Fox",
        isReverse: true
    }, {
        img: MerchantBg3,
        description: "“I love how easily it was to customize the box, and you guys were more affordable.”",
        avatar: User3,
        userName: "Anthony",
        userJob: "Lipstick Junkie"
    }
  ]
  return (
    <div className="w-full">
        <h2 className="font-bold text-[32px] text-[#011F3A] mt-14 text-center">Merchants love Arka</h2>
        <div className="my-14 shadow-2xl bg-white">
            <div className="flex items-center justify-around py-24">
                <img src={Merchant1} alt="merchant__logo" />
                <img src={Merchant2} alt="merchant__logo" />
            </div>
           <ul className="flex flex-col gap-14">
            {merchantsList.map(item=> <MerchantsItem key={item.userName} item={item}/>)}
           </ul>
          
        </div>
        <div className="py-[120px] flex flex-col items-center gap-14">
            <h2 className="text-[#011F3A] font-bold text-3xl">Let`s get to it</h2>
           <div className="flex gap-3">
           <Button content={"Start your design"} bgColor={"gray"}/>
           <Button content={"Browse all products"}/>
           </div>
        </div>
    </div>
  )
}

export default Merchants