import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import FirebaseContext from "../../firebase/context";

export default function RutaPrivada({component: Component, ...props}) {
	//Creo state para el authContext
	const firebaseContext = useContext(FirebaseContext);
	const {usuario} = firebaseContext;

	return (
		<Route
			{...props}
			render={(props) =>
				!usuario ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
}
