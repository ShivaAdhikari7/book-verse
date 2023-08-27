import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

import Button from "../../shared/components/FormElements/Button";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={formSubmissionHandler}>
      <Input
        id="title"
        type="text"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Input field should not be empty"
        onInput={inputHandler}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Description should have the length of 5 characters at least."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter the address"
        onInput={inputHandler}
      />

      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};
export default NewPlace;
