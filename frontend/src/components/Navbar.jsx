import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlices';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-[#f1e2c2] p-6 z-10 flex justify-between items-center">
        <div>Logo</div>
        <div className="space-x-20">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        {userInfo ? (
          <div className="relative flex items-center space-x-2">
            <CgProfile className="text-2xl text-[#afad55]" />
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-[#afad55] text-white px-4 py-2 rounded-md"
            >
              {`${userInfo?.firstName || ''} ${userInfo?.lastName || ''}`.trim()}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={logoutHandler}
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
              <button className="border-none bg-[#afad55] text-white px-4 py-2">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="border border-black px-4 py-2">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
