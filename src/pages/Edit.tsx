import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { userType } from "../type";
import {  useSelector } from "react-redux";
import { RootState } from "../app/Store";

const Edit = () => {
  const [updateUser, setUpdateUser] = useState<userType>({
    name: "",
    email: "",
    age: "",
    gender: "",
    description: "",
    id: "",
  });

  const { users, loading } = useSelector((state: RootState) => state.userStore);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = users.find((user) => user.id === id);
      user && setUpdateUser(user);
    }
  }, []);

  const getUserData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto block max-w-xl my-8 rounded-lg  p-6 shadow-2xl border-2 border-zinc-300">
      <h1 className="text-center text-2xl font-semibold mb-6 ">
        Add New User Detail
      </h1>
      <form onSubmit={handleSubmit}>
        <div className=" mb-6 flex items-center gap-2 ">
          <label className="max-w-[90%] text-black ">Name</label>
          <input
            type="text"
            name="name"
            value={updateUser.name}
            onChange={getUserData}
            className=" min-h-[auto] w-full rounded-lg border-0 bg-gray-100 px-4 py-3 outline-none "
            placeholder=" Enter name"
          />
        </div>

        <div className=" mb-6 flex items-center gap-2 ">
          <label className="max-w-[90%] text-black ">Email</label>
          <input
            type="text"
            name="email"
            value={updateUser.email}
            onChange={getUserData}
            className=" min-h-[auto] w-full rounded-lg border-0 bg-gray-100 px-4 py-3 outline-none "
            placeholder=" Enter email"
          />
        </div>

        <div className=" mb-6 flex items-center gap-2 ">
          <label className="max-w-[90%] text-black mr-2 ">Age</label>
          <input
            type="number"
            value={updateUser.age}
            onChange={getUserData}
            name="age"
            className=" min-h-[auto] w-full rounded-lg border-0 bg-gray-100 px-4 py-3 outline-none "
            placeholder=" Enter age"
          />
        </div>

        <div className=" mb-6 flex items-center gap-2 flex-col">
          <label className="max-w-[90%] text-black mr-2 ">Description</label>
          <textarea
            name="description"
            value={updateUser.description}
            onChange={getUserData}
            className="min-h-[8rem] w-full rounded-lg border-0 bg-gray-100 px-4 py-3 outline-none"
            placeholder="Write few words..."
          />
        </div>

        <div className=" flex items-center gap-8 justify-center">
          <div className="flex items-center ">
            <label htmlFor="Male" className="max-w-[90%] text-black mr-2 ">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              checked = {updateUser.gender === "Male"}
              onChange={getUserData}
            />
          </div>

          <div className="flex items-center ">
            <label htmlFor="Female" className="max-w-[90%] text-black mr-2 ">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              checked = {updateUser.gender === "Female"}
              onChange={getUserData}
            />
          </div>

          <div className="flex items-center ">
            <label htmlFor="Other" className="max-w-[90%] text-black mr-2  ">
              Other
            </label>
            <input
              type="radio"
              name="gender"
              id="Other"
              value="Other"
              checked = {updateUser.gender === "Other"}
              onChange={getUserData}
            />
          </div>
        </div>

        <div className="flex justify-center mt-6 w-full">
          <button
            type="submit"
            className=" border-none py-2 px-16 rounded-xl bg-gray-600 text-white font-semibold hover:bg-gray-500 active:bg-gray-600 "
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
