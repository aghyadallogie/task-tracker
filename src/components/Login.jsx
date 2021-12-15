import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/actions/usersActions";

export const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: "", password: "", id: Date.now() });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAction(user));
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Please Login or Register</h1>
      <label>
        Enter Email please:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </label>
      <label>
        Enter Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
};
