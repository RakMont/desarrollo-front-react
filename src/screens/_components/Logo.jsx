import logo from "../../logo.svg";
import {useSelector} from "react-redux";

const Logo = () =>{
    const defaultState = useSelector(state => state.default);

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>{defaultState.name}</p>
        </div>
    );
}
export default Logo;
