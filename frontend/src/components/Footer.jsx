// import React from 'react'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdOutlinePhone, MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="flex justify-between bg-[#f1e2c2] p-6 items-center h-[10vh]">
      <div className="space-x-8 flex items-center">
        <div className="flex items-start space-x-2">
          <MdLocationOn className="text-[#afad55] size-7" />
          <div>
            <p>98 Juta Street</p>
            <p>Tshomologong Precinct, JHB</p>
            <p>2001</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MdOutlinePhone className="text-[#afad55] size-7" />
          <p>+27 71119995</p>
        </div>
        <div className="flex items-center space-x-2">
          <MdEmail className="text-[#afad55] size-7" />
          <a href="">
            ecoglow@email.com
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#">
          <FaFacebookSquare className="size-7 text-[#afad55]" />
        </a>
        <a href="#">
          <FaInstagram className="size-7 text-[#afad55]" />
        </a>
        <a href="#">
          <FaSquareXTwitter className="size-7 text-[#afad55]" />
        </a>
      </div>
    </div>
  );
};
