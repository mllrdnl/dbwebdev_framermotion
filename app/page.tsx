import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col text-[#f5f5f5] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mt-10">
      {/* IMAGE CONTAINER */}
      <div className="lg:w-5/6 flex flex-col justify-center items-center">
        <Image
          src="/signlogonobg.png"
          alt="dbwebdev neon sign logo"
          width={800}
          height={600}
          style={{ objectFit: "contain" }}
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="lg:w-5/6 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Full Stack Developer, Technology Connoisseur
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Here to help you with all of your website and tech needs! Including,
          but not limited to: custom websites, web apps, e-commerce website and
          creation and maintence, no-code solutions, and more.{" "}
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
