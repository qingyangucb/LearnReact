import Header from "./components/Header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const STARTINGINPUT = {
    initial: 10000,
    annual: 1200,
    Return: 6,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(STARTINGINPUT);
  function handleInput(inputType, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputType]: +newValue,
      };
    });
  }

  const validInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput handleInput={handleInput} userInput={userInput} />
      {!validInput && (
        <p className="center">Please put in positive duration.</p>
      )}
      {validInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;
