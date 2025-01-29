import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/page2"> Page 2</Link>
                {/* Using "span" here to add a separator between the links.
            You'll want to get rid of this when you add proper CSS Formatting */ }
                <span> | </span>
            </div>
        </nav>
    );
}

export default Navbar;
