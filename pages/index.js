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
          Moonsharks nft is coming soon
        </div>
        <div className="absolute bottom-[50px] left-0 flex items-center justify-center w-full gap-4 z-30">
          <a href="" target="_blank">
            <BsTwitter className="h-6 w-6 text-white" />
          </a>
          <a href="" target="_blank">
            <BsInstagram className="h-6 w-6 text-white" />
          </a>
          <a href="" target="_blank">
            <BsDiscord className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </>
  );
}
