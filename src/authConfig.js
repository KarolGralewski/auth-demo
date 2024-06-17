const msalConfig = {
	auth: {
		clientId: '',
		authority: 'https://login.microsoftonline.com/a596ebb4-5a8d-4005-857d-c1275a78064d',
		redirectUri: 'http://localhost:5173',
	},
	cache: {
		cacheLocation: 'sessionStorage', //
		storeAuthStateInCookie: false,
	},
};

const loginRequest = {
	scopes: ['User.Read'],
};

export { loginRequest, msalConfig };
