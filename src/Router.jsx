import App from './App';
import Guns from './components/Guns/Guns';
import Ammo from './components/Ammo/Ammo';
import Cart from './components/Cart/Cart';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "guns",
            element: <Guns />
        },
        {
            path: "ammo",
            element: <Ammo />
        },
        {
            path: "cart",
            element: <Cart />
        },
    ]);

    return <RouterProvider router={router} />;
}