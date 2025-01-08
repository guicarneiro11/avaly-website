import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/privacy',
        element: <Privacy />,
    },
    {
        path: '/Terms',
        element: <Terms />,
    },
]);