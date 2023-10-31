import React, { useState } from "react";

export default function HTTPForm({ onSubmit }) {
  const [input, setInput] = useState({ url: "" });

  function handleChange(event) {
    setInput({
      url: event.target.value,
    });
  }

  return (
    <div>
      <h3>Sandbox URL</h3>
      <form onSubmit={onSubmit(input)}>
        <label htmlFor="sandboxUrl">URL</label>
        <input
          value={input.url}
          onChange={handleChange}
          id="sandboxUrl"
          type="text"
        />
        <button type="button">cancel</button>
        <button type="submit">save</button>
      </form>
    </div>
  );
}
