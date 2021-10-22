import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firbase.config";
// intialize firebase 
const intitializeAuthentication =()=>{
    initializeApp(firebaseConfig)
}

export default intitializeAuthentication;