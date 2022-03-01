import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`moonsharks.io`}</title>
        <meta name="description" content="moonsharks.io" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-screen w-full bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/moon-sharks.jpg"
          className="object-cover w-full h-full"
          alt="moon sharks"
        />
      </div>
    </>
  );
}
