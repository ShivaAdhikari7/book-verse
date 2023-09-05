import { useState, useEffect } from "react";
import UserList from "../components/UserList";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";
import ErrorModal from "../../shared/components/UI/ErrorModal";

const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const onClearErrorHandler = () => {
    setError(null);
  };
  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:90/api/users/");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setUsers(responseData.users);
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong");
      }

      setIsLoading(false);
    };

    getUsers();
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner asOverLay />}
      {error && <ErrorModal onClear={onClearErrorHandler} message={error} />}
      {!isLoading && users && <UserList items={users} />}
    </>
  );
};
export default User;

// const Users = [
//   {
//     id: "u1",
//     name: "Shiva Adhikari",
//     places: 3,
//     image:
//       "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
//   },
// ];
