import { LogoImg } from "../../assets/images"
import FooterItem from "../../components/FooterItem"
import Button from "../../components/Button"
const footerList = [
    {
        id:1,
        content:[
            {
                title:"Custom Design"
            }, {
                title:"All Products"
            }, {
                title:"Inspiration"
            }, {
                title:"Sustainability"
            }, {
                title:"Affiliate Program"
            }, {
                title:"Request Custom Quote"
            }, {
                title:"Request Dieline"
            }
        ]
    },
    {
        id:2,
        content: [
            {
                title:"About Us"
            }, {
                title:"Blog"
            }, {
                title:"Partners"
            }, {
                title:"Contact Us"
            }, {
                title:"FAQ"
            }, {
                title:"Terms & Conditions"
            }
        ]
    },
    {
        id:3,
        
        content: [
            {
                title: "Shopify App",
                
               
            },
            {
                title: "14 Day Free Shopify Trial",
            },
            {
                title: "BigCommerce",
            },
            {
                isIcons: true,
            }
        ]
    },
]

function Footer() {
  return (
    <div className="bg-[#F2F3F4]">
        <div className="container flex items-start justify-between py-16">
            <img src={LogoImg} alt="site__logo" />
            <div className="flex fap-10 gap-20">
             {footerList.map(item=> <ul className="flex flex-col  gap-[17px]">
                {item.content.map(titles=> <FooterItem content={titles}/>)}
             </ul>)}
            </div>
            <div className="flex flex-col gap-3">
                <h2>Get exclusive offers and tips.</h2>
                <form className="flex flex-col  items-start gap-3">
                    <input type="text" placeholder="Your email" className="py-2.5 px-6  w-[280px] rounded-[34px] text-[15px] placeholder:italic text-gray-700 bg-white outline-none"/>
                    <button className="cursor-pointer bg-[#3D5675] py-2 px-10 rounded-[44px] font-bold text-lg text-[#FFFFFF]">Join instantly</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer