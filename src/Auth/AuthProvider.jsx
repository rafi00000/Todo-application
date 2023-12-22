import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUserWithMail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect(() =>{
        onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
    }, [])
    

    const value = {user, loading, createUserWithMail, logIn, googleSignIn, logOut};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;