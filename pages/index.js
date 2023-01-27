import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Townsquare</title>
        <meta
          name="description"
          content="The better way to find friends in your city."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <section className="px-[5%] bg-[#010124] w-full h-screen snap-start relative flex flex-col md:flex-row-reverse justify-center items-center gap-[5%]">
          <h2 className="font-aveFedan text-titleColor text-titleSize top-[5%]  absolute  left-[5%]">
            townsquare
          </h2>
            <img
              src="hero.png"
              alt="Hero text"
              className="object-contain md:w-1/2"
            />
          <div className="w-full md:w-1/2">
            <h3 className="text-white text-[8vw] md:text-[4vw] lg:text-[3vw] font-bold leading-[1]">
              The better way to meet people in your city.
            </h3>
            <p className="text-blue text-[5vw] md:text-[2vw] lg:text-[1.5vw] leading-tight pt-[2%] lg:pt-[5%] pb-[5%] md:pb-0">
              Visit the{" "}
              <span className="font-bold text-purple">townsquare </span>to find
              and connect with like-minded people around you.
            </p>
          </div>
        </section>
        <section className="w-full px-[5%] py-[20%] md:py-[5%] bg-[#493672] flex flex-col md:flex-row-reverse gap-[5%] items-center justify-center snap-start h-screen">
          <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
            <div className="relative z-10">
              <img
                src="s1o.png"
                className="object-contain absolute top-[0.5%] -left-[8%] -z-10 min-w-[125%]"
              />
              <img
                src="s1.png"
                className="object-contain max-h-[40vh] md:max-h-[80vh] z-10"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-[#8D69E2] font-bold text-[10vw] md:text-[3.8vw] leading-[1]">
              Meet people at
              <br />
              <span className="text-white uppercase lg:block font-bold text-[13vw] md:text-[6vw] leading-[1]">
                The square
              </span>
            </h1>
            <p className="text-[#CCD0FF] text-[5vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              Find and interact with people who are on the same wavelength as
              you are.
              <br />
              You never know who you might run into!
            </p>
          </div>
        </section>
        <section className="w-full px-[5%] h-screen py-[20%] md:py-[5%] bg-[#63163B] flex flex-col md:flex-row-reverse gap-[5%] items-center justify-center snap-start">
          <div className="flex flex-col items-center gap-4">
            <div className="relative z-10">
              <img src="s3.png" className="object-contain max-h-[40vh] md:max-h-[80vh]" />
              <img
                src="s3o.png"
                className="object-contain absolute top-0 left-0 -z-10"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-[5%] lg:mt-0">
            <h1 className="text-white font-bold text-[10vw] md:text-[6vw] leading-[1]">
              <span className="text-[#AB2153]">
                Hop into the
                <br />{" "}
              </span>{" "}
              CONVERSATION
            </h1>
            <p className="text-[#D6D7D7] text-[5vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              No more sliding into DM&apos;s. We help you start a conversation
              but it&apos;s on you to keep it up.
            </p>
          </div>
        </section>
        <section className="w-full px-[5%] h-screen py-[20%] md:py-[5%] bg-[#317C1C] flex flex-col md:flex-row-reverse gap-[5%] items-center justify-center snap-start">
          <div className="flex flex-col items-center gap-4">
            <div className="relative z-10">
              <img src="s4.png" className="object-contain max-h-[50vh] md:max-h-[80vh]" />
              <img
                src="s4o.png"
                className="absolute object-contain -top-[10%] -left-[10%] min-w-[125%] -z-10"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-[5%] md:mt-0">
            <h1 className="text-[#F0F0F0] font-bold text-[10vw] md:text-[6vw] leading-[1]">
              CLUBS <br />
              <span className="text-[#0D6903] text-[10vw] md:text-[6vw] leading-[1]">unique to you.</span>
            </h1>
            <p className="text-[#D6D7D7] text-[5vw] md:text-[2.2vw] lg:text-[1.8vw] leading-tight pt-[2%]">
              Find and join local communities where people with similar
              interests can hang out, share stories, and organise meet ups.
            </p>
          </div>
        </section>
        <section className="w-full px-[2%] py-[20%] md:py-[5%] bg-[#161623] flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center snap-start md:h-screen">
          <img src="ii.png" className="object-contain h-auto md:max-h-[80vh]" />
        </section>
        {/* <section className="px-[5%] bg-[#161623] w-full grid place-items-center py-[20%] md:py-[5%]">
          <div className="flex flex-col items-center">
            <div className="relative w-1/2 md:w-2/3 lg:w-3/4 xl:w-full">
              <img src="i1.png" className="object-contain" />
              <div className="bg-[#C358B3] top-[22%] max-h-[3px] w-[50%] absolute z-10"></div>
              <div className="bg-[#C358B3] top-[22%] max-h-[3px] w-[3px] scale-[3] lg:scale-[5] rounded-full absolute z-10"></div>
              <div className="top-[18%] absolute z-10 -left-[24%] text-[1.7vw] leading-tight">
                <p className="text-white font-bold">5km thing</p>
                <p className="text-[#9F9FFF]">
                  We show people
                  <br /> around you.
                </p>
              </div>
            </div>
            <div className="relative z-10 w-1/2 md:w-2/3 lg:w-3/4 xl:w-full">
              <img src="i2.png" className="object-contain -mt-[20%]" />
              <div className="bg-[#C358B3] -top-[20%] max-h-[3px] w-[50%] absolute z-10 right-0"></div>
              <div className="bg-[#C358B3] -top-[20%] max-h-[3px] w-[3px] rounded-full absolute scale-[3] lg:scale-[5] z-10 right-0"></div>
              <div className="absolute z-10 text-[1.7vw] leading-tight -top-[24%] -right-[35%]">
                <p className="text-white font-bold">People first</p>
                <p className="text-[#9F9FFF]">
                  We show people
                  <br /> around you.
                </p>
              </div>
            </div>
            <div className="relative z-10 w-1/2 md:w-2/3 lg:w-3/4 xl:w-full">
              <img src="i3.png" className="object-contain -mt-[15%]" />
              <div className="bg-[#C358B3] -top-[7%] max-h-[3px] w-[80%] absolute z-10"></div>
              <div className="bg-[#C358B3] -top-[7%] max-h-[3px] w-[3px] rounded-full absolute z-10 scale-[3] lg:scale-[5]"></div>
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
        <section className="w-full px-[10%] pb-[20%] md:pb-0 pt-[10%] bg-[#161616] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[5%] snap-start">
          <div className="bg-[#F5F5F5] rounded-2xl px-[5%] py-[5%]">
            <h3 className="font-medium text-[#161616] text-[10vw] sm:text-[4.2vw] lg:text-[2.5vw] leading-tight">
              People
              <br />
              first
            </h3>
            <p className="text-[#535353] pt-[5%] text-[4.5vw] sm:text-[2.3vw] lg:text-[1.5vw] leading-tight">
              We put &apos;social&apos; back in the social network
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl px-[5%] py-[5%]">
            <h3 className="font-medium text-[#161616] text-[10vw] sm:text-[4.2vw] lg:text-[2.5vw] leading-tight">
              Location
              <br />
              based
            </h3>
            <p className="text-[#535353] pt-[5%] text-[4.5vw] sm:text-[2.3vw] lg:text-[1.5vw] leading-tight">
              The people and communities you discover change based on your
              location.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl px-[5%] py-[5%]">
            <h3 className="font-medium text-[#161616] text-[10vw] sm:text-[4.2vw] lg:text-[2.5vw] leading-tight">
              Keep up with
              <br />
              your City
            </h3>
            <p className="text-[#535353] pt-[5%] text-[4.5vw] sm:text-[2.3vw] lg:text-[1.5vw] leading-tight">
              A summary of all prominent events in your city is only a click
              away.
              <br />
              <br />
              <br />
            </p>
          </div>
        </section>
        {/* <section className="w-full px-[5%] py-[20%] md:py-[5%] bg-black flex flex-col lg:flex-row-reverse gap-[5%] items-center justify-center">
          <div className="flex flex-col gap-4">
            <div className="">
              <img src="i4.png" className="object-contain" />
            </div>
            <div className="">
              <img src="i5.png" className="object-contain" />
            </div>
            <div className="">
              <img src="i6.png" className="object-contain" />
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
            <img src="i7.png" className="object-contain" />
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
            <img src="i8.png" className="object-contain" />
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
        <section className="w-full px-[10%]  py-[5%] pb-[10%] bg-[#161616] flex flex-col md:flex-row gap-[5%]">
          <div className="h-full">
            <img src="i9.png" className="object-contain" />
          </div>
          <div className="flex flex-col pt-[5%] md:pt-0">
            <h2 className="text-white font-bold text-[7vw] md:text-[3vw] lg:text-[2vw]">
              We are working on it!
            </h2>
            <h4 className="text-[#B7B7B7] text-[4.5vw] md:text-[2vw] lg:text-[1.5vw] leading-tight">
              In the meantime, here&apos;s how you can reach out to us.
            </h4>
            <form
              action="/api/email"
              method="POST"
              className="flex flex-col text-[4vw] md:text-[2vw] lg:text-[1vw] w-fit gap-2 md:gap-5 pt-[5%] pb-[10%] md:pb-0"
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
              <label className="md:hidden text-[#C9C9C9]">Name</label>
              <input
                placeholder="Your name"
                type="text"
                name="name"
                className="bg-transparent placeholder:text-[#3F3F3F] md:placeholder:text-[#C9C9C9] text-[#676767] border border-[#C9C9C9] p-[2%] focus:outline-none w-[150%] lg:w-[200%] rounded-md hidden md:block"
              />
              <input
                placeholder="John Doe"
                type="text"
                name="name"
                className="bg-transparent placeholder:text-[#3F3F3F] md:placeholder:text-[#C9C9C9] text-[#676767] border border-[#C9C9C9] py-1 px-[2%] focus:outline-none w-[150%] rounded-md md:hidden"
              />
              <label className="md:hidden text-[#C9C9C9]">Email</label>
              <input
                placeholder="Your email"
                type="email"
                name="email"
                className="bg-transparent placeholder:text-[#3F3F3F] md:placeholder:text-[#C9C9C9] text-[#676767] border border-[#C9C9C9] p-[2%] focus:outline-none w-[150%] lg:w-[200%] rounded-md hidden md:block"
              />
              <input
                placeholder="Johndoe@hmail.com"
                type="email"
                name="email"
                className="bg-transparent placeholder:text-[#3F3F3F] md:placeholder:text-[#C9C9C9] text-[#676767] border border-[#C9C9C9] py-1 px-[2%] focus:outline-none w-[150%] rounded-md md:hidden"
              />
              <button
                className="w-[150%] md:w-fit px-8 rounded-md py-2 text-[#161616] bg-[#DDDDDD]"
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
