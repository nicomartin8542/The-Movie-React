import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import firebaseConfig from "./config";

//Clase con la app de firebase
class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  //Logearse
  async login(email, password) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  //Crear cuenta
  async register(name, email, password) {
    const newUser = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    await updateProfile(this.auth.currentUser, {
      displayName: name,
    });

    return newUser;
  }

  //Deslogear
  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log(error.message);
    }
  }
}

//Inicilizo clase Firebase
const firebase = new Firebase();

export default firebase;
