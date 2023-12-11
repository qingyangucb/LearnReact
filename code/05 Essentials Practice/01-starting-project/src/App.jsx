import Header from "./components/Header";
import { useState } from "react";
import UserInput from "./components/UserInput";

const STARTINGINPUT = {
  initial: 10000,
  annual: 1200,
  Return: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(STARTINGINPUT);
  console.log("hi");
  console.log(userInput);
  function handleInput(newInitial, newAnnual, newReturn, newDuration) {
    setUserInput(() => {
      const newInput = {
        initial: newInitial,
        annual: newAnnual,
        Return: newReturn,
        duration: newDuration,
      };
      return newInput;
    });
  }

  return (
    <main>
      <Header />
      <UserInput handleInput={handleInput} data={userInput} />
    </main>
  );
}

export default App;
