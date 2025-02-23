import React from "react";
import { userType } from "../type";

interface cardPropType {
  user: userType;
}

const Card: React.FC<cardPropType> = ({ user }) => {
  return (
    <div className="bg-gray-200 w-xs py-2 px-4 flex flex-col justify-center">
      <main className="mb-2 text-lg">
        <h1 className="text-xl font-semibold text-center mb-2">{user.name}</h1>
        <h1>Email : {user.email}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Gender : {user.gender}</h1>
      </main>
      <p className="mb-2">{user.description}</p>

      <div className="flex justify-center gap-4 items-center text-gray-600 font-semibold">
        <a href="#">View</a>
        <a href="#">edit</a>
        <a href="#">delete</a>
      </div>
    </div>
  );
};

export default Card;
