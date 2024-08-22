import Default from "../screens/Default";
import Product from "../screens/Product";
import {createBrowserRouter, createHashRouter} from "react-router-dom";
import App from "../App"
import LoginForm from "../screens/forms/LoginForm";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-front-react' : '/';

const routes = createHashRouter([
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
