import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/auth/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleSignOut = () => {
    logOut();
  };

  return (
    <div className="flex justify-between m-5 mt-8">
      <div>
        <Link to="/">
          <img
            className="cursor-pointer" 
            src="/pslogo.png" alt="logo" width={64} height={1} />
          <p className="font-semibold">ps market</p>
        </Link>
      </div>
      <form className="mt-2 ml-32">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            검색
          </button>
        </div>
      </form>
      <ul className="flex space-x-5 mt-4 cursor-pointer">
        {user ? (
          <li onClick={handleSignOut}>로그아웃</li>
        ) : (
          <Link to="/login">
            <li>로그인</li>
          </Link>
        )}
        <Link to="/cart">
          <li>장바구니</li>
        </Link>
        <Link to="/mypage">
          <li>마이페이지</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
