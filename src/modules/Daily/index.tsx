import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useAuthContext } from "@/contexts/Auth/context";

const Daily = () => {
   const { auth } = useAuthContext();
   return (
      <div className="py-8 space-y-4">
         <div className="flex items-center gap-2">
            <Avatar>
               <AvatarImage src={auth?.picture} />
               <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            <p>{auth?.name}</p>
         </div>
         <div>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
               <CardHeader className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white rounded-t-lg">
                  <div className="flex items-center gap-2">
                     <span className="text-2xl">✏️</span>
                     <h2 className="text-xl font-bold">Daily Assignment</h2>
                  </div>
                  <p className="text-blue-50">
                     Please input your daily assignment below with any relevant
                     details
                  </p>
               </CardHeader>
               <CardContent className="pt-6">
                  <Textarea
                     placeholder="Write your assignment here..."
                     className="min-h-32 focus:border-blue-300"
                  />
               </CardContent>
            </Card>
         </div>
      </div>
   );
};
export default Daily;
