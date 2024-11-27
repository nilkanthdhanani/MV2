import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import Agenda from "../modules/agenda";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/agenda",
                element: <Agenda />
            },
        ]
    },

    {
        path: "*",
        element: <Error />
    }
]
)

export default router;