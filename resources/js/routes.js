import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

export default {
    mode: "history",
    linkActiveClass: "font-bold",
    routes: [
        {
            path: "*",
            component: NotFound
        },
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/dashboard",
            component: Dashboard,
            name: "Dashboard"
        }
    ]
};
