import starImg from "../assets/images/star.svg"

function NavItem({content,id}) {
    return <li className="flex items-center gap-3 ">
    {id == 0 && <img src={starImg} alt="star__logo" width={16} height={16}/>}
     <a href="#" className="hover:border-b ">{content}</a>
     </li>
    
}

export default NavItem