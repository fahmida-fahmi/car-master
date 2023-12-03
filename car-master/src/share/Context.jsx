import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase.config';

export const AuthProvider = createContext()

const auth = getAuth(app);

const Context = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const register = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect ( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth,email)
    }
    
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        register,
        login,
        resetPassword,
        googleSignIn,
        logOut

    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};
export default Context;