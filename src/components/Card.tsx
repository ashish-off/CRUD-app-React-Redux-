import React from "react";
import { userType } from "../type";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/UserDetailSice";
import { Link } from "react-router-dom";

interface cardPropType {
  user: userType;
}

const Card: React.FC<cardPropType> = ({ user }) => {
  const [showMore, setShowMore] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-200 w-xs py-2 px-4 flex flex-col justify-center">
      <main className="mb-2 text-lg">
        <h1 className="text-xl font-semibold text-center mb-2">{user.name}</h1>
        <h1>Gender : {user.gender}</h1>
        <h1>Age: {user.age}</h1>

        {showMore && (
          <div>
            <h1>Email : {user.email}</h1>
            <pre className="my-2 text-lg text-gray-700">{user.description}</pre>
          </div>
        )}
      </main>

      <div className="flex justify-center gap-4 items-center text-gray-600 font-semibold">
        <button
          className="transition-all duration-150 hover:text-black hover:scale-105 active:text-gray-600 active:scale-95"
          onClick={() => setShowMore(!showMore)}
        >
          View
        </button>
        <Link
          to={`/edit/${user.id}`}
          className="transition-all duration-150 hover:text-black hover:scale-105 active:text-gray-600 active:scale-95"
        >
          Edit
        </Link>
        <button
          className="transition-all duration-150 hover:text-black hover:scale-105 active:text-gray-600 active:scale-95"
          onClick={() => dispatch(deleteUser(user.id) as any)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Card;
