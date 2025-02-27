"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./UI/buttons/button";

export default function Home() {
  return (
    <div className="bg-primaryBackground grid grid-rows-[1px_1fr_1px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <Image
          src="/svgviewer-output (5).svg"
          alt="Next.js logo"
          width={800}
          height={200}
          priority
          className="dark:invert"
        />
        <p className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Get always fresh
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href={"/input"}>
            <Button>Input page</Button>
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href={"/auth/signUp"}
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
