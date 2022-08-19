import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { getProducts, Product } from "../api/products";
import { ProductCard } from "../components/ProductCard";
import { MainNavigation } from "../components/MainNavigation";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

export async function getStaticProps() {
  return {
    props: {
      products: getProducts(),
    },
  };
}

type HomeProps = { products: Product[] };

const year = new Date().getFullYear()

const Home: NextPage<HomeProps> = ({ products }) => {
  const {content} = useContext(MainContext);
  return (
    <div className="w-full">
      <Head>
        <title>Bryan Azofeifa Borbon</title>
        <meta name="description" content="Helping developers reach the next level" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavigation />

      <header className="text-center pt-8 pb-12 lg:pb-16">
        {/* <h1 className="font-bold text-3xl lg:text-5xl text-sky-800"> */}
        <h1 className="font-bold text-3xl lg:text-5xl text-white">
          Bryan Azofeifa
        </h1>
        <h3 className="mt-2 lg:mt-6 text-md lg:text-lg">{content.title} 🚀</h3>
      </header>

      <main className="mx-auto">
        <div className="text-left sm:mt-10 flex flex-col sm:flex-row justify-center items-stretch">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="container mx-auto sm:mt-16">
          <div className="flex flex-col sm:flex-row align-top justify-center">
            <div className="sm:px-4">
              <h3 className="text-2xl py-2">{content.about_me}</h3>
              <ul className="flex flex-col">
                <li className="mb-2">🇨🇷 {content.from} Costa Rica</li>
                <li className="mb-2">🧒 {year - 1989} {content.years_old}</li>
                <li className="mb-2">❤️ {content.mentoring}</li>
                <li className="mb-2">
                  👨‍💻 {year - 2008} {content.years_coding} <br />
                  <span className="ml-6">(Javascript / React / Python)</span>
                </li>
                <li className="mb-2"></li>
              </ul>
            </div>

            <div className="sm:px-8">
              <h3 className="text-2xl py-2">{content.connect_headline}</h3>
              <ul className="flex flex-col">
                <li className="mb-2">
                  <Link href="https://twitter.com/bryancr89" target="_blank">
                    <div className="flex align-middle cursor-pointer">
                      <a>
                        <Image
                          className="rounded"
                          src="/twitter.svg"
                          alt="Twitter Logo"
                          height={20}
                          width={20}
                        />
                      </a>
                      <span className="ml-2">Twitter</span>
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://www.linkedin.com/in/bryancr89" target='_blank'>
                    <div className="flex align-middle cursor-pointer">
                      <a>
                        <Image
                          className="bg-white rounded"
                          src="/linkedin.svg"
                          alt="Linkedin Logo"
                          height={20}
                          width={20}
                        />
                      </a>
                      <span className="ml-2">Linkedin</span>
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://www.youtube.com/channel/UCrVBqbRiR84HMTRA57c4Mmw" target='_blank'>
                    <div className="flex align-middle cursor-pointer">
                      <a>
                        <Image
                          src="/youtube.png"
                          alt="Youtube Logo"
                          height={20}
                          width={20}
                        />
                      </a>
                      <span className="ml-2">Youtube</span>
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://dev.to/bryancr89/" target='_blank'>
                    <div className="flex align-middle cursor-pointer">
                      <a>
                        <span className="rounded-sm flex border border-solid border-white">
                          <Image
                            src="/dev-to.png"
                            alt="Devto"
                            height={20}
                            width={20}
                          />
                        </span>
                      </a>
                      <span className="ml-2">Blog</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:px-4 mt-10 sm:mt-0 mb-10 sm:mb-0">
              <h3 className="text-2xl py-2">{content.newsletter}</h3>
              <p className="pb-2">
                {content.get_notified} ❤️️
              </p>
              <div className="inline-block">
                <input
                  className="p-2 rounded-sm w-full lg:w-52 mb-2 lg:mb-0"
                  placeholder="Email"
                  type="email"
                ></input>
                <button className="p-2 w-full lg:w-auto bg-sky-800 text-white hover:bg-sky-600">
                  {content.subscribe}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
