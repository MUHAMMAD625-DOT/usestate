import React, { useState } from "react";

function ComponentA() {
  const [Details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    
    const {name, value} = e.target;
    
    setDetails((prev)=>{
        return{...prev,[name]:value}
    })    
  };
  const HandleSubmit = () =>{
    e.preventDefault ();
    console.log(Details);
  }


  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <h3>Name:</h3>{" "}
        <input
          type="text"
          className="border bg-slate-100"
          onChange={handleChange} name="name"
        />
        <h3>Email:</h3>{" "}
        <input
          type="Email"
          className="border bg-slate-100"
          onChange={handleChange} name="email"
        />
        <h3>Password:</h3>{" "}
        <input
          type="password"
          className="border bg-slate-100"
          onChange={handleChange} name="password"
        />
        <h3>Address:</h3>{" "}
        <textarea
          name="address"
          id=""
          className="border bg-slate-100"
          onChange={handleChange} 
        ></textarea>
        <button type="submit" className="border bg-slate-100">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default ComponentA;
