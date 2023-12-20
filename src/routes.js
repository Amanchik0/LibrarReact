import { ADMIN_ROUTE, BUY_ROUTE, LIBRARY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE , ABOUTBOOK_ROUTE } from "./utilis/consts";
import Admin from "./pages/Admin";
import Buy from "./pages/Buy";
import Library from "./pages/Library";
import Auth from "./pages/Auth";
import AboutBook from "./pages/AboutBook";

export const authRoutes = [
    {
        path: ADMIN_ROUTE, 
        Component: Admin
    }, 
    {
        path: BUY_ROUTE, 
        Component: Buy
    },

]

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE, 
        Component: Library 
    }, 
    {
        path: LOGIN_ROUTE, 
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE, 
        Component: Auth
    },
    {
        path:ABOUTBOOK_ROUTE + '/:id', 
        Component :AboutBook
    }

]