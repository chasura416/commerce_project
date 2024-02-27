

const HomeCategory = () => {
  return (
    <>
      <div className="border pl-5 p-3 bg-blue-950 text-white">카테고리</div>
      <div className="border p-5 bg-blue-500 h-full">
        <ul className="cursor-pointer text-white">
          <li className="border-b hover:text-gray-400 mb-5">전체 카테고리 보기</li>
          <li className="border-b hover:text-gray-400 mb-3">플레이스테이션5</li>
          <li className="border-b hover:text-gray-400 mb-3">플레이스테이션4</li>
          <li className="border-b hover:text-gray-400 mb-3">XBOX ONE</li>
          <li className="border-b hover:text-gray-400 mb-3">닌텐도 SWITCH</li>
        </ul>
      </div>
    </>
  );
};

export default HomeCategory;
