import { useAuth0 } from "@auth0/auth0-react"; 
import { LoginButton } from "./loginButton";
import { SignupButton } from "./signupButton";
import { LogoutButton } from "./logoutButton";

export const NavBarButtons = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <>
                    <SignupButton/>
                    <LoginButton/>
                </>
            )}

            {isAuthenticated && (
                <>
                    <LogoutButton/>
                </>
            )}
        </div>
    );
};