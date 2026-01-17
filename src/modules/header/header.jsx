import LogoImg from "../../assets/images/LogoImg.svg"
import cartImg from "../../assets/images/cart.svg"
import starImg from "../../assets/images/star.svg"


function Header() {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-6 fixed bg-white">
          <a href="#">
          <img src={LogoImg} alt="logoImg" width={85} height={24} />
          </a>
          <ul className="flex items-center text-[#011F3A] uppercase tracking-[1.96px] gap-11">
            <li className="flex items-center gap-3 ">
            <img src={starImg} alt="star__logo" width={16} height={16}/>
             <a href="#" className="hover:border-b ">Start your design</a>
             </li>
            <li  className="hover:border-b hover:border-b-[#011F3A] cursor-pointer"><a href="#">All products</a></li>
            <li  className="hover:border-b hover:border-b-[#011F3A] cursor-pointer"><a href="#">Inspiration</a></li>
            <li  className="hover:border-b hover:border-b-[#011F3A] cursor-pointer"><a href="#">About</a></li>
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