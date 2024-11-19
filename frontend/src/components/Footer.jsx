import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className='flex justify-between bg-[#f1e2c2] p-8 items-center'>
            <div className='flex items-center space-x-4'>
            <FaFacebookSquare className='size-7 text-[#afad55]'/>
            <FaInstagram className='size-7 text-[#afad55]' />
            <FaSquareXTwitter className='size-7 text-[#afad55]' />
            </div>
            <div className='space-x-20'>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                </div>
                <div className='space-x-4 flex items-center'>
                    <Link to={"/login"}>
                    <button className='border-2 border-black p-[5px] w-[100px]'>Sign In</button>
                    </Link>
                        <Link to={'./register'}>
                        <button className='border-2 border-black p-[5px] w-[100px]'>Sign Up</button>
                        </Link>
                </div>
        </div>
    )
}
