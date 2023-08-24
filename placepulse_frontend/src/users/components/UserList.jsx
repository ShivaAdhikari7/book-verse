import UserItem from "./UserItem";
import "./UserList.css";

const UserList = ({ items }) => {
  console.log(items);
  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          placeCount={user.places}
          name={user.name}
        />
      ))}
    </ul>
  );
};
export default UserList;
