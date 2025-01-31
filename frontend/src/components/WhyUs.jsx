// import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiSolidBadgeCheck } from "react-icons/bi";

const WhyUs = () => {
  return (
    <div className="space-y-4 p-[50px]">
      <div className="flex flex-col items-center space-y-8 text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold">WHY ECOGLOW?</h1>
        <p className="text-sm lg:text-lg w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem iste voluptas, veritatis beatae corporis illum nostrum
          aut optio odit accusantium ullam soluta natus ratione maxime id animi
        </p>
      </div>
      <div className="flex justify-between space-x-2 py-4">
        <div className="space-y-4 text-lg flex flex-col items-center text-center">
          <FaLeaf className="size-[100px] text-[#afad55]" />
            <p className="text-3xl lg:text-4xl">Natural</p>
            <p>Yourself required no at thoughts<br/> delicate landlord it be</p>
        </div>
        <div className="space-y-4 text-lg flex flex-col items-center text-center">
          <MdDoNotDisturbAlt className="size-[100px] text-[#afad55]" />
            <p className="text-3xl lg:text-4xl">No Side Effects</p>
            <p>Yourself required no at thoughts <br/>delicate landlord it be</p>
        </div>
        <div className="space-y-4 text-lg flex flex-col items-center text-center">
          <BiSolidBadgeCheck className="size-[100px] text-[#afad55]" />
            <p className="text-3xl lg:text-4xl">100% Organic</p>
            <p>Yourself required no at thoughts <br/>delicate landlord it be</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
