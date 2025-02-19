import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GoogleToken, UserInfo } from "./types";
import { GOOGLE_DATA, GOOGLE_TOKEN } from "@/constants/localstorage";

const Auth = () => {
  const clientId: string = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: CredentialResponse): void => {
    if (credentialResponse.credential) {
      try {
        const decoded = jwtDecode<GoogleToken>(credentialResponse.credential);

        const userInfo: UserInfo = {
          email: decoded.email,
          name: decoded.name,
          picture: decoded.picture
        };

        localStorage.setItem(GOOGLE_DATA, JSON.stringify(userInfo));
        localStorage.setItem(GOOGLE_TOKEN, credentialResponse.credential);
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Authentication error. Please try again.");
      }
    };
  }

  const handleError = (): void => {
    console.log("Login Failed");
    alert("Login gagal. Silakan coba lagi.");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-yellow-300 text-xl font-medium">Please login first 😊👍</h1>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    </GoogleOAuthProvider >
  );
};

export default Auth;