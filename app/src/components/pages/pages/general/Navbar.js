import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <nav>
            <ul>
                <li>
                    <Link className="li" to="/">Home</Link>
                </li>

                <li>
                    <Link className="li" to="/about" >About</Link>
                </li>

                <li>
                    <Link className="li" to="/demomemo" >Memo</Link>
                </li>

                <li>
                    <Link className="li" to="/memohook" >Memo hook</Link>
                </li>

                <li>
                    <Link className="li" to="/callbackhook" >Callback hook</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;