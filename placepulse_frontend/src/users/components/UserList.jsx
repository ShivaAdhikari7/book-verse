import Card from "../../shared/components/UI/Card";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = ({ items }) => {
  console.log(items.length);
  if (items.length === 0) {
    return (
      <Card className="center">
        <p>No users found</p>
      </Card>
    );
  }
  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          placeCount={user.places.length}
          name={user.name}
        />
      ))}
    </ul>
  );
};
export default UserList;
