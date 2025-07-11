import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaXmark } from 'react-icons/fa6';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed:', err.message);
    }
  };

  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/services', link: 'Services' },
    { path: '/contact', link: 'Contact' },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Our<span className="text-orange-500"> Blog </span>
        </a>

        
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white hover:text-orange-500" key={path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 underline underline-offset-4' : ''
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>

          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-orange-500 hover:bg-white px-6 py-2 font-medium rounded transition-all duration-200 ease-in bg-red-600"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="hover:text-orange-500 hover:bg-white px-6 py-2 font-medium rounded transition-all duration-200 ease-in bg-orange-500">
                Login
              </button>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center ml-auto">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150 z-40'
              : 'hidden'
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black hover:text-orange-500" key={path}>
              <NavLink
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 underline underline-offset-4' : ''
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
          <li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-red-600 hover:text-orange-500 font-medium"
              >
                Logout
              </button>
            ) : (
              <NavLink onClick={toggleMenu} to="/login">
                <span className="text-black hover:text-orange-500 font-medium">
                  Login
                </span>
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
