import CardImg__1 from "../../../assets/images/CardImg__1.png"
import CardImg__2 from "../../../assets/images/CardImg__2.png"
import CardImg__3 from "../../../assets/images/CardImg__3.png"
import CardImg__4 from "../../../assets/images/CardImg__4.png"
import CardImg__5 from "../../../assets/images/CardImg__5.png"
import CardImg__6 from "../../../assets/images/CardImg__6.png"


function MainCard() {

   let products = [
    {
        name: "Custom Carton Boxes",
        img:CardImg__1,
        content: "Create a clean brand presentation with this custom carton box.",
        price:10.44
    },{
        name: "Custom Boxes",
        img:CardImg__2,
        content: "A stylish and strong corrugated cardboard box.",
        price:null
    },{
        name: "Custom Poly Mailers",
        img:CardImg__3,
        content: "A fully custom high quality self sealing poly mailer.",
        price:null
    },{
        name: "Custom Tape",
        img:CardImg__4,
        content: "High quality custom tape to seal your shipping boxes during delivery.",
        price:12.16
    },{
        name: "Custom Stickers",
        img:CardImg__5,
        content: "Add personality to your packages with custom stickers.",
        price:0.41
    },{
        name: "Custom Tissue Paper",
        img:CardImg__6,
        content: "The perfect addition to branding your package.",
        price:6.54
    }
   ]




  return (
    <>
      {products.map(item=>(
        <div className="w-[400px] bg-white border border-[#EEEEEE] pb-4 cursor-pointer">
        <img src={item.img} alt={item.name} />
        <div className="px-6">
        <h2 className="text-[#011F3A] tracking-[0.36px] font-medium">{item.name}</h2>
        <div className="flex justify-between mt-2">
            <p className="text-[#777777] w-[200px] leading-6">{item.content}</p>
           {item.price && ( <p className="font-[15px] text-[#A1A1A1]">Starting at:<br />${item.price}/unit</p>)}
        </div>
        </div>
        </div>
      ))}
      <div className="flex items-center justify-center gap-4 w-full py-11">
        <a href="#" className="text-[#A1A1A1] font-bold text-[15px]">Need unbranded stock items?</a>
        <button className="py-3 px-6 bg-white rounded-[44px] uppercase text-[#3D5675] font-bold text-sm tracking-[1.96px] cursor-pointer">shop stock</button>
      </div>
    </>
   
  )
}

export default MainCard