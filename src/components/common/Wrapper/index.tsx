import { AuthProvider } from "@/contexts/Auth/provider";
import ProtectedRoute from "@/modules/Auth/ProtectedRoute";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
   return (
      <ProtectedRoute>
         <AuthProvider>
            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-96">
               <Outlet />
            </div>
         </AuthProvider>
      </ProtectedRoute>
   );
};
export default Wrapper;
