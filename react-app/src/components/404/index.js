import { NavLink } from "react-router-dom";
import './404.css'

const ErrorPage = () => {


    return (
        <div className="errorpage-content">
            <img src="../../../static/errorPage.png"></img>
            <h1>Hmmm, that page doesn't exist.</h1>
            <p>Get back to organizing work and life or visit our Help Center.</p>
            <div>
            <NavLink to='/'>
                <button className="button" >Home</button>
            </NavLink>
            </div>
        </div>
    )
}

export default ErrorPage;
