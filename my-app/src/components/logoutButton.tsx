import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout } = useAuth0();  //logout() method => Auth0 React SDK clears the application session and redirects to the Auth0 /v2/logout endpoint

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,  //return to Allowed Logout URL in Auth0 application
            },
        });
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}