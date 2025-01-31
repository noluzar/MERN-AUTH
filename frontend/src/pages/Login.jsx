import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaCheckSquare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../slices/usersApiSlice.js';
import { setCredentials } from '../slices/authSlices.js';
import { toast } from 'react-toastify';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/userproducts");
      }
    } else {
      console.log("No user logged in");
    }
  }, [navigate, userInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }))
      navigate('/products')
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="lg:w-[50%] hidden lg:block">
        <img src="./Green.jpg" alt="Skin" className="w-full h-[100vh]" />
      </div>
      <div className="lg:w-[50%] flex flex-col gap-2 items-center space-y-4">
        <div>
          <h1 className="text-[60px]">Login to account</h1>
          <div className="flex gap-4 text-lg">
            <p>Dont have an account?</p>
            <Link to="/register" className="text-blue-600 underline">
              Sign Up
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-[60%] border rounded"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-[60%] border rounded"
            required
          />
          <div className="flex items-center gap-2">
            <FaCheckSquare />
            <p>
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </p>
          </div>
          <button type="submit" className="border-none bg-[#afad55] text-white p-2 w-[30vw]">
            Login
          </button>
        </form>
        <div className="flex items-center gap-2 w-full justify-center">
          <hr className="w-[20%]" />
          <p>Or login with</p>
          <hr className="w-[20%]" />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center gap-2 border-2 border-black p-2 w-[15vw] justify-center text-lg">
            <FcGoogle className="size-7" />
            Google
          </button>
          <button className="flex items-center gap-2 border-2 border-black p-2 w-[15vw] justify-center text-lg">
            <FaApple className="size-7" />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};
