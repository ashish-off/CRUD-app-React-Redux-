import React, { useState } from "react";
// import { useDispatch } from "react-redux";

const CreateForm = () => {
  const [users, setUsers] = useState({});
  
  // const dispatch = useDispatch();

  const getUserData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(users);

  // dispatch()


}


  return (
    <div className="mx-auto block max-w-xl my-8 rounded-lg  p-6 shadow-2xl border-2 border-zinc-300">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-semibold mb-6 ">
          Add New User Detail
        </h1>

        <div className=" mb-6 flex items-center gap-2 ">
          <label className="max-w-[90%] text-black ">Name</label>
          <input
            type="text"
            name="name"
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
            onChange={getUserData}
            className=" min-h-[auto] w-full rounded-lg border-0 bg-gray-100 px-4 py-3 outline-none "
            placeholder=" Enter email"
          />
        </div>

        <div className=" mb-6 flex items-center gap-2 ">
          <label className="max-w-[90%] text-black mr-2 ">Age</label>
          <input
            type="number"
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
            onChange={getUserData}
            className="min-h-[8rem] w-full rounded-lg border-0 bg-gray-100 px-4 py-3 outline-none"
            placeholder="Write few words..."
          />
        </div>

        <div className=" flex items-center gap-8 justify-center">
          <div className="flex items-center ">
            <label className="max-w-[90%] text-black mr-2 ">Male</label>
            <input type="radio" name="gender" value="Male" onChange={getUserData} />
          </div>

          <div className="flex items-center ">
            <label className="max-w-[90%] text-black mr-2 ">Female</label>
            <input type="radio" name="gender" value="Female" onChange={getUserData} />
          </div>

          <div className="flex items-center ">
            <label className="max-w-[90%] text-black mr-2  ">Other</label>
            <input type="radio" name="gender" value= "Other" onChange={getUserData} />
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

export default CreateForm;
