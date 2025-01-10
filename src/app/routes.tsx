import { createBrowserRouter } from "react-router-dom";
import Wrapper from "@/components/common/Wrapper";
import Home from "@/modules/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;
