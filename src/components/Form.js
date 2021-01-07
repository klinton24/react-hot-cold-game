import React from "react";
import { TextField, Button } from "@material-ui/core";

const Form = ({ returnGuessToApp }) => {
  const onSubmit = e => {
    e.preventDefault();
    const guess = e.target.elements.guess.value;
    e.target.elements.guess.value = "";
    returnGuessToApp(guess);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <TextField
        className="formText"
        fullWidth
        type="number"
        name="guess"
        label="Enter your guess.. 1-1000"
        required
      />
      <Button
        style={{ marginTop: "10px" }}
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
      >
        Guess
      </Button>
    </form>
  );
};

export default Form;
