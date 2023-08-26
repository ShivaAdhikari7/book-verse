import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/FormElements/utils/validators";
import "./NewPlace.css";
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Input field should not be empty"
      />
    </form>
  );
};
export default NewPlace;
