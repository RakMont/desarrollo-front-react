import Default from "../screens/Default";
import Product from "../screens/Product";
import {createBrowserRouter, createHashRouter} from "react-router-dom";
import App from "../App"
import LoginForm from "../screens/forms/LoginForm";
import ProductStateRed from "../screens/ProductStateRed";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-front-react' : '/';

const routes = createBrowserRouter([
        {
            path:'/',
            element:<App />,
            children:[
                {
                    path: '/default',
                    element: <Default />,
                },
                {
                    path: '/products',
                    element: <Product />
                },
                {
                    path: '/productsState',
                    element: <ProductStateRed />
                },
                {
                    path: '/forms',
                    element: <LoginForm />
                }
                ]
        }
        ],
            {
                basename: basename
            });
export default routes;
