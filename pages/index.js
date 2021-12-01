import Head from "next/head";
import Image from "next/image";
import Gradient from "../components/Gradient";
import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="bg-bg">
        <div className="h-screen relative overflow-hidden">
          <Gradient />
          <Navbar />
          <div className="px-20 relative z-10 flex justify-around gap-20">
            <div className="relative w-2/3">
              <h1
                className={` ${styles.heading} text-7xl text-gray-800 font-bold font-serifdm mb-12`}
              >
                Baby Panda Club
              </h1>
              <div className="bg-green-secondary w-full mb-6 shadow-sm border border-green-main bg-opacity-10 p-5">
                <p className="font-abel text-xl text-gray-800">
                  Baby Pandas Club is an NFT project of 10,000 unique, randomly
                  generated collectibles living on the Ethereum blockchain.
                  <br />
                  <br />
                  Our goal is to create a big, caring community while being
                  charity-friendly and generous to the holders.
                </p>
              </div>
              <div>
                <button className="bg-green-secondary border border-green-main text-white py-2 px-4">
                  Buy on Opensea
                </button>
              </div>
              <div className="absolute bottom-0 flex gap-5">
                <Link href="/">
                  <a>
                    <Image src="/icons/twitter.svg" width={40} height={40} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image src="/icons/discord.svg" width={40} height={40} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="pb-10 -mt-10 flex justify-center items-center">
              <Image src="/cool-panda.png" width={400} height={500} />
            </div>
          </div>
        </div>
        <div className="bg-bg-dark max-w-7xl mx-auto gap-20 p-20 flex justify-around">
          <div className="w-1/2">
            <h2 className="text-pink-main tracking-wider font-bold text-2xl  font-serifdm">
              Baby Panda Club
            </h2>
            <div className="w-full border-b border-pink-main pt-2 mb-4"></div>
            <p className="text-bg font-abel leading-7">
              A collection of <span className="font-bold">10.000</span> unique
              and super cool baby pandas living in the{" "}
              <span className="text-green-secondary font-bold tracking-wide">
                Pandaverse!
              </span>
              <br />
              Each baby panda is a combination of hand-drawn and computer
              generated images, completely unique to each other based on 8
              different traits. <br /> <br />
              Our plan is to build a strong community, provide to the holders
              with giveaways and cool events while raising awarness about the
              endangered species of pandas around the world.
            </p>
            <p className="text-bg text-lg mt-5 font-bold font-abel leading-7">
              The end goal is to do charity work helping WWF's{" "}
              <span className="text-green-secondary">
                Panda Ambassador Program
              </span>
              !
            </p>
          </div>
          <div className="border border-bg p-20 w-1/2"></div>
        </div>
      </div>
    </>
  );
}
