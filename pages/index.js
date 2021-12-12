import Image from "next/image";
import Gradient from "../components/Gradient";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Roadmap from "../components/Roadmap";
import FounderCard from "../components/FounderCard";
import FAQ from "../components/FAQ";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import bg from "../public/bg.jpg";
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Baby Panda Club</title>
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Baby Panda Club" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://babypandaclub.io" />
        <meta property="og:url" content="https://dimitrakoudas.gr" />
        <meta property="og:title" content="Baby Panda Club" />
        <meta
          name="google-site-verification"
          content="Eighnv1FNLp_UWmPnGHGZndiWCBXCfz_8fTGjRrgxP4"
        />
        <meta
          property="description"
          content="Official website for the Baby Panda Club NFT project. The project aims at providing support through donations and giveaways to endangered wildlife."
        />
        <meta
          property="og:description"
          content="Official website for the Baby Panda Club NFT project. The project aims at providing support through donations and giveaways to endangered wildlife."
        />
        <meta
          property="og:image"
          content="https://babypandaclub.io/portrait.jpg"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div className="bg-bg">
        <header
          className={`${styles.background} bg-bg-dark h-screen w-full relative overflow-hidden z-20`}
        >
          <div className="md:block hidden">
            {/* <Image
              src={bg}
              // layout="fill"
              // objectFit="cover"
              // objectPosition="bottom"
              alt="Baby Panda Club header background image"
            /> */}
            <Image
              src="/bg.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              alt="Baby Panda Club header background image"
            />
          </div>

          <Navbar />
          <div className="md:px-20 relative">
            <div className="relative pt-4 md:flex md:flex-row items-start gap-20 justify-center">
              <h1
                className={` ${styles.heading} md:text-7xl text-5xl 2xl:text-8xl text-center md:text-left whitespace-nowrap text-bg font-bold font-serifdm md:mb-0 mb-4 `}
              >
                Baby Panda Club
              </h1>
              <div className="md:w-1/2 float-right p-5">
                <p className="font-abel md:text-xl text-bg mb-8 text-center px-2 md:text-left 2xl:text-3xl">
                  Baby Panda Club is an NFT project of 10,000 unique, randomly
                  generated collectibles living on the Ethereum blockchain.
                  <br />
                  <br />
                  We are an &quot;NFT for Good&quot; project, aiming at doing
                  charity work.
                </p>
                <Link href="https://opensea.io/collection/baby-panda-club">
                  <button className="bg-green-secondary mx-auto md:mx-0 border border-green-main text-white py-2 px-4 md:justify-self-auto md:items-baseline md:block flex justify-center items-center 2xl:text-lg hover:bg-green-main transition duration-200">
                    Buy on Opensea
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="bg-bg-dark ">
            <div
              id="about"
              className="max-w-7xl mx-auto gap-20 md:p-20 p-5 flex md:flex-row flex-col justify-around"
            >
              <div className="md:w-1/2">
                <h2 className="text-pink-main 2xl:text-3xl tracking-wider font-bold text-2xl  font-serifdm">
                  Baby Panda Club
                </h2>
                <div className="w-full border-b border-bg pt-2 mb-4"></div>
                <p className="text-bg font-abel leading-7 2xl:text-lg">
                  Baby Panda Club is a collection of 10,000 unique and randomly
                  generated collectibles living on the ECR-20 blockchain. Each
                  baby panda is a combination of different hand-drawn images.
                  <br /> <br /> Our goal is to create a strong community, giving
                  back to holders, hosting cool events and raising awareness
                  about endangered species.
                </p>
                <br />
                <p className="text-xs mt-4 font-abel text-pink-main italic opacity-90 2xl:text-lg">
                  For each baby panda 30% of the introductory sale and 20% of
                  the royalties will be donated to a selected charitable
                  organization.
                </p>
              </div>
              <div className="flex items-center justify-center md:w-1/2 pb-12 md:pb-0">
                <div className="relative w-80 h-80">
                  <div className="absolute w-full h-full bg-bg opacity-10 transform rotate-12"></div>
                  <Image
                    src="/PandaverseGif.gif"
                    layout="fill"
                    alt="Baby Panda gif showcase of different pandas"
                  />
                </div>
              </div>
            </div>
          </section>
          <div id="roadmap" className="bg-bg relative overflow-hidden  pb-10">
            <Gradient />
            <div className="smd:px-20 px-5 py-5">
              <h3 className="font-serifdm tracking-wide mb-10 text-center font-bold text-bg-dark text-5xl">
                Roadmap
              </h3>
              <Roadmap />
            </div>
          </div>
          <section className="bg-bg-dark md:px-20 px-2 py-4 w-full font-abel">
            <h3 className="md:text-5xl text-3xl tracking-wide font-serifdm font-bold mb-5 text-bg text-center">
              About us
            </h3>
            <p className="text-bg md:text-md text-center 2xl:text-lg mb-5 md:max-w-4xl mx-auto">
              We are a small team of NFT enthusiasts based in Greece. Our
              diverse skill set and excitement for this new way of connecting
              with people around the world are what gave life to this project.
            </p>
            <div className="flex md:flex-row flex-col justify-evenly md:items-center md:max-w-5xl md:mx-auto">
              <FounderCard
                image="/profiles/Xristos.png"
                name="Pandaverse"
                role="Founder - Creative Lead"
                twitterLink="https://twitter.com/Ristabots"
              />
              <div className="border-b border-bg w-20 mb-10 md:block hidden"></div>
              <FounderCard
                image="/profiles/Kobd.png"
                name="KungfusedPanda"
                role="Founder - Project Lead"
                twitterLink="https://twitter.com/kungfusedpanda"
              />
              <div className="border-b border-bg w-20 mb-10 md:block hidden"></div>
              <FounderCard
                image="/profiles/Anargiros.png"
                name="LazyPanda"
                role="Founder - Development lead"
                twitterLink="https://twitter.com/AStylidis"
              />
            </div>
          </section>
          <FAQ />
        </main>
      </div>
      <footer className="bg-bg-dark py-5 md:px-10 px-5 font-abel">
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
