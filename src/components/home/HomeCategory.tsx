import { Link } from "react-router-dom";

const HomeCategory = () => {
  const CategoryId = {
    all: "all",
    ps5: "ps5",
    ps4: "ps4",
    xbox: "xbox",
    switch: "switch",
  }

  return (
    <>
      <div className="border pl-5 p-3 bg-blue-950 text-white">카테고리</div>
      <div className="border p-5 bg-blue-500 h-full">
        <ul className="cursor-pointer text-white">
          <Link to= {`/category/${CategoryId.all}`}>
            <li className="border-b hover:text-gray-400 mb-5">전체 카테고리 보기</li>
          </Link>
          <Link to= {`/category/${CategoryId.ps5}`}>
           <li className="border-b hover:text-gray-400 mb-3">플레이스테이션5</li>
          </Link>
          <Link to= {`/category/${CategoryId.ps4}`}>
            <li className="border-b hover:text-gray-400 mb-3">플레이스테이션4</li>
          </Link>
          <Link to= {`/category/${CategoryId.xbox}`}>
            <li className="border-b hover:text-gray-400 mb-3">XBOX ONE</li>
          </Link>
          <Link to= {`/category/${CategoryId.switch}`}>
            <li className="border-b hover:text-gray-400 mb-3">닌텐도 SWITCH</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default HomeCategory;
