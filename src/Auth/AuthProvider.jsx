import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUserWithMail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
      }
    
      const githubLogin = () =>{
        return signInWithPopup(auth ,githubProvider)
      }

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(user){
              toast.success("Successful Login");
            }
            setLoading(false);
          });
      
          return () => {
            unSubscribe();
          };
    }, [user])
    

    const value = {user, loading, createUserWithMail, logIn, googleSignIn, logOut, githubLogin};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;