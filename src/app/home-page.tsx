"use client";

import { Inter } from "@next/font/google";
import BrochureForm from "../components/BrochureForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Text Parsing Demo
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
            <BrochureForm />
          </div>
        </main>
      </div>
    </>
  );
}
