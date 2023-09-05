import { useState, useEffect } from "react";
import UserList from "../components/UserList";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";
import ErrorModal from "../../shared/components/UI/ErrorModal";
import { useHttp } from "../../shared/hooks/http-hook";
const User = () => {
  const [users, setUsers] = useState([]);

  const { error, isLoading, sendRequest, clearError } = useHttp();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:90/api/users/"
        );

        setUsers(responseData.users);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
  }, [sendRequest]);
  return (
    <>
      {isLoading && <LoadingSpinner asOverLay />}
      {error && <ErrorModal onClear={clearError} message={error} />}
      {!isLoading && users && <UserList items={users} />}
    </>
  );
};
export default User;
