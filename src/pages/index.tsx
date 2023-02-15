import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import TextFieldList from "../components/BrochureForm";
import BrochureForm from "../components/BrochureForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Brochure Parsing Demo</title>
        <meta
          name="description"
          content="A demo which uses AI to parse a commercial real estate brochure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-full p-4">
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Brochure Parsing Demo
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="py-10 max-w-xl">
                <div className="mt-4 ">
                  <BrochureForm />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
