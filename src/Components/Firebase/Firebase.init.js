import {initializeApp} from 'firebase/app';
import firebaseConfig from './Firbase.config';

const intitializeAuthentication =()=>{
    initializeApp(firebaseConfig);
}

export default intitializeAuthentication;