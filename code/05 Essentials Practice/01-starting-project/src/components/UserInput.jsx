import { useState } from "react";

export default function UserInput({ handleInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>inital investment</label>
          <input
            type="number"
            required
            value={userInput.initial}
            onChange={(event) => handleInput("initial", event.target.value)}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={userInput.annual}
            onChange={(event) => handleInput("annual", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={userInput.Return}
            onChange={(event) => handleInput("Return", event.target.value)}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
