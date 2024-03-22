import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }:any) => {
    const navigate = useNavigate();

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    console.log(redirectUri)

    const onRedirectCallBack = (appState: any) => {
        navigate(appState?.returnTo || window.location.pathname);
    };
    console.log(onRedirectCallBack);
    

    if(!(domain && clientId && redirectUri && audience)) {
        return null;
    }
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri,  //URL where Auth0 will redirect user back to React application
            }}
            onRedirectCallback={onRedirectCallBack}   //Auth0 will redirect users from Auth0 universal login page to react application
        >
        {children}
    
        </Auth0Provider>
    )
}
