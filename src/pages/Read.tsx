import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/Store";
import { showUser } from "../features/UserDetailSice";
import Card from "../components/Card";
const Read = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.userStore);
  
  useEffect(() => {
    dispatch(showUser());
  }, []);
  

  if (loading) {
    return (
      <h1 className="text-center text-5xl font-semibold transition-all duration-200 mt-50">
        Loading...{" "}
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-4">
        All Information
      </h1>
      <div className="flex flex-wrap gap-4 items-start justify-center w-[90vw] my-4 mx-auto ">
        {users && users.map((user) => <Card key={user.id}  user={user} />)}
      </div>
    </div>
  );
};

export default Read;
