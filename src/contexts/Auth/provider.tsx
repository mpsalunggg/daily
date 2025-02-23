import { createContext, ReactNode, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContextType, AuthStateType } from "@/contexts/Auth/types";
import { GOOGLE_DATA, GOOGLE_TOKEN } from "@/constants/localstorage";
import { GoogleToken } from "@/modules/Auth/types";

export const AuthContext = createContext<AuthContextType | undefined>(
   undefined
);

const initialState: AuthStateType = {
   authData: {},
   isAuthenticated: false,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [state, setState] = useState(initialState);

   const setAuthenticate = (isAuthenticated: boolean) => {
      setState((prevState) => ({
         ...prevState,
         isAuthenticated,
      }));
   };

   const setAuthData = (authData: Record<string, any>) => {
      setState((prevState) => ({
         ...prevState,
         authData,
      }));
   };

   const checkAuth = (): void => {
      const token = localStorage.getItem(GOOGLE_TOKEN);
      const data = localStorage.getItem(GOOGLE_DATA);
      if (!token || !data) {
         setAuthenticate(false);
         return;
      }

      try {
         const decoded = jwtDecode<GoogleToken>(token);
         const currentTime = Date.now() / 1000;

         if (decoded.exp < currentTime) {
            localStorage.removeItem(GOOGLE_TOKEN);
            setAuthenticate(false);
         } else {
            setAuthData(JSON.parse(data));
            setAuthenticate(true);
         }
      } catch (error) {
         localStorage.removeItem(GOOGLE_TOKEN);
         setAuthenticate(false);
      }
   };

   useEffect(() => {
      checkAuth();
   }, []);

   return (
      <AuthContext.Provider
         value={{
            auth: state.authData,
            isAuthenticated: state.isAuthenticated,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
