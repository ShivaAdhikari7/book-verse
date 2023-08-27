import { useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/FormElements/utils/validators";

import Button from "../../shared/components/FormElements/Button";
import "./NewPlace.css";

const initialState = {
  inputs: {
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
  },
  isValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      var formIsValid = true;
      for (let inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return { state };
  }
};

const NewPlace = () => {
  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  const inputHandler = useCallback((id, isValid, value) => {
    dispatchForm({
      type: "INPUT_CHANGE",
      value: value,
      inputId: id,
      isValid: isValid,
    });
  }, []);

  return (
    <form className="place-form">
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

      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};
export default NewPlace;
