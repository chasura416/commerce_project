import { Link } from "react-router-dom"

const MyPageList = () => {
  return (
    <aside className="w-36 h-screen bg-blue-600 p-3 pt-5">
      <ul className="cursor-pointer flex flex-col gap-5 font-semibold text-white">
        <Link to={``}>
          <li className="border-b hover:text-gray-400">내가 쓴 글</li>
        </Link>
        <Link to={``}>
          <li className="border-b hover:text-gray-400">내가 좋아요 한 글</li>
        </Link>
        <li>asdf</li>
      </ul>
      <div></div>
      <div></div>
    </aside>
  )
}

export default MyPageList