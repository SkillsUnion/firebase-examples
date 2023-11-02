import { auth } from "../firebase";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

export default function FruitForm(props) {
  const [displayName, setDisplayName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const submit = () => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoUrl,
    })
      .then(() => {
        auth.currentUser.reload().then(() => {
          const user = auth.currentUser;
          props.setUser(user);
          props.setShowUpdateUserForm(false);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Edit user</h1>

      <label>Display Name</label>
      <br />
      <input
        type="text"
        name="displayName"
        value={displayName}
        placeholder="Display Name"
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <br />
      <label>Photo URL</label>
      <br />
      <input
        type="text"
        name="photourl"
        value={photoUrl}
        placeholder="Photo url"
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <button onClick={submit}>Submit Data</button>
    </div>
  );
}
