// import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className='flex justify-between bg-[#f1e2c2] p-6 items-center h-[10vh]'>
            <div className='space-x-4 flex items-center'>
                <Link to={"/login"}>
                    <button className='border-none bg-[#afad55] text-white p-[8px] w-[110px]'>Sign In</button>
                </Link>
                <Link to={'./register'}>
                    <button className='border-[1px] border-black p-[7px] w-[110px]'>Sign Up</button>
                </Link>
            </div>
            <div className='space-x-20'>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
            </div>
            <div className='flex items-center space-x-4'>
                <a href='#'>
                <FaFacebookSquare className='size-7 text-[#afad55]' />
                </a>
                <a href='#'>
                <FaInstagram className='size-7 text-[#afad55]' />
                </a>
                <a href='#'>
                <FaSquareXTwitter className='size-7 text-[#afad55]' />
                </a>
            </div>
        </div>
    )
}
