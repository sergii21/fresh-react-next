"use client";

import Image from "next/image";
import Link from "next/link";
import AddButton from "./buttons/addButton";

export default function PageHeader({ handleSetAddFormOpened }) {
  return (
    <header className="h-[90px] fixed w-full flex justify-between items-center px-10 bg-background">
      <Link href={"/"}>
        <Image
          src="/logo-text.svg"
          alt={""}
          width={250}
          height={100}
          className="dark:invert"
        ></Image>
      </Link>
      <div onClick={handleSetAddFormOpened}>
        <div>
          <AddButton></AddButton>
        </div>
      </div>
    </header>
  );
}
