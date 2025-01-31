// import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaCheckSquare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlices.js';


export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [register] = useRegisterMutation();

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/');
  //   }
  // }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ firstName, lastName, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="flex items-center space-x-4 justify-between">
      <div className="w-[50%] flex flex-col gap-2 items-center space-y-2">
        <div>
          <h1 className="text-[60px]">Create an account</h1>
          <div className="flex gap-4 text-lg">
            <p>Already have an account?</p>
            <Link to="/login" className="text-blue-600 underline">
              Log in
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full">
          <div className="flex justify-between w-[60%] space-x-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 w-full border rounded"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 w-full border rounded"
              required
            />
          </div>
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
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <button
            type="submit"
            className="border-2 border-none bg-[#afad55] p-2 w-[30vw] text-white"
          >
            Create account
          </button>
        </form>
        <div className="flex items-center gap-2 w-full justify-center">
          <hr className="w-[20%]" />
          <p>Or Register with</p>
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
      <div className="w-[40%]">
        <img src="./facee.jpg" alt="Skin" className="w-full h-[100vh] object-cover" />
      </div>
    </div>
  );
};
