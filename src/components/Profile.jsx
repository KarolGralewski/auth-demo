import { useMsal } from '@azure/msal-react';
import React, { useEffect, useState } from 'react';
import { loginRequest } from '../authConfig';

const Profile = () => {
	const { instance, accounts } = useMsal();
	const [accessToken, setAccessToken] = useState(null);
	const [graphData, setGraphData] = useState(null);

	useEffect(() => {
		if (accounts.length > 0) {
			instance
				.acquireTokenSilent({
					...loginRequest,
					account: accounts[0],
				})
				.then((response) => {
					setAccessToken(response.accessToken);
					// Make a call to the Graph API
					fetch('https://graph.microsoft.com/v1.0/me', {
						headers: {
							Authorization: `Bearer ${response.accessToken}`,
						},
					})
						.then((response) => response.json())
						.then((data) => setGraphData(data))
						.catch((error) => {
							console.error(error);
						});
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [instance, accounts]);

	return (
		<div>
			<h2>Succefully logged in</h2>
			<p>Graph API Data: {JSON.stringify(graphData)}</p>
		</div>
	);
};

export default Profile;
