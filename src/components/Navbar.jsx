import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () =>{

    const form = useSelector(state => state.form);

    return(
      <nav>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/default">Default</Link>
              </li>
              <li>
                  <Link to="/products">Product</Link>
              </li>
              <li>
                  <Link to="productsState">ProductsState</Link>
              </li>
              <li>
                  <Link to="/forms">Login Form</Link>
              </li>
          </ul>
          <ul>
              <li className="user-nav-label">
                  <span><b>Bienvenido</b> {form.formData.username}: {form.formData.email}</span>
              </li>
          </ul>

      </nav>
    );
};
export default  Navbar;
