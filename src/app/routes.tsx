import { createBrowserRouter } from "react-router-dom";
import Wrapper from "@/components/common/Wrapper";
import Home from "@/modules/Home";
import Auth from "@/modules/Auth";
import Daily from "@/modules/Daily";

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
                path: "/daily",
                element: <Daily />,
            },
        ],
    },
    {
        path: "/login",
        element: <Auth />,
    }
]);

export default router;
