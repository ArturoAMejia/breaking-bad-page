import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    <nav className="flex justify-center bg-black rounded-b-md text-white">
      <ul className="flex gap-5 p-2">
        <Link to="characters">
          <li className="p-2 rounded-md hover:bg-[#369457] hover:text-white hover: cursor-pointer">
            Characters
          </li>
        </Link>
        <Link to="quote">
          <li className="p-2 rounded-md hover:bg-[#369457] hover:text-white hover: cursor-pointer">
            Quotes
          </li>
        </Link>
      </ul>
    </nav>
    <Outlet />
    </>
  );
};
