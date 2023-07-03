import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./Firebase";
export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubcribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
    });

    return unsubcribe;
  },[]);


  // signup function
  const signIn = async (email, password,username) => {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password);
  };
  // update profile
  await updateProfile(auth.currentUser, {
    displayName: username
  });
   const user = auth.currentUser;
    setCurrentUser({...user})

    // login function
    const Login = (email,password) => {
        const auth = getAuth(app);
        return signInWithEmailAndPassword(auth,email,password);
    }
    //Logout function 
    const Logout = () => {
        const auth = getAuth(app);
        return signOut(auth)
    }

     

  const AuthInfo = { currentUser, signIn,Login,Logout };
  return (
    <AuthContex.Provider value={AuthInfo}>
      {!loading && children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
