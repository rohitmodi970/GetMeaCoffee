import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 items-center flex-col text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold text-3xl flex items-center justify-center text-center gap-2 md:text-5xl">Buy Me a Coffee <span className="text-center"><img width={90} src="/coffee.gif" alt="" /></span></div>
        <p className="text-lg text-center">A funding platform for creators. Get funded by your fans and followers</p>
        <div className="">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32 pb-32 pt-14 flex flex-col items-center justify-center px-10">
        <h2 className="text-3xl font-bold mb-14 text-center">Your fans can buy a coffee</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 text-center flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={70} src="/work.gif" alt="man.gif" />

            <p className="font-bold text-center">Fans want to help</p>
            <p>Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 text-center flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={70} src="/coin.gif" alt="coin.gif" />

            <p className="font-bold text-center">Fans wants to contribute</p>
            <p>Your fans are willing to contribute financially.</p>
          </div>
          <div className="item space-y-3 text-center flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={70} src="/demand.gif" alt="man.gif" />

            <p className="font-bold text-center">Fans wants to collaborate</p>
            <p>Your fans are ready to collaborate with you.</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-14 text-center">Learn more about us</h2>
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">

        <iframe className="w-full h-full" src="https://www.youtube.com/embed/_alpSvtA1a4?si=uYWxDLvFwS_GA_Md" title="YouTube video player" style={{ border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
