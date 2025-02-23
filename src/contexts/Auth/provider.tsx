import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthContextType } from "@/contexts/Auth/types";
import { GOOGLE_DATA } from "@/constants/localstorage";

export const AuthContext = createContext<AuthContextType | undefined>(
   undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [authData, setAuthData] = useState<Record<string, any>>({});
   useEffect(() => {
      setAuthData(JSON.parse(String(localStorage.getItem(GOOGLE_DATA))));
   }, []);

   return (
      <AuthContext.Provider
         value={{
            auth: authData,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
