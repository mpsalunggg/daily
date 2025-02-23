import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/contexts/Auth/context";

const Daily = () => {
   const { auth } = useAuthContext();

   console.log(auth);
   return (
      <div className="py-4">
         <div>
            <h1 className="text-yellow-500 text-lg font-medium italic">
               <span className="text-black">Enter your</span> todo, ticket, and
               status todo!
            </h1>
            <div>
               <Avatar>
                  <AvatarImage src={auth?.picture} />
                  <AvatarFallback>Profile</AvatarFallback>
               </Avatar>
            </div>
         </div>
      </div>
   );
};
export default Daily;
