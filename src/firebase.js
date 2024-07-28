
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { redirect } from "react-router-dom";
import { toast} from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCHPEDyhSSqbSPq_nTnDCGAnoamozvI2-Y",
  authDomain: "netflix-clone-250cd.firebaseapp.com",
  projectId: "netflix-clone-250cd",
  storageBucket: "netflix-clone-250cd.appspot.com",
  messagingSenderId: "18879356663",
  appId: "1:18879356663:web:8233aa954e05fe51a1bdf2"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user= res.user;
        await addDoc(collection(db, "user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
        

        return redirect("/login");
    }
    catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}

const login = async (email, password)=>{
    try{
      await signInWithEmailAndPassword(auth,email,password)
      
      return redirect("/");
    }
    catch (error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}
 const logout = ()=>{
    signOut(auth)
 }
 export {auth,db,login,signup,logout};