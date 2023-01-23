import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Townsquare</title>
        <meta name="description" content="The better way to find friends in your city." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-y-scroll scroll-smooth">
        <section className="px-[5%] bg-black w-full pb-[5%]">
          <h2 className="font-aveFedan text-titleColor text-titleSize py-[5%]">
            townsquare
          </h2>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-[5%]">
            <div className="mb-[5%] lg:mb-0 sm:w-2/3 md:w-3/4 lg:w-1/2">
              <img
                src="hero.png"
                alt="Hero text"
                className="object-contain h-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-white text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold leading-tight">
                The better way to find friends in your city.
              </h3>
              <p className="text-blue text-[3vw] md:text-[2vw] lg:text-[1.5vw] leading-tight pt-[2%] lg:pt-[5%]">
                Visit the{" "}
                <span className="font-bold text-purple">townsquare </span>to
                find and connect with like-minded people around you.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full px-[5%] py-[20%] md:py-[5%] bg-[#493672] flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-8">
              <button className="uppercase border-4 text-[#9867FF] border-[#9867FF] p-2 text-sm sm:text-lg md:text-2xl rounded-lg font-roboto font-bold">
                The square
              </button>
              <button className="uppercase text-[#7658B8] py-2 border-b border-[#7658B8] text-xs sm:text-lg md:text-xl font-roboto font-bold">
                your city
              </button>
            </div>
            <div className="">
              <img src="s1.png" className="object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-[#E3D7FF] font-bold text-[3.8vw] leading-[1]">
              Discover people at 
            <span className="text-white uppercase lg:block font-bold text-[6vw] pl-[1%] lg:pl-0 leading-[1]">
              The square
            </span>
            </h1>
            <p className="text-[#CCD0FF] text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              Find and interact with people who are on the same wavelength as
              you are.
              <br />
              You never know who you might run into!
            </p>
          </div>
        </section>
        <section className="w-full px-[5%] md:min-h-screen py-[20%] md:py-[5%] bg-[#1E4B80] flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="">
              <img src="s2.png" className="object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-white font-bold text-[6vw] leading-[1]">
              Always have someone to hang out with
            </h1>
            <p className="text-[#D6D7D7] text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              Whether it&apos;s during your morning commute or a late-night
              study session, always have a group of people to share and talk to.
              It&apos;s now easier than ever to start conversations with people
              around you.
            </p>
          </div>
        </section>
        <section className="w-full px-[5%] md:min-h-screen py-[20%] md:py-[5%] bg-[#63163B] flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="">
              <img src="s3.png" className="object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-white font-bold text-[6vw] leading-[1]">
              Hop into the conversation
            </h1>
            <p className="text-[#D6D7D7] text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              No more sliding into DM&apos;s. We help you start a conversation
              but it&apos;s on you to keep it up.
            </p>
          </div>
        </section>
        <section className="w-full px-[5%] md:min-h-screen py-[20%] md:py-[5%] bg-[#418130] flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="">
              <img src="s4.png" className="object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-[#F0F0F0] font-bold text-[6vw] pr-[2%] leading-[1]">
              Clubs unique to you.
            </h1>
            <p className="text-[#D6D7D7] text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              Find and join local communities where people with similar
              interests can hang out, share stories, and organise meet ups.
            </p>
          </div>
        </section>
        {/* <section className="px-[5%] bg-[#161623] w-full grid place-items-center py-[20%] md:py-[5%]">
          <div className="flex flex-col items-center">
            <div className="relative w-1/2 md:w-2/3 lg:w-3/4 xl:w-full">
              <img src="i1.png" className="object-cover" />
              <div className="bg-[#C358B3] top-[22%] h-[3px] w-[50%] absolute z-10"></div>
              <div className="bg-[#C358B3] top-[22%] h-[3px] w-[3px] scale-[3] lg:scale-[5] rounded-full absolute z-10"></div>
              <div className="top-[18%] absolute z-10 -left-[24%] text-[1.7vw] leading-tight">
                <p className="text-white font-bold">5km thing</p>
                <p className="text-[#9F9FFF]">
                  We show people
                  <br /> around you.
                </p>
              </div>
            </div>
            <div className="relative z-10 w-1/2 md:w-2/3 lg:w-3/4 xl:w-full">
              <img src="i2.png" className="object-cover -mt-[20%]" />
              <div className="bg-[#C358B3] -top-[20%] h-[3px] w-[50%] absolute z-10 right-0"></div>
              <div className="bg-[#C358B3] -top-[20%] h-[3px] w-[3px] rounded-full absolute scale-[3] lg:scale-[5] z-10 right-0"></div>
              <div className="absolute z-10 text-[1.7vw] leading-tight -top-[24%] -right-[35%]">
                <p className="text-white font-bold">People first</p>
                <p className="text-[#9F9FFF]">
                  We show people
                  <br /> around you.
                </p>
              </div>
            </div>
            <div className="relative z-10 w-1/2 md:w-2/3 lg:w-3/4 xl:w-full">
              <img src="i3.png" className="object-cover -mt-[15%]" />
              <div className="bg-[#C358B3] -top-[7%] h-[3px] w-[80%] absolute z-10"></div>
              <div className="bg-[#C358B3] -top-[7%] h-[3px] w-[3px] rounded-full absolute z-10 scale-[3] lg:scale-[5]"></div>
              <div className="-top-[9%] absolute z-10 -left-[26%] text-[1.7vw] leading-tight">
                <p className="text-white font-bold">Filters</p>
                <p className="text-[#9F9FFF]">
                  Filters for unique
                  <br /> Groups
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full px-[5%] pt-[20%] pb-[10%] md:pb-0 md:pt-[10%] bg-[#161616] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10%]">
          <div className="bg-[#F5F5F5] rounded-2xl px-[5%] py-[5%]">
            <h3 className="font-medium text-[#161616] text-[5vw] md:text-[4.2vw] lg:text-[2.5vw]">
              People first
            </h3>
            <p className="text-[#535353] pt-[5%] text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] leading-tight">
              We put &apos;social&apos; back in the social network
            </p>
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl px-[5%] py-[5%]">
            <h3 className="font-medium text-[#161616] text-[5vw] md:text-[4.2vw] lg:text-[2.5vw] md:pr-[40%] leading-tight">
              Location based
            </h3>
            <p className="text-[#535353] pt-[5%] text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] leading-tight">
              The people and communities you discover change based on your
              location.
            </p>
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl px-[5%] py-[5%]">
            <h3 className="font-medium text-[#161616] text-[5vw] md:text-[4.2vw] lg:text-[2.5vw] leading-tight">
              Keep up with your City
            </h3>
            <p className="text-[#535353] pt-[5%] text-[3vw] md:text-[2.3vw] lg:text-[1.5vw] leading-tight">
              A summary of all prominent events in your city is only a click
              away.
            </p>
          </div>
        </section>
        {/* <section className="w-full px-[5%] py-[20%] md:py-[5%] bg-black flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center">
          <div className="flex flex-col gap-4">
            <div className="">
              <img src="i4.png" className="object-cover" />
            </div>
            <div className="">
              <img src="i5.png" className="object-cover" />
            </div>
            <div className="">
              <img src="i6.png" className="object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-white font-bold text-[6vw] leading-[1]">
              Find your tribe.
            </h1>
            <p className="text-[#977FCC] text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              Finding people who are on the same wavelength as you are is now
              easier than ever.
            </p>
          </div>
        </section> */}
        {/* <section className="w-full px-[5%] py-[20%] md:py-[5%] bg-black flex gap-[5%] flex-col lg:flex-row-reverse items-center justify-center">
          <div className="">
            <img src="i7.png" className="object-cover" />
          </div>
          <div className="lg:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-white font-bold text-[6vw] leading-[1]">
              Talk to people around you.
            </h1>
            <p className="text-[#977FCC] text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              Share with people in your area. You never know who you might run
              into!
            </p>
          </div>
        </section>
        <section className="w-full px-[5%] py-[20%] md:py-[5%] bg-black flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center">
          <div className="">
            <img src="i8.png" className="object-cover" />
          </div>
          <div className="lg:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-white font-bold text-[6vw] leading-[1]">
              Communities unique to you.
            </h1>
            <p className="text-[#789FC3] text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] pt-[2%] leading-tight">
              Find and join citywide communities with individuals having similar
              interests, opinions, and backgrounds.
            </p>
          </div>
        </section>
        <section className="w-full p-[5%] bg-black grid place-items-center">
          <div className="">
            <h2 className="text-white text-[5vw] md:text-[3vw] lg:text-[2.5vw] font-medium leading-[1]">
              In a world so connected, it can be really hard to make friends
            </h2>
            <h4 className="text-[4vw] md:text-[2.3vw] lg:text-[2.1vw] text-[#A586A4] leading-tight pt-[2%] md:pr-[30%]">
              We are dedicated to building products which help you, inspire you
              and bring you joy
            </h4>
          </div>
        </section> */}
        <section className="w-full px-[15%] py-[5%] bg-[#161616] flex flex-col md:flex-row gap-[5%]">
          <div className="h-full">
            <img src="i9.png" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-[4vw] md:text-[3vw] lg:text-[2vw]">
              We are working on it
            </h2>
            <h4 className="text-[#B7B7B7] text-[3vw] md:text-[2vw] lg:text-[1.5vw] leading-tight">
              In the meantime, here&apos;s how you can reach out to us
            </h4>
            <form
              action="/api/email"
              method="POST"
              className="flex flex-col text-[2.5vw] md:text-[2vw] lg:text-[1vw] w-fit gap-[10%] pt-[5%]"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const url = form.action;
                const formData = new FormData(form);
                fetch(url, {
                  method: "POST",
                  body: JSON.stringify(Object.fromEntries(formData.entries())),
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                })
                  .then((_) => alert("Submitted Successfully!"))
                  .catch((e) => console.error(e));
              }}
            >
              <input
                placeholder="Your name"
                type="text"
                required
                name="name"
                className="bg-transparent placeholder:text-[#C9C9C9] text-[#676767] border border-[#C9C9C9] p-[2%] focus:outline-none w-[150%] rounded-md"
              />
              <input
                placeholder="Your email"
                type="email"
                required
                name="email"
                className="bg-transparent placeholder:text-[#C9C9C9] text-[#676767] border border-[#C9C9C9] p-[2%] focus:outline-none w-[150%] rounded-md"
              />
              <button
                className="w-[150%] bg-white rounded-md py-2 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
