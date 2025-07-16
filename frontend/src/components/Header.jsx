import { Link } from "react-router"; // fixed from "react-router"

export default function Header() {
  return (
    <header className="flex bg-gray-900 text-gray-100 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide drop-shadow-neon">
          Routing Rick & Morty
        </h1>

        <nav className="mt-4 sm:mt-0">
          <ul className="flex justify-between gap-6 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="bg-fuchsia-500 hover:text-shadow-white transition duration-200 rounded-2xl block w-20 text-center"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="bg-fuchsia-500 hover:text-shadow-white transition duration-200 rounded-2xl block w-20 text-center"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Characters"
                className="bg-fuchsia-500 hover:text-white transition duration-200 rounded-2xl block w-20 text-center"
              >
                Characters
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}