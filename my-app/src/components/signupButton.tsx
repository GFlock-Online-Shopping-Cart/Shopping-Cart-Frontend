import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleSignup = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/",
            },
            authorizationParams: {
                screen_hint: "signup",
            },
        });
    };

    return (
        <button onClick={handleSignup}>Signup</button>
    )
}