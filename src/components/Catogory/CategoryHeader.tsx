import { useParams } from "react-router-dom"
import { FLATFORM } from "./categoryFlatform";

const CategoryHeader = () => {
  const { id } = useParams();
  if(!id) return;

  return (
    <>
      <div className="border-b text-4xl">{FLATFORM[id].title}</div>
    </>
  )
}

export default CategoryHeader;