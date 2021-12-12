import React from "react";
import Image from "next/image";
import Link from "next/link";

const FounderCard = ({ name, image, role, twitterLink }) => {
  return (
    <div className="md:p-4 p-1 flex md:flex-col gap-2 flex-row ">
      <div className="md:w-full w-1/2">
        <div className="md:hidden block">
          <Image src={image} width={150} height={150} />
        </div>
        <div className="md:block hidden">
          <Image src={image} width={250} height={250} />
        </div>
      </div>
      <div className="text-center md:w-full w-1/2 flex flex-col justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
          <h5 className=" md:text-lg text-bg font-bold tracking-wider whitespace-nowrap">
            {name}
          </h5>

          <Link href={twitterLink}>
            <a className="pt-1">
              <Image
                src="/icons/twitter.svg"
                alt={`${name} profile picture Baby Panda`}
                width={15}
                height={15}
              />
            </a>
          </Link>
        </div>
        <p className="text-pink-main opacity-90 text-xs md:text-base whitespace-nowrap italic">
          {role}
        </p>
      </div>
    </div>
  );
};

export default FounderCard;
