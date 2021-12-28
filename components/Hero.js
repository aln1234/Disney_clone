import Image from "next/image";

import Head from "next/head";


function Hero() {
    return (
      <section className="relative">
          <Head>
              <title>Log In | Disney+</title>
              <link rel="icon" href="/favicon.ico" />
              
          </Head>
          <div className="relative min-h-[calc(100vh-72px)]">
          <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />

          </div>

      </section>
    )
}

export default Hero
