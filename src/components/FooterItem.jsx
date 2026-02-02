
import {Footer1,Footer2,Footer3} from "../assets/icons"

function FooterItem({content}) {
  const icons = [Footer1,Footer2,Footer3]
  return (
    <li className="text-[#3D5675] text-[15px]">
    {content.isIcons ? (<div className="flex gap-2.5">{icons.map(item=>  <img src={item} alt="footer__icon" width={24} height={24}/>)}</div>) : (<a href="#">{content.title}</a>)}  
  
    </li>
  )
}

export default FooterItem