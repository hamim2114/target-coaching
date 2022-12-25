import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { SiGooglescholar } from "react-icons/si";
import slide1 from "../assets/slide/slide1.jpg";
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.jpg";
import slide4 from "../assets/slide/slide4.jpg";

const About = () => {
  const images = [
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
  ];
  return (
    <section id="about" className="mt-[8rem] md:mb-[6rem] mb-[3rem]">
      <div className="px-6">
        <div className="mx-auto grid md:grid-cols-2 gap-x-8 md:w-[1300px]">
          <div data-aos='fade-up' className="flex md:p-6 p-4 text-white relative bg-blue-600">
            <div className="m-4">
              <SiGooglescholar size={40} />
            </div>
            <div>
              <h4 className="font-bold md:text-2xl text-xl">
                Scholarship Facillity
              </h4>
              <p className=" text-sm md:mt-4 mt-2">
                Voluptatum quaerat commodi obcaecati mollitia ullam aspernatur
                labore impedit vero sequi nesciunt sit.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="flex md:p-6 p-4 text-white relative bg-yellow-500">
            <div className="m-4">
              <SiGooglescholar size={40} />
            </div>
            <div>
              <h4 className="font-bold md:text-2xl text-xl">
                Scholarship Facillity
              </h4>
              <p className=" text-sm md:mt-4 mt-2">
                Voluptatum quaerat commodi obcaecati mollitia ullam aspernatur
                labore impedit vero sequi nesciunt sit..
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="flex md:p-6 p-4 text-white relative bg-blue-900">
            <div className="m-4">
              <SiGooglescholar size={40} />
            </div>
            <div>
              <h4 className="font-bold md:text-2xl text-xl">
                Scholarship Facillity
              </h4>
              <p className=" text-sm md:mt-4 mt-2">
                Voluptatum quaerat commodi obcaecati mollitia ullam aspernatur
                labore impedit vero sequi nesciunt sit.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="flex md:p-6 p-4 text-white relative bg-green-900">
            <div className="m-4">
              <SiGooglescholar size={40} />
            </div>
            <div>
              <h4 className="font-bold md:text-2xl text-xl">
                Scholarship Facillity
              </h4>
              <p className=" text-sm md:mt-4 mt-2">
                Voluptatum quaerat commodi obcaecati mollitia ullam aspernatur
                labore impedit vero sequi nesciunt sit.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2  md:mx-[14rem] md:mt-[6rem] mt-[4rem] items-center">
          <div className="md:pr-9 ">
            <div className="border-l-2 px-6 border-green-500">
              <h1 data-aos='fade-right' className="text-5xl font-bold">
                About <span className="text-green-500">Us</span>
              </h1>
              <p data-aos='fade-right' data-aos-delay='100' className=" text-green-500 pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                minima, nihil architecto non blanditiis minus.amet consectetur
                adipisicing elit. Aut minima, nihil architecto non blanditiis
              </p>
            </div>
            <p data-aos='fade-right' data-aos-delay='200' className="py-6 text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aut quod accusamus modi repellendus iusto. Neque reprehenderit quam quae inventore repudiandae ducimus quas aperiam perferendis.
            </p>
            <button data-aos='fade-up' data-aos-delay='300' className="bg-blue-600 text-white py-[10px] px-[25px] hover:bg-transparent duration-500 hover:bg-blue-400 mr-2">
              ABOUT US
            </button>
          </div>
          <div className="hidden sm:block">
            <SimpleImageSlider
              width={650}
              height={404}
              autoPlay={true}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
          {/* for mobile screen */}
          <div className="md:hidden flex  mt-8">
            <SimpleImageSlider
              width={365}
              height={250}
              autoPlay={true}
              images={images}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
