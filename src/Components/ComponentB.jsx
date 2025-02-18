import React, { useState } from "react";

function ComponentB() {
  const [input, setInput] = useState("");
  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="border border-black w-64 h-56 bg-slate-100 rounded-3xl">
      <h1 className="mt-2 ml-2 font-bold">Farm with one input Field</h1>
      <form onSubmit={handleSubmitButton}>
        <input
          type="text"
          value={input}
          autoFocus
          onChange={handleChange}
          className="mt-2 ml-2 border"
        />
        <button
          className="border bg-blue-500 px-2 py-2 rounded-2xl text-white mt-2 ml-2"
          type="submit"
        >
          {" "}
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ComponentB;
