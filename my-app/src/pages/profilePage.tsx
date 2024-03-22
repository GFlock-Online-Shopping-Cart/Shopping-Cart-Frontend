import { useAuth0 } from "@auth0/auth0-react";

export const ProfilePage = () => {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    return (
        <>
            <div>
                <h1 id="page-title">Profile Page</h1>
                <div>
                    <p id="page-description">
                        <span>You can use the <strong>ID Token</strong> to get the profile information of an authenticated user.</span>
                        <span>
                            <strong>Only authenticated users can acccd ess this page.</strong>
                        </span>
                    </p>

                    <div>
                        <img src="{user.picture}" alt="Profile" />
                        <div>
                            <h2>{user.name}</h2>
                            <span>{user.email}</span>
                        </div>
                        <div>
                            <h3>Decoded ID Token</h3>
                            {JSON.stringify(user, null, 2)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};