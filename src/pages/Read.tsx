import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/Store";
import { showUser } from "../features/UserDetailSice";
import Card from "../components/Card";
const Read = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, searchQuery } = useSelector(
    (state: RootState) => state.userStore
  );

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [radioFilter, setRadioFilter] = useState("");

  const handlesearch = () => {
    const searchedUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    const radioFilterUser = searchedUsers.filter((user) => {
      if (radioFilter === "") {
        return user;
      } else {
        return user.gender === radioFilter;
      }
    });
    setFilteredUsers(radioFilterUser);
  };

  useEffect(() => {
    handlesearch();
  }, [searchQuery, radioFilter]);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  if (loading) {
    return (
      <h1 className="text-center text-5xl font-semibold transition-all duration-200 mt-50">
        Loading...{" "}
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-2">
        All Information
      </h1>
      <div className="flex justify-center gap-4 my-2">
        <label htmlFor="All">
          All{" "}
          <input
            type="radio"
            id="All"
            name="radioFilter"
            value=""
            onChange={() => setRadioFilter("")}
            checked={radioFilter === ""}
          />
        </label>

        <label htmlFor="Male">
          Male{" "}
          <input
            type="radio"
            id="Male"
            value="Male"
            name="radioFilter"
            onChange={(e) => setRadioFilter(e.target.value)}
            checked={radioFilter === "Male"}
          />
        </label>

        <label htmlFor="Female">
          Female{" "}
          <input
            type="radio"
            id="Female"
            value="Female"
            name="radioFilter"
            onChange={(e) => setRadioFilter(e.target.value)}
            checked={radioFilter === "Female"}
          />
        </label>

        <label htmlFor="Other">
          Other{" "}
          <input
            type="radio"
            id="Other"
            name="radioFilter"
            value="Other"
            onChange={(e) => setRadioFilter(e.target.value)}
            checked={radioFilter === "Other"}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 items-start justify-center w-[90vw] my-4 mx-auto ">
        {users &&
          filteredUsers.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default Read;
