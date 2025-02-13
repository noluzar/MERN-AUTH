import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlices";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <nav className="fixed h-[10vh] top-0 left-0 w-full bg-[#f1e2c2] p-4 z-10 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold hidden lg:block w-[8%]">
          <img src="/ec.png" />
        </div>

        {/* Menu Toggle for Small Screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-[#afad55]"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-[#f1e2c2] lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-10 lg:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="/" className="block lg:inline hover:text-[#afad55]">
            Home
          </a>
          <a href="#about" className="block lg:inline hover:text-[#afad55]">
            About
          </a>
          <a href="#shop" className="block lg:inline hover:text-[#afad55]">
            Shop
          </a>
          <a href="#contact" className="block lg:inline hover:text-[#afad55]">
            Contact
          </a>
        </div>

        {/* User Profile */}
        {userInfo ? (
          <div className="relative flex items-center space-x-2">
            <CgProfile className="text-3xl text-[#afad55]" />
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-[#afad55] text-white px-4 py-2 rounded-md"
            >
              {`${userInfo?.firstName || ""} ${
                userInfo?.lastName || ""
              }`.trim()}
            </button>
            {dropdownOpen && (
              <div className="absolute p-2 top-11 right-0 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logoutHandler();
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-x-4 flex items-center">
            <Link to="/login">
              <button className="border-none bg-[#afad55] text-white px-4 py-2 w-[6vw]">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="border border-black px-4 py-2 w-[6vw]">Sign Up</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
