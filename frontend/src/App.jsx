import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminLayout from "./components/admin/AdminLayout";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import ForeignTrade from "./pages/services/ForeignTrade";
import FreightTransportation from "./pages/services/FreightTransportation";
import Mining from "./pages/services/Mining";
import RailLogistic from "./pages/services/RailLogistic";
import NewsScreen from "./pages/NewsScreen";
import News from "./pages/News";
import ProjectScreen from "./pages/ProjectScreen";

import "swiper/css/pagination";
import "swiper/css";
import AddNews from "./pages/admin/AddNews";
import AddProject from "./pages/admin/AddProject";
import EditProject from "./pages/admin/EditProject";
import EditNews from "./pages/admin/EditNews";
import RegisterAdmin from "./pages/admin/RegisterAdmin";
import Register from "./pages/Register";
import Careers from "./pages/Careers";
import ApplyForm from "./pages/ApplyForm";
import ProfileOfTheCompany from "./components/aboutUs/profileOfTheCompany";
import TimeLine from "./components/aboutUs/timeLine";
import Gallery from "./components/aboutUs/gallery";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/our-team",
                    element: <OurTeam />,
                },
                {
                    element: <AboutUs />,
                    children: [
                        {
                            path: "about-us",
                            element: <ProfileOfTheCompany />,
                        },
                        {
                            path: "timeline",
                            element: <TimeLine />,
                        },
                        {
                            path: "gallery",
                            element: <Gallery />,
                        },
                    ],
                },
                {
                    path: "/service/mining",
                    element: <Mining />,
                },
                {
                    path: "/service/rail-logistic",
                    element: <RailLogistic />,
                },
                {
                    path: "/service/freight-transportation",
                    element: <FreightTransportation />,
                },
                {
                    path: "/service/foreign-trade",
                    element: <ForeignTrade />,
                },
                {
                    path: "/projects/:id",
                    element: <ProjectScreen />,
                },
                {
                    path: "/news",
                    element: <News />,
                },
                {
                    path: "/news/:id",
                    element: <NewsScreen />,
                },
                {
                    path: "/careers",
                    element: <Careers />,
                },
                {
                    path: "/apply",
                    element: <ApplyForm />,
                },
            ],
        },

        // {
        //   path: "/projects/:id",
        //   element: <ProjectScreen />,
        // },
        {
            path: "/admin",
            element: (
                <ProtectedRoute>
                    <AdminLayout />
                </ProtectedRoute>
            ),

            children: [
                {
                    path: "/admin",
                    element: <Dashboard />,
                },
                {
                    path: "add-admin",
                    element: <RegisterAdmin />,
                },
                {
                    path: "add-news",
                    element: <AddNews />,
                },
                {
                    path: "add-project",
                    element: <AddProject />,
                },
                {
                    path: "projects",
                    element: <EditProject />,
                },
                {
                    path: "news",
                    element: <EditNews />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
