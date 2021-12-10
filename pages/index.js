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
        <header className="h-screen w-full relative overflow-hidden">
          <Navbar />
          <Image
            src="/bg.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
          <div className="lg:px-20 relative z-10">
            <div className="relative">
              <h1
                className={` ${styles.heading} lg:text-7xl text-5xl text-center lg:text-left whitespace-nowrap text-bg font-bold font-serifdm `}
              >
                Baby Panda Club
              </h1>
              <div className="lg:w-1/2 float-right p-5">
                <p className="font-abel lg:text-xl text-bg mb-8 text-center px-2 lg:text-left">
                  Baby Panda Club is an NFT project of 10,000 unique, randomly
                  generated collectibles living on the Ethereum blockchain.
                  <br />
                  <br />
                  We are an &quot;NFT for Good&quot; project, aiming at doing
                  charity work.
                </p>

                <button className="bg-green-secondary mx-auto border border-green-main text-white py-2 px-4 flex justify-center items-center hover:bg-green-main transition duration-200">
                  Buy on Opensea
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section
            id="about"
            className="bg-bg-dark max-w-7xl mx-auto gap-20 lg:p-20 p-5 flex lg:flex-row flex-col justify-around"
          >
            <div className="lg:w-1/2">
              <h2 className="text-pink-main tracking-wider font-bold text-2xl  font-serifdm">
                Baby Panda Club
              </h2>
              <div className="w-full border-b border-bg pt-2 mb-4"></div>
              <p className="text-bg font-abel leading-7">
                The Baby Panda Club is a collection of 10,000 unique and
                randomly generated collectibles living on the ECR-20 blockchain.
                Each baby panda is a combination of different hand-drawn images.
                <br /> <br /> Our goal is to create a strong community, giving
                back to holders, hosting cool events and raising awareness about
                endangered species.
              </p>
              <br />
              <p className="text-xs mt-4 text-pink-main italic opacity-90">
                For each baby panda 30% of the introductory sale and 20% of the
                royalties will be donated to a selected charitable organization.
              </p>
            </div>
            <div className="flex items-center justify-center lg:w-1/2 pb-12 lg:pb-0">
              <div className="relative w-80 h-80">
                <div className="absolute w-full h-full bg-bg opacity-10 transform rotate-12"></div>
                <Image src="/portrait.jpg" layout="fill" />
              </div>
            </div>
          </section>
          <div
            id="roadmap"
            className="bg-bg relative overflow-hidden min-h-screen pb-10"
          >
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
      <footer className="bg-bg-dark py-5 px-10 font-abel">
        <p className="text-bg">
          Are you interested in sponsoring the project?{" "}
          <a
            href="mailto:babypandaclub.bpc@gmail.com"
            className="text-pink-main font-bold"
          >
            Email us.
          </a>
        </p>
        <p className="mt-4 text-bg font-serifdm tracking-wide text-sm">
          &#169; Baby Panda Club {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
