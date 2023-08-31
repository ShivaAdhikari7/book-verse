import { useState, useContext } from "react";
import axios from "axios";
import Card from "../../shared/components/UI/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import AuthContext from "../../shared/context/auth-context";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./Auth.css";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";
import ErrorModal from "../../shared/components/UI/ErrorModal";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoginMode, setLoginMode] = useState(true);

  const switchModeHandler = () => {
    setLoginMode(!isLoginMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "http://localhost:90/api/users/login",
          {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }
        );

        const responseData = await response.data;
        console.log(responseData);

        if (response.status !== 200) {
          throw new Error(responseData);
        }
        setIsLoading(false);
        login();

        //   const response = await fetch("http://localhost:90/api/users/login", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       email: formState.inputs.email.value,
        //       password: formState.inputs.password.value,
        //     }),
        //   });
        //   console.log(response);
        //   const responseData = await response.json();
        //   console.log(responseData);
        //   if (!response.ok) {
        //     throw new Error(responseData.message);
        //   }
        //   setIsLoading(false);
        //   login();
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "http://localhost:90/api/users/signup",
          {
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }
        );
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        login();
      } catch (error) {
        setIsLoading(false);
        setError(error.message || "Something went wrong");
      }
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      {error && <ErrorModal error={error} onClear={errorHandler} />}
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}

          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </>
  );
};

export default Auth;
