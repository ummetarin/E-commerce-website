import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase.config";




export const AuthContext=createContext(null);
const auth = getAuth(app);
const gogoleprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signIn=(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

     const updateProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL :photo
        })
     }

     const gogglesignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,gogoleprovider)

     }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log("user",currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateProfile,
        gogglesignIn
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;