import React, { useState } from "react";
import "./task1.css";
const Task1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnText, setBtnText] = useState("Submit Me ✌️");
  const handleSubmit = () => {
    setBtnText("Submitted 🥳");
    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="t1MainContainer">
        <div className="t1Container">
          <p>Hello</p>
          <div className="t1InputContainer">
            <input
              type="text"
              placeholder="Enter Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>{btnText}</button>
        </div>
      </div>
    </>
  );
};

export default Task1;
