import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/Auth/context";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
   const { isAuthenticated } = useAuthContext();

   if (isAuthenticated === null) {
      return (
         <div className="flex justify-center items-center h-screen">
            Loading...
         </div>
      );
   }

   return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
