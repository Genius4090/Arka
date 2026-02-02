import { Yellow1, Yellow2 } from "../../../assets/images"
import YellowItem from "../../../components/YellowItem"

function YellowPage() {
    const yellowList = [
        {
            img: Yellow1,
            title: "Couldn't find a size you need?",
            description: "We’ll work directly with you to create a fully branded packaging system.",
            btnContext: "Request a quote",
            rightLine: true
        },
        {
            img: Yellow2,
            title: "Need a free dieline template?",
            description: "Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 business days.",
            btnContext: "Request dieline"
        }
    ]
  return (
    <div className="bg-[#FFCA3A] w-full my-15">
        <ul className="flex ">
        {yellowList.map(item=> <YellowItem item={item} key={item.title}/>)}
        </ul>
    </div>
  )
}

export default YellowPage