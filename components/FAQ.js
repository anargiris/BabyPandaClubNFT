import React from "react";
import Link from "next/link";

const FAQ = () => {
  return (
    <section id="faq" className="py-5 w-full bg-bg font-abel">
      <h3 className="md:text-5xl text-3xl tracking-wide font-serifdm font-bold mb-8 text-bg-dark text-center">
        FAQ
      </h3>
      <div className="max-w-6xl px-5 md:px-0 mx-auto flex md:flex-row flex-col justify-between md:gap-20">
        <div className="flex flex-col md:w-1/2">
          <div className="mb-5">
            <p className="text-bg-dark md:text-xl text-lg font-semibold mb-1">
              What is an NFT?
            </p>
            <p className="text-gray-700 md:text-lg">
              NFT is short for &quot;non-fungible token.&quot; An NFT is an
              indivisible token capable of storing a digital file for a specific
              purpose. Thus, an NFT can represent a work of art, music album, or
              any other type of digital file.
            </p>
          </div>
          <div className="mb-5">
            <p className="text-bg-dark md:text-xl text-lg font-semibold mb-1">
              How many Baby Pandas are there?
            </p>
            <p className="text-gray-700 md:text-lg">
              10.000 baby pandas are going to be listed for sale with 50 more
              Legendary Baby Pandas to be released when we reach the 40%
              milestone of our roadmap.
            </p>
          </div>
          <div className="mb-5">
            <p className="text-bg-dark md:text-xl text-lg font-semibold mb-1">
              Do I own commercial rights to my Baby Panda?
            </p>
            <p className="text-gray-700 md:text-lg">
              Yes! You have 100% creative and commercial rights to your Baby
              Panda as long as it exists on your wallet.
            </p>
          </div>
          <div className="mb-5">
            <p className="text-bg-dark md:text-xl text-lg font-semibold mb-1">
              What is your charity contribution?
            </p>
            <p className="text-gray-700 md:text-lg">
              For each Baby Panda, 30% of the introductory sale and 20% of the
              royalties would be donated to a selected charitable organization.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2">
          <div className="mb-5">
            <p className="text-bg-dark md:text-xl text-lg font-semibold mb-1">
              How do I get a Baby Panda?
            </p>
            <p className="text-gray-700 md:text-lg">
              Baby pandas will be uploaded on the{" "}
              <Link href="https://opensea.io">
                <a
                  target="_blank"
                  className="text-green-secondary font-semibold"
                >
                  Opensea marketplace
                </a>
              </Link>{" "}
              and will be available for sell to anyone.
            </p>
          </div>
          <div className="mb-5">
            <p className="text-bg-dark md:text-xl text-lg font-semibold mb-1">
              What chain this project lives on?
            </p>
            <p className="text-gray-700 md:text-lg">
              The project will live on the Ethreum blockchain. No plans of
              adopting the project to other blockchains for now.
            </p>
          </div>
          <div className="mb-5">
            <p className="text-bg-dark md:text-xl text-lg font-semibold mb-1">
              What are the benefits of owning a Baby Panda?
            </p>
            <p className="text-gray-700 md:text-lg">
              Being a holder of a Baby Panda NFT gives you automatic access to
              all of our giveaways and community events. You are also helping us
              reach our charity goals as mentioned on our roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
