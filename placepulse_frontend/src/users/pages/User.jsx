import UserList from "../components/UserList";

const User = () => {
  const Users = [
    {
      id: 1,
      name: "Shiva Adhikari",
      places: 3,
      image:
        "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
    },
  ];
  return <UserList items={Users} />;
};
export default User;
