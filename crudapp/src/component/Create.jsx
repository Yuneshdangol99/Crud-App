import React from "react";
import "./create.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../userreducerslice/UserReducerslice";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  return (
    <div className="createContainer">
      <div className="insideContainer">
        <form onSubmit={handleSubmit}>
          <h2>Add new user</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              className="form-control"
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              autoComplete="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="submitbtn" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
