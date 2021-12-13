import React from "react";

const Roadmap = () => {
  return (
    <div className="flex flex-col 2xl:max-w-5xl md:max-w-7xl mx-auto gap-2 justify-center relative z-20 font-abel">
      <div className="flex md:flex-row flex-col-reverse md:gap-5 justify-between">
        <div className="bg-bg-dark border-l-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 md:w-1/2">
          <h5 className="text-md font-bold text-green-secondary tracking-wide leading-10">
            Giveaway
          </h5>
          <p>
            Give back to holders and the community. Baby Panda NFTs and 5 brand
            new and handmade pandas will be given away.
          </p>
        </div>
        <div className=" md:w-1/2 relative md:transform md:skew-x-6 md:skew-y-3 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            20%
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-5 justify-between">
        <div className=" md:w-1/2 relative transform md:skew-x-3 md:-skew-y-6 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            40%
          </p>
        </div>
        <div className="bg-bg-dark  border-r-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 md:w-1/2">
          <h5 className="text-md font-bold text-green-secondary tracking-wide leading-10">
            Legendary Baby Pandas!
          </h5>
          <p>
            15 legendary baby pandas will be created and unleashed in the
            Pandaverse! 100% handmade and with unique one-time traits. All
            profits will be given to a selected charity organisation.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:gap-5 justify-between">
        <div className="bg-bg-dark border-l-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 md:w-1/2">
          <h5 className="text-md font-bold text-green-secondary tracking-wide leading-10">
            Charity donation!
          </h5>
          <p>
            Baby pandas T-shirts and hoodies will be released, ready to be
            shipped around the world.
          </p>
        </div>
        <div className="md:w-1/2 relative md:transform md:skew-x-6 md:skew-y-3 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            60%
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-5 justify-between">
        <div className=" md:w-1/2 relative md:transform md:skew-x-3 md:-skew-y-6 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            80%
          </p>
        </div>
        <div className="bg-bg-dark border-r-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 md:w-1/2">
          <h5 className="text-md font-bold text-green-secondary tracking-wide leading-10">
            More legendary Pandas!
          </h5>
          30 more legendary pandas are waiting to be auctioned. Once again, all
          the profits of this auction will be donated!!
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:gap-5 justify-between">
        <div className="bg-bg-dark  border-l-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 md:w-1/2">
          <h5 className="text-md font-bold text-green-secondary tracking-wide leading-10">
            Big donation!
          </h5>
          It&apos;s time for the BIG donation!! 30% of the introductory and 20%
          of royalty fees will be given to a charitable organisation of YOUR
          choice.
        </div>
        <div className="md:w-1/2 relative md:transform md:skew-x-6 md:skew-y-3 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
