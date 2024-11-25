import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/FrankRuhlLibre-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The best in class URL shortener!
          </p>
          <p className="px-36 text-center">
            This is the most easy to use URL shortener in the world.
            We understand your needs and let you use our shortener
            free of cost with login or any hassle. We stand for and
            with you!
          </p>
          <div className="flex gap-3 justify-start">
                <Link href="/shorten"><button className='bg-blue-500 hover:bg-blue-600 rounded-lg text-white shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-blue-500 hover:bg-blue-600 rounded-lg text-white shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </div>
          </div>

          <div className="flex justify-start relative">
            <Image className="mix-blend-darken" src={"/vector.jpg"} alt="An image of a vector" fill={true}/>
          </div>
      </section>
    </main>
  );
}
