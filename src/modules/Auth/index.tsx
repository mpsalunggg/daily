import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const navigate = useNavigate()

  console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex justify-center items-center h-screen">
        <GoogleLogin
          onSuccess={(response) => {
            console.log(response);
            navigate("/")
          }}
          onError={() => {
            console.log("Login Failed");
            alert("Login gagal. Silakan coba lagi.");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Auth;
