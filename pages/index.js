import Head from "next/head";
import Image from "next/image";
import Gradient from "../components/Gradient";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Roadmap from "../components/Roadmap";
import FounderCard from "../components/FounderCard";
import FAQ from "../components/FAQ";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="bg-bg">
        <header className="h-screen relative overflow-hidden">
          <Navbar />
          <Image
            src="/bg.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
          <div className="px-20 relative z-10">
            <div className="relative">
              <h1
                className={` ${styles.heading} text-7xl text-bg font-bold font-serifdm `}
              >
                Baby Panda Club
              </h1>
              <div className="w-1/2 float-right p-5">
                <p className="font-abel text-xl text-bg mb-4">
                  Baby Panda Club is an NFT project of 10,000 unique, randomly
                  generated collectibles living on the Ethereum blockchain.
                  <br />
                  <br />
                  We are an &quot;NFT for Good&quot; project, aiming at doing
                  charity work.
                </p>

                <button className="bg-green-secondary border border-green-main text-white py-2 px-4 hover:bg-green-main transition duration-200">
                  Buy on Opensea
                </button>
              </div>
            </div>
            <div className="pb-10 -mt-10 flex justify-center items-center">
              <Image src="/cool-panda.png" width={400} height={500} />
            </div>
          </div>
        </header>
        <main>
          <section
            id="about"
            className="bg-bg-dark max-w-7xl mx-auto gap-20 p-20 flex justify-around"
          >
            <div className="w-1/2">
              <h2 className="text-pink-main tracking-wider font-bold text-2xl  font-serifdm">
                Baby Panda Club
              </h2>
              <div className="w-full border-b border-bg pt-2 mb-4"></div>
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
                The end goal is to do charity work helping WWF&apos;s{" "}
                <Link href="https://support.worldwildlife.org/site/SPageServer?pagename=PandaAmbassadors">
                  <a target="_blank" className="text-green-secondary">
                    Panda Ambassador Program
                  </a>
                </Link>
                !
              </p>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <div className="relative w-80 h-80">
                <div className="absolute w-full h-full bg-bg opacity-10 transform rotate-12"></div>
                <Image src="/portrait.jpg" layout="fill" />
              </div>
            </div>
          </section>
          <div id="roadmap" className="bg-bg relative overflow-hidden pb-10">
            <Gradient />
            <div className=" px-20 py-5">
              <h3 className="font-serifdm tracking-wide mb-10 text-center font-bold text-bg-dark text-5xl">
                Roadmap
              </h3>
              <Roadmap />
            </div>
          </div>
          <section className="bg-bg-dark px-20 py-4 w-full font-abel">
            <h3 className="text-5xl tracking-wide font-serifdm font-bold mb-5 text-bg text-center">
              About us
            </h3>
            <p className="text-bg text-lg text-center mb-5 max-w-4xl mx-auto">
              We are a small team of NFT enthusiasts based in Greece. Our
              diverse skill set and excitement for this new way of connecting
              with people around the world are what gave life to this project.
            </p>
            <div className="flex justify-evenly items-center max-w-5xl mx-auto">
              <FounderCard
                image="/portrait.jpg"
                name="Anargyros"
                role="PAIKTARAS"
              />
              <div className="border-b border-bg w-20 mb-10"></div>
              <FounderCard image="/portrait.jpg" name="Xristos" role="zwon" />
              <div className="border-b border-bg w-20 mb-10"></div>
              <FounderCard image="/portrait.jpg" name="Spuros" role="zwon" />
            </div>
          </section>
          <FAQ />
        </main>
      </div>
      <footer className="bg-bg-dark p-10 font-abel">
        <p className="text-bg">
          Are you interested in sponsoring the project? Send a mail here.
        </p>
      </footer>
    </>
  );
}
