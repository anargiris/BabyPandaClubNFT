import React from "react";

const Roadmap = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center relative z-20 font-abel">
      <div className="flex lg:flex-row flex-col-reverse lg:gap-5 justify-between">
        <div className="bg-bg-dark border-l-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 lg:w-1/2">
          <h5 className="text-lg font-bold text-green-secondary tracking-wide leading-10">
            Giveaway
          </h5>
          <p>
            Giveaway of 500 Crypto Pandas to our holders! The giveaway will be
            completely random and the people winning will be announced through
            our Twitter and Discord channels.
          </p>
        </div>
        <div className=" lg:w-1/2 relative lg:transform lg:skew-x-6 lg:skew-y-3 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            20%
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-5 justify-between">
        <div className=" lg:w-1/2 relative transform lg:skew-x-3 lg:-skew-y-6 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            40%
          </p>
        </div>
        <div className="bg-bg-dark  border-r-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 lg:w-1/2">
          <h5 className="text-lg font-bold text-green-secondary tracking-wide leading-10">
            Legendary Baby Pandas!
          </h5>
          <p>
            50 legendary baby pandas will be created and unleashed in the
            Pandaverse! 100% handmade and with unique one-time traits, the
            legendary pandas will be auctioned to the community.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-5 justify-between">
        <div className="bg-bg-dark border-l-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 lg:w-1/2">
          <h5 className="text-lg font-bold text-green-secondary tracking-wide leading-10">
            Charity donation!
          </h5>
          <p>
            Our first donation to charity comes here. Our community will be
            asked to vote in a poll and 2 ETH will be donated to the charity
            that wins the poll. This is only the start!
          </p>
        </div>
        <div className="lg:w-1/2 relative lg:transform lg:skew-x-6 lg:skew-y-3 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            60%
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-5 justify-between">
        <div className=" lg:w-1/2 relative lg:transform lg:skew-x-3 lg:-skew-y-6 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            80%
          </p>
        </div>
        <div className="bg-bg-dark border-r-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 lg:w-1/2">
          <h5 className="text-lg font-bold text-green-secondary tracking-wide leading-10">
            Charity donation!
          </h5>
          Giveaway of 500 Crypto Pandas to our holders! The giveaway will be
          completely random and the people participating will be announced
          through our Twitter and Discord channels.
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-5 justify-between">
        <div className="bg-bg-dark  border-l-4 border-green-secondary opacity-90 rounded-md text-bg px-4 py-2 lg:w-1/2">
          <h5 className="text-lg font-bold text-green-secondary tracking-wide leading-10">
            Charity donation!
          </h5>
          Giveaway of 500 Crypto Pandas to our holders! The giveaway will be
          completely random and the people participating will be announced
          through our Twitter and Discord channels.
        </div>
        <div className="lg:w-1/2 relative lg:transform lg:skew-x-6 lg:skew-y-3 flex items-center justify-center">
          <p className="text-4xl text-bg-dark font-bold tracking-wider font-serifdm text-center">
            100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
