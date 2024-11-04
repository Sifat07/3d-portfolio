import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sifatjasim@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Sifat</p>
              <p className="grid-subtext">
                With 3 years of experience, I have honed my skills in frontend
                and backend developed, with a focus on animated 3d website.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">What I Do</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystem. I also have experience in Node.js,
                Express.js, Fastify and Sql. I have a passion for creating
                beautiful and functional websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4 ">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm-h[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 23.8103, lng: 90.4125, label: "Dhaka" }]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I am based in Bangladesh, with remote work available.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2  xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-2 ">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                  className="w-6 h-6"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  sifatjasim@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;