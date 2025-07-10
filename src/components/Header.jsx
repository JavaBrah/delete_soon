import { Link } from "react-router";

export default function Header() {
    return(
        <header>
            <img  className="w-full max-w-4xl rounded-lg shadow-lg" src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&quality=85&auto=format&fit=max&s=7543c611e54f684ba5da8700c2ac15d9" alt="" />
            <h1>Routing Rick & Morty </h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>
        </header>
    );
};
