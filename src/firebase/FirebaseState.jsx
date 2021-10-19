import React from "react";
import firebase from "./firebase";
import FirebaseContext from "./context";
import useAutenticacion from "../hooks/useAutenticacion";

const FirebaseState = ({children}) => {
	//Valido que el usuario este logeado
	const usuario = useAutenticacion();

	return (
		<FirebaseContext.Provider
			value={{
				firebase,
				usuario,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	);
};

export default FirebaseState;
