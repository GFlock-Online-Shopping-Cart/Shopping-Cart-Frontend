import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { getProtectedResource } from "../services/api/apiCallServise";
import { NavBarButtons } from "../components/navBar";
import { ButtonComponent } from "../components/button";
import { createProfile } from "../services/createProfile";
import { useNavigate } from "react-router-dom";

interface CreateProfileRequest {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  streetAddress: string;
  city: string;
  province: string;
}

export const ProfilePage = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [newProfile, setNewProfile] = useState<CreateProfileRequest>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    streetAddress: "",
    city: "",
    province: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createProfile(getAccessTokenSilently, newProfile);
      navigate("/products");
      console.log(newProfile);
    } catch (error: any) {
      console.log("Error Message", error.message);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!user) {
    return null;
  }

  // useEffect(() => {
  //   let isMounted = true;
  //   setNewProfile({
  //     firstName: "",
  //     lastName: "",
  //     mobileNumber: "",
  //     streetAddress: "",
  //     city: "",
  //     province: ""
  //   })
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [getAccessTokenSilently]);

  if (!user) {
    return null;
  }

  return (
    <>
      <div>
        <div className="bg-black">
          <NavBarButtons />
        </div>
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="my-[3rem] mx-[16rem] p-[2rem] rounded-lg shadow-lg items-center shadow-black md:shadow-xl md:shadow-black-500"
          >
            <div className="my-[1rem] flex justify-center">
              <div className="w-[10rem]">
                <label
                  htmlFor=""
                  className="font-semibold text-[1.1rem] pr-[1rem]"
                >
                  First Name{" "}
                </label>
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={newProfile.firstName}
                onChange={handleInputChange}
                className="bg-[#EEEEEE] px-[1rem] py-[0.3rem] rounded-md w-[25rem]"
              />
            </div>

            <div className="my-[1rem] flex justify-center">
              <div className="w-[10rem]">
                <label
                  htmlFor=""
                  className="font-semibold text-[1.1rem] pr-[1rem]"
                >
                  Last Name{" "}
                </label>
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={newProfile.lastName}
                onChange={handleInputChange}
                className="bg-[#EEEEEE] px-[1rem] py-[0.3rem] rounded-md w-[25rem]"
              />
            </div>

            <div className="my-[1rem] flex justify-center">
              <div className="w-[10rem]">
                <label
                  htmlFor=""
                  className="font-semibold text-[1.1rem] pr-[1rem]"
                >
                  Mobile Number{" "}
                </label>
              </div>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={newProfile.mobileNumber}
                onChange={handleInputChange}
                className="bg-[#EEEEEE] px-[1rem] py-[0.3rem] rounded-md w-[25rem]"
              />
            </div>

            <div className="my-[1rem] flex justify-center">
              <div className="w-[10rem]">
                <label
                  htmlFor=""
                  className="font-semibold text-[1.1rem] pr-[1rem]"
                >
                  Street Address{" "}
                </label>
              </div>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={newProfile.streetAddress}
                onChange={handleInputChange}
                className="bg-[#EEEEEE] px-[1rem] py-[0.3rem] rounded-md w-[25rem]"
              />
            </div>

            <div className="my-[1rem] flex justify-center">
              <div className="w-[10rem]">
                <label
                  htmlFor=""
                  className="font-semibold text-[1.1rem] pr-[1rem]"
                >
                  City{" "}
                </label>
              </div>
              <input
                type="text"
                id="city"
                name="city"
                value={newProfile.city}
                onChange={handleInputChange}
                className="bg-[#EEEEEE] px-[1rem] py-[0.3rem] rounded-md w-[25rem]"
              />
            </div>

            <div className="my-[1rem] flex justify-center">
              <div className="w-[10rem]">
                <label htmlFor="" className="font-semibold text-[1.1rem]">
                  Province{" "}
                </label>
              </div>
              <input
                type="text"
                id="province"
                name="province"
                value={newProfile.province}
                onChange={handleInputChange}
                className="bg-[#EEEEEE] px-[1rem] py-[0.3rem] rounded-md w-[25rem]"
              />
            </div>

            <div className="flex justify-center">
              <ButtonComponent buttonName="Submit" />
            </div>
          </form>

          {/* <div>
            <img src="{user.picture}" alt="Profile" />
            <div>
              <h2>{user.name}</h2>
              <span>{user.email}</span>
            </div>
            <div>
              <h3>Decoded ID Token</h3>
              {JSON.stringify(user, null, 2)}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
