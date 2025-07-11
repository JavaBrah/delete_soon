import { Link } from "react-router"; // fixed from "react-router"

export default function Header() {
  return (
    <header className="flex bg-gray-900 text-gray-100 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide drop-shadow-neon">
          Routing Rick & Morty
        </h1>

        <nav className="mt-4 sm:mt-0">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="text-fuchsia-400 hover:text-white transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-fuchsia-400 hover:text-white transition duration-200"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}