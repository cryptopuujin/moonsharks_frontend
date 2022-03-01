import Head from "next/head";
import { BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`moonsharks.io`}</title>
        <meta name="description" content="moonsharks.io" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-screen w-full bg-black relative select-none">
        <div className="h-screen w-full bg z-20 top-0 left-0 absolute"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/moon-sharks.jpg"
          className="object-cover w-full h-full z-10"
          alt="moon sharks"
        />
        <div className="absolute z-30 top-[50px] left-1/2 -translate-x-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/moonshark-logo-main.png"
            alt="moonshark logo"
            className="w-20"
          />
        </div>
        <div className="font-bebasneue z-30 absolute left-1/2 text-white text-6xl -translate-x-1/2 top-1/3">
          MOONSHARKS NFT COMING SOON!
        </div>
        <div className="absolute bottom-[50px] left-0 w-full z-30">
          <div className="text-white font-bebasneue w-full text-center mb-5">
            FOLLOW US ON SOCIAL MEDIA
          </div>
          <div className="flex gap-4 w-full justify-center items-center">
            <a
              href="https://twitter.com/MoonSharksNFT"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/moonsharks.io/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://discord.gg/k4g5Gqger4"
              target="_blank"
              rel="noreferrer"
            >
              <BsDiscord className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
