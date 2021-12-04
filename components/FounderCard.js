import React from "react";
import Image from "next/image";

const FounderCard = ({ name, image, role, twitterLink }) => {
  return (
    <div className=" p-4">
      <Image src={image} width={200} height={200} />
      <div className="text-center">
        <h5 className=" text-lg text-bg font-bold tracking-wider">{name}</h5>
        <p className="text-bg text-sm italic">{role}</p>
      </div>
    </div>
  );
};

export default FounderCard;
