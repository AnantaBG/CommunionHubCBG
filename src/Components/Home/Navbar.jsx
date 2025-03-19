import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const NavBar = () => {
  const location = useLocation(); // Get current location

  return (
    <Navbar className="sticky top-0 z-50" fluid rounded>
      <Navbar.Brand href="/"> {/* use / instead of full url for internal links*/}
        <img src="/src/assets/C.png" className="max-h-10 max-w-10" srcSet="" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CommunionHUB
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link} // Use Link component
          to="/" // Use to prop instead of href
          active={location.pathname === "/"} // Check if current path matches
          className={location.pathname === "/" ? "text-teal-500" : ""} // Apply teal color if active
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/events"
          active={location.pathname === "/events"}
          className={location.pathname === "/events" ? "text-teal-500" : ""}
        >
          Events
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          active={location.pathname === "/about"}
          className={location.pathname === "/about" ? "text-teal-500" : ""}
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;