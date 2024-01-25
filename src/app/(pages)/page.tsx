"use client";

import JetBrains from "../components/JetBrainsIDEA";

export default function Home() {
  return (
    <>
    <div className="container m-auto w-full max-w-7xl px-2">
      <JetBrains />
      <p className="text-gray-400 text-sm">* Design based on IntelliJ IDEA 2023.</p>
    </div>
    </>
  );
}
