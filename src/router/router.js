import Default from "../screens/Default";
import Product from "../screens/Product";
import {createBrowserRouter, createHashRouter} from "react-router-dom";
import App from "../App"
import LoginForm from "../screens/forms/LoginForm";
import LandingPage from "../screens/LandingPage/LandingPage";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-front-react' : '/';

const routes = createBrowserRouter([
        {
            path:'/',
            element:<App />,
            children:[
                {
                    path: '/',
                    element: <LandingPage />,
                },
                {
                    path: '/default',
                    element: <Default />,
                },
                {
                    path: '/products',
                    element: <Product />
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
