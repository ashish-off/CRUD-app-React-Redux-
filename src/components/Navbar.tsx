import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../app/Store";
import { useEffect, useState } from "react";
import { searchUser } from "../features/UserDetailSice";

const Navbar = () => {
  const allUsers = useSelector((state: RootState) => state.userStore.users);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(searchQuery));
  }, [searchQuery]);
  return (
    <div>
      <nav className="flex justify-between px-5 sm:px-10 py-1 sm:py-4 items-center bg-transparent border-b-2 border-gray-400 shadow-sm ">
        <h1 className="text-base sm:text-xl mr-2 text-gray-800 font-bold">CreateAsyncThunk CRUD</h1>
        <div className="flex items-center md:gap-4">
          <div className="flex items-center bg-gray-100 py-2 px-4 sm:py-3 sm:px-6 rounded-3xl ">
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
              className="ml-1 sm:ml-2 outline-none bg-transparent w-10 sm:w-25 md:w-50 placeholder:text-sm md:placeholder:text-base "
              type="text"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center ml-2 space-x-4 sm:space-x-6">
            <li className="font-semibold text-gray-700 cursor-pointer">
              {" "}
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-sm text-black border-gray-400 border-b-2 transition-all duration-150"
                      : "text-sm text-gray-700"
                  }`
                }
              >
                All Post ({allUsers.length})
              </NavLink>
            </li>
            <li className="font-semibold text-gray-700 cursor-pointer">
              <NavLink
                to={"/create"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-sm text-black border-b-2 border-gray-400 transition-all duration-150"
                      : "text-sm text-gray-700"
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
