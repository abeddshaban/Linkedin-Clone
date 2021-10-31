import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] =
    useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:
              userAuth.user.displayName,
            profileUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(
        email,
        password
      )
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="full name (required if regestiring)"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) =>
            setProfilePic(e.target.value)
          }
          placeholder="profile pic url (optioonal)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="email "
          type="email"
        />
        <input
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          placeholder=" password"
          type="password"
        />

        <button
          type="submit"
          onClick={loginToApp}
        >
          Sign in
        </button>
      </form>
      <p>
        Not a member?
        <span
          className="login__register"
          onClick={register}
        >
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
