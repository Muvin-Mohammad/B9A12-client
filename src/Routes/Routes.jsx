import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Apartments from "../Pages/Apartments/Apartments";
import ApartmentDetails from "../Pages/Apartments/ApartmentDetails";
import DashboardLayout from "../layout/DashboardLayout";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import MakePayment from "../Pages/Dashboard/Member/MakePayment";
import PaymentHistory from "../Pages/Dashboard/Member/PaymentHistory";
import Announcement from "../Pages/Dashboard/Common/Announcement";
import AddApartment from "../Pages/Dashboard/Member/AddApartment";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/apartment/:id',
                element: <ApartmentDetails></ApartmentDetails>
            },

            {
                path: '/apartments',
                element: <Apartments></Apartments>
            },


        ],

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'dashboard',
                element: <Statistics></Statistics>

            },
            {
                path: 'make-payment',
                element: <MakePayment></MakePayment>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'announcement',
                element: <Announcement></Announcement>
            },
            {
                path: 'add-apartment',
                element: <AddApartment></AddApartment>
            },
        ],
    },

]);