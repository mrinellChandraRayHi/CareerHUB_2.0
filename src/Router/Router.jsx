import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import AppliedJobs from "../Pages/AppliedJobs";
import Statistics from "../Pages/Statistics";
import Blog from "../Pages/Blog";
import ShowJobDetails from "../Pages/ShowJobDetails";
import Errorpage from "../Components/Errorpage";

export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement:<Errorpage/>,
        children:[
            {
                path:'/statistics',
                element:<Statistics/>
            },
            {
                path:'/appliedJobs',
                element:<AppliedJobs/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/Featured/:id',
                element:<ShowJobDetails/>,
                loader:()=>fetch('featuredJob.json')
            }
        ]
    },
]);  