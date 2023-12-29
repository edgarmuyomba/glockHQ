import App from './components/App/App';
import Guns from './components/Guns/Guns';
import Ammo from './components/Ammo/Ammo';
import Cart from './components/Cart/Cart';
import Handguns from './components/Guns/Handguns';
import Rifles from './components/Guns/Rifles';
import Attachments from './components/Guns/Attachments';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "guns",
            element: <Guns />,
            children: [
                {
                    index: true,
                    element: <Handguns />
                },
                {
                    path: "handguns",
                    element: <Handguns />
                },
                {
                    path: "rifles",
                    element: <Rifles />
                },
                {
                    path: "attachments",
                    element: <Attachments />
                }
            ]
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