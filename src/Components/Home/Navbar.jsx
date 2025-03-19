import { Navbar } from "flowbite-react";

const NavBar = () => {
    return (
        <Navbar className='sticky top-0 z-50' fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/src/assets/C.png" className='max-h-10 max-w-10' srcset="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CommunionHUB</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/events">
          Events
        </Navbar.Link>
        <Navbar.Link href="/about">
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default NavBar;