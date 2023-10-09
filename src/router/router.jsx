
import HomePage from "../pages/home-page/HomePage";
import {createBrowserRouter} from 'react-router-dom'
import MainPage from "../pages/main/MainPage";
import ProductsPage from "../pages/products-page/ProductsPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },

            {
                path: "home",
                element: <HomePage />
            },
            {
                path: "products",
                element: <ProductsPage />
            },
        ]
    },
    
])
