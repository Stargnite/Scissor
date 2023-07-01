import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
// import {setDoc, doc } from 'firebase/firestore'
// import { auth, db  } from "./Firebase/firebase";

const UseAuth = () => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        // const ref = doc(db, "users", user.uid)
        // const randomUser = {name: user.email, links_list: "your-link"}
        //  setDoc(ref, randomUser);
        console.log(user)
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribed;
  }, []);

  return currentUser;
};

export default UseAuth;
