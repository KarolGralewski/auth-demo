import { useMsal } from '@azure/msal-react';
import React from 'react';
import { loginRequest } from '../authConfig';

export const Login = () => {
	const { instance } = useMsal();

	const handleLogin = () => {
		instance
			.loginPopup(loginRequest)
			.then((response) => {
				// handle success (optional)
				console.log(response);
			})
			.catch((error) => {
				// handle error (optional)
				console.error(error);
			});
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};
