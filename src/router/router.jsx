
import HomePage from "../pages/home-page/HomePage";
import {createBrowserRouter} from 'react-router-dom'
import MainPage from "../pages/main/MainPage";
import ProductsPage from "../pages/products-page/ProductsPage";
import Woman from "../components/products/Woman";
import Man from "../components/products/Man";
import Jawlering from "../components/products/Jawlering";
import Electronics from "../components/products/Electronics";


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
                children: [
                {
                    index: true,
                    element: <ProductsPage />
                    },
                    {
                        path: "woman",
                        element: <Woman />
                    },
                    {
                        path: "man",
                        element: <Man />
                    },
                    {
                        path: "jawelery",
                        element: <Jawlering />
                    },
                    {
                        path: "electronics",
                        element: <Electronics />
                    },
                ]
            },
        ]
    },
    
])
