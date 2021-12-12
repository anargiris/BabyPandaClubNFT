import React from "react";
import Image from "next/image";
import Link from "next/link";

const FounderCard = ({ name, image, role, twitterLink }) => {
  return (
    <div className="md:p-4 p-2 flex md:flex-col flex-row gap-10 md:gap-0">
      <div className="flex-1">
        <Image src={image} width={250} height={250} />
      </div>
      <div className="text-center flex-1 flex flex-col justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
          <h5 className=" text-lg text-bg font-bold tracking-wider">{name}</h5>

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
        <p className="text-pink-main opacity-90 text-sm md:text-base whitespace-nowrap italic">
          {role}
        </p>
      </div>
    </div>
  );
};

export default FounderCard;
