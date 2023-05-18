import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);


export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
        if(currentUser && currentUser.email)
        {
            const loggedUser={
                email:currentUser.email
               }
               fetch('https://car-doctor-server-bice-two.vercel.app/jwt',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(loggedUser)
               })
               .then(res=>res.json())
               .then(data=>{
                // console.log(data);
                localStorage.setItem('car-access-token',data.token)
          
    
               })
        }
        else{
            localStorage.removeItem('car-access-token')
        }
       })
       return ()=>{
        return unsubscribe()
       }


    },[])
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleLogin

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;