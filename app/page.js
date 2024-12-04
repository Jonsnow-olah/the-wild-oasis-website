import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";


export default function Page() {
  return (
    <main className="mt-24">
      <Image 
        src={bg}
        className="object-cover object-top" 
        fill
        placeholder="blur" 
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-colors-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-colors-accent-500 px-8 py-6 text-colors-primary-800 text-lg font-semibold hover:bg-colors-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
