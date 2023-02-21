import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const route = useRouter();
  const name = route.query.name;

  return (
    <div className="h-screen grid">
      <div className="m-auto">
        <h4 className="text-3xl mb-6 max-w-md font-bold">
          <span className="capitalize font-bold text-[#333333]">{name}</span>{" "}
          Page
        </h4>
        <Link href="/" className="underline text-blue-500 text-xl">
          Back Home
        </Link>
      </div>
    </div>
  );
}
