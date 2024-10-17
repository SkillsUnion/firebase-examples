import "./App.css";
import FruitForm from "./Components/FruitForm";
import FruitList from "./Components/FruitList";
import UpdateUserForm from "./Components/UpdateUserForm";
import { useState, useEffect } from "react";
import AuthForm from "./Components/AuthForm";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log("active");
  //   console.log("second useEffect", auth.currentUser);
  //   if (auth.currentUser) {
  //     auth.currentUser.reload().then(() => {
  //       console.log("within .then", auth.currentUser);
  //       setUser(auth.currentUser);
  //       console.log("setUser", user);
  //     });
  //     console.log("after or before>", user);
  //   }
  // }, [showUpdateUserForm]);

  return (
    <>
      <h1>Fruit </h1>
      <div className="card">
        {isLoggedIn ? (
          <div>
            <h1>
              Welcome back {user.displayName ? user.displayName : "stranger"}
            </h1>
            <h2>Your email is {user.email}</h2>
            {user.photoURL ? (
              <img src={user.photoURL} alt="profile" />
            ) : (
              <p>Add a profile picture</p>
            )}
          </div>
        ) : null}
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
              signOut(auth);
              setUser({});
            }}
          >
            Logout!
          </button>
        ) : null}

        {isLoggedIn ? <FruitForm /> : <AuthForm />}
        {isLoggedIn && showUpdateUserForm ? (
          <UpdateUserForm
            setShowUpdateUserForm={setShowUpdateUserForm}
            setUser={setUser}
          />
        ) : !isLoggedIn ? null : (
          <button onClick={() => setShowUpdateUserForm(!showUpdateUserForm)}>
            Edit Profile
          </button>
        )}

        <FruitList />
      </div>
    </>
  );
}

export default App;
