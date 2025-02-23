import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../app/Store";

const Navbar = () => {
  const allUsers = useSelector((state : RootState) => state.userStore.users);
  return (
    <div>
      <nav className="flex justify-between px-20 pt-4 pb-4 items-center bg-transparent border-b-2 border-gray-400 shadow-sm ">
        <h1 className="text-xl text-gray-800 font-bold">React-redux CRUD</h1>
        <div className="flex items-center md:gap-4">
          <div className="flex items-center bg-gray-100 py-3 px-6 rounded-3xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-0.5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="ml-2 outline-none bg-transparent"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-gray-700 cursor-pointer">
              {" "}
              <NavLink
                to={"/read"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black border-gray-400 border-b-2 transition-all duration-150"
                      : "text-gray-700"
                  }`
                }
              >
                All Post ({allUsers.length})
              </NavLink>
            </li>
            <li className="font-semibold text-gray-700 cursor-pointer">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black border-b-2 border-gray-400 transition-all duration-150"
                      : "text-gray-700"
                  }`
                }
              >
                {" "}
                Create Post
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
