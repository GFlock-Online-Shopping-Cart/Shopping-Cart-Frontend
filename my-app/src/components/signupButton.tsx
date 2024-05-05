import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleSignup = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/profile",
            },
            authorizationParams: {
                screen_hint: "signup",
            },
        });
    };

    return (
        <button className="text-white px-[1rem] font-semibold" onClick={handleSignup}>Signup</button>
    )
}