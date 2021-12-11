import React from "react";
import Image from "next/image";
import Link from "next/link";

const FounderCard = ({ name, image, role, twitterLink }) => {
  return (
    <div className="md:p-4 p-2 flex md:flex-col flex-row gap-10 md:gap-0">
      <Image src={image} width={200} height={200} />

      <div className="text-center flex flex-col justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
          <h5 className=" text-md text-bg font-bold tracking-wider">{name}</h5>

          <Link href={twitterLink}>
            <a className="pt-1">
              <Image src="/icons/twitter.svg" width={15} height={15} />
            </a>
          </Link>
        </div>
        <p className="text-pink-main opacity-90 text-sm whitespace-nowrap italic">
          {role}
        </p>
      </div>
    </div>
  );
};

export default FounderCard;
