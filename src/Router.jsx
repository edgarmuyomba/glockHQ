import App from './components/App/App';
import Guns from './components/Guns/Guns';
import Ammo from './components/Ammo/Ammo';
import Cart from './components/Cart/Cart';
import Handguns from './components/Guns/Handguns';
import Rifles from './components/Guns/Rifles';
import Attachments from './components/Guns/Attachments';

import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetail from './components/Product Details/ProductDetail';

export default function Router() {

    const [cart, setCart] = useState([]);

    const props = {
        cart: cart,
        setCart: setCart
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App {...props} />
        },
        {
            path: "guns",
            element: <Guns {...props} />,
            children: [
                {
                    index: true,
                    element: <Handguns {...props} />
                },
                {
                    path: "handguns",
                    element: <Handguns {...props} />
                },
                {
                    path: "rifles",
                    element: <Rifles {...props} />
                },
                {
                    path: "attachments",
                    element: <Attachments {...props} />
                }
            ]
        },
        {
            path: "ammo",
            element: <Ammo {...props} />
        },
        {
            path: "product/:id",
            element: <ProductDetail {...props} />
        },
        {
            path: "cart",
            element: <Cart {...props} />
        },
    ]);

    return <RouterProvider router={router} />;
}