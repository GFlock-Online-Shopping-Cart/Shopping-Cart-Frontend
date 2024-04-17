import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { getProtectedResource } from "../services/api/apiCallServise";

export const ProfilePage = () => {
    const [message, setMessage] = useState("");
    const { getAccessTokenSilently,  user } = useAuth0();

    useEffect(() => {
        let isMounted = true;

        const createProfile = async () => {
            const accessToken = await getAccessTokenSilently();
            const { data, error } = await getProtectedResource(accessToken, 'user/create-profile', 'POST', user as any);
            console.log("Access Token", accessToken);
            
            if (!isMounted) {
                return;
            }

            if (data) {
                setMessage(JSON.stringify(data, null, 2));
            }

            if (error) {
                setMessage(JSON.stringify(error, null, 2));
            }
        };

        createProfile();

        return () => {
            isMounted = false;
        };
    }, [getAccessTokenSilently]);

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
                            <strong>Only authenticated users can acccess this page.</strong>
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