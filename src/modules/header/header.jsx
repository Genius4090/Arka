import {LogoImg,cartImg} from "../../assets/images/"
import NavItem from "../../components/NavItem"
function Header() {
  let navs = ["Start your design","All products","Inspiration","About"]
    return (
        <nav className="w-full h-16 flex items-center justify-between px-6 fixed bg-white">
          <a href="#">
          <img src={LogoImg} alt="logoImg" width={85} height={24} />
          </a>
          <ul className="flex items-center text-[#011F3A] uppercase tracking-[1.96px] gap-11">
             {navs.map((item,index)=> <NavItem key={index} content={item} id={index}/>)}
            
            
          </ul>
          <div className="flex gap-6 items-center tracking-[1.96px] justify-center">
            <a href="#">ACCOUNT</a>
            <a href="#" className="mb-1">
               <img src={cartImg} alt="cart__logo" width={24} height={24} />
            </a>
          </div>
        </nav>
    )
}

export default Header