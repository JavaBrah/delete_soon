import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
  <>
    <body className="bg-gray-900 text-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </body>
  </>
  );  
}