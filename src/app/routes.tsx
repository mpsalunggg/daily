import { createBrowserRouter } from "react-router-dom";
import Wrapper from "@/components/common/Wrapper";
import Home from "@/modules/Home";
import Auth from "@/modules/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Auth />
            }
        ],
    },
]);

export default router;
