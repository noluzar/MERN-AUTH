// import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlices';

export const Navbar = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/');
        } catch (err){
            console.log(err);
        }
    };

    return (
        <div>
            <nav className='flex justify-between bg-[#f1e2c2] p-8 fixed w-full'>
            <div>Logo</div>
                <div className='space-x-20'>
                <a href='/'>Home</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
                </div>
                {userInfo ? (
                    <NavDropdown 
                    title={`${userInfo?.firstName || ''} ${userInfo?.lastName || ''}`.trim()} 
                    id="username">
                    <NavDropdown.Item>
                        <Link to={'/profile'}>
                        Profile
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                    </NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <>
                    <div className='space-x-4 flex items-center'>
                    <Link to={"/login"}>
                    <button className='border-2 border-black p-[5px] w-[100px]'>Sign In</button>
                    </Link>
                        <Link to={'./register'}>
                        <button className='border-2 border-black p-[5px] w-[100px]'>Sign Up</button>
                        </Link>
                </div>
                    </>
                ) }
             
                
            </nav>
        </div>
    )
}
