import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

import Button from "../../shared/components/FormElements/Button";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const place = DummyPlaces.find((place) => placeId === place.id);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: place.title,
        isValid: true,
      },
      descritpion: { value: place.descritpion, isValid: true },
    },
    true
  );

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  console.log(formState.isValid);
  return (
    <form className="place-form" onSubmit={formSubmissionHandler}>
      <Input
        id="title"
        type="text"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Input field should not be empty"
        initialValue={formState.inputs.title.value}
        intialValid={formState.inputs.title.isValid}
        onInput={inputHandler}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Description should have the length of 5 characters at least."
        initialValue={formState.inputs.descritpion.value}
        intialValid={formState.inputs.descritpion.isValid}
        onInput={inputHandler}
      />

      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};
export default UpdatePlace;
