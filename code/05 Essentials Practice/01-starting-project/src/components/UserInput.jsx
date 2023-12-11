import { useState } from "react";
export default function data({ handleInput, data }) {
  const [initial, setInitial] = useState(10000);
  const [auunal, setAnnual] = useState(1200);
  const [Return, setReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  return (
    <div id="user-input">
      <div class="input-group">
        <label>inital investment</label>
        <input
          type="number"
          required
          value={data.initial}
          onChange={handleInput}
        />
      </div>
      <div class="input-group">
        <label>annual investment</label>
        <input
          type="number"
          required
          value={data.annual}
          onChange={handleInput}
        />
      </div>
      <div class="input-group">
        <label>expected return</label>
        <input
          type="number"
          required
          value={data.Return}
          onChange={handleInput}
        />
      </div>
      <div class="input-group">
        <label>duration</label>
        <input
          type="number"
          required
          value={data.duration}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}
