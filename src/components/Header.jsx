import { Link } from "react-router";

export default function Header() {
    return(
        <header>
            
            <h1>Routing Rick & Morty </h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </nav>
        </header>
    );
};
