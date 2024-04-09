import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();   //loginWithRedirect() method redirect to the Auth0 /authorize endpoint.

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/",
            },
        });
    };

    return (
        <button className="text-white px-[1rem] font-semibold" onClick={handleLogin}>Login</button>
    )
}