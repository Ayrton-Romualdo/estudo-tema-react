import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Admin from "./layouts/Admin"
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Index from "./views/Index";
import Auth from "./layouts/Auth";
import Profile from "./views/Profile";
import Dashboard from "./views/admin/Dashboard";
import Settings from "./views/admin/Settings";
import Maps from "./views/admin/Maps";
import Tables from "./views/admin/Tables";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/landing',
        element: <Navigate to={'/'} />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/admin',
        element: <Navigate to={'/admin/dashboard'} />
    },
    {
        path: '/admin',
        element: <Admin />,
        children: 
        [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'maps',
                element: <Maps />
            },
            {
                path: 'tables',
                element: <Tables />
            },

        ]
    },
    {
        path: '/',
        element: <Auth />,
        children: 
        [
            {
                path: 'login',
                element: <Login />,                
            },
            {
                path: 'register',
                element: <Register />
            }
        ],

    }
])

export default router