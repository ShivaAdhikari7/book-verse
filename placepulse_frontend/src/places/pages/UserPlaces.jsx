import PlaceList from "../../places/components/PlaceList";
import { useParams } from "react-router-dom";
const DummyPlaces = [
  {
    id: "p1",
    title: "Swyombhu Temple",
    descritpion: "One the the visited place of Syangja",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpArzlcHlMG3hQ-22m3SU68fSSoDoxTo4Jw&usqp=CAU",
    address: "Kathmandu 44600",
    location: {
      lat: 27.6966484,
      lng: 83.7252384,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Swyombhu Temple",
    descritpion: "One the the visited place of Syangja",
    imageUrl:
      "https://images.unsplash.com/photo-1512276926457-a2f9c7ec55b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3d5b21iaHV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    address: "Kathmandu 44600",
    location: {
      lat: 27.6966484,
      lng: 83.7252384,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadPlaces = DummyPlaces.filter((place) => place.creator === userId);
  console.log(loadPlaces);
  return <PlaceList items={loadPlaces} />;
};
export default UserPlaces;
