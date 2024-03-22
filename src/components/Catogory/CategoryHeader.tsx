import { useParams } from "react-router-dom"

const FLATFORM: Record<string, {title: string}> = {
  all: { title: 'Category All' },
  ps5: { title: 'PlayStation5' },
  ps4: { title: 'PlayStation4' },
  xbox: { title: 'XBOX ONE' },
  switch: { title: 'NINTENDO SWITCH' },
};

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