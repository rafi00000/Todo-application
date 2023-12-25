import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/Home/HomePage";
import LoginPage from "../Page/AuthPages/LoginPage";
import RegisterPage from "../Page/AuthPages/RegisterPage";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TaskPage from "../Page/Dashboard/TaskPage";
import UpdateTask from "../Page/Dashboard/UpdateTask";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
              path: '/dashboard',
              element: <TaskPage></TaskPage>  
            },
            {
                path: "/dashboard/update/:id",
                element: <UpdateTask></UpdateTask>
            }
        ]
    }
])

export default Routes;