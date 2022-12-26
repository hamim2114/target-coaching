import React from "react";
import n1 from "../assets/n (1).jpg";
import n2 from "../assets/n (2).jpg";
import n3 from "../assets/n (3).jpg";

const blogData = [
  {
    img: n3,
    date: "Dec, 12th 2022",
    title: "A variation of the ordinary",
    text: "amet consectetur adipisicing elit. Possimus, magni",
  },
  {
    img: n2,
    date: "Dec, 12th 2022",
    title: "A variation of the ordinary",
    text: "amet consectetur adipisicing elit. Possimus, magni",
  },
  {
    img: n3,
    date: "Dec, 12th 2022",
    title: "A variation of the ordinary",
    text: "amet consectetur adipisicing elit. Possimus, magni",
  },
  {
    img: n2,
    date: "Dec, 12th 2022",
    title: "A variation of the ordinary",
    text: "amet consectetur adipisicing elit. Possimus, magni",
  },
];

const Card = ({ img, date, title, text }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='1000' className=" bg-gray-100 shadow-lg shadow-gray-300 ">
      <img src={img} alt="" />
      <div className="">
        <h4 className="text-xl p-1 pl-3 font-bold">{title}</h4>
        <p className="text-sm p-1 pl-3">{text}</p>
        <a className="text-sm p-1 pl-3 font-bold text-blue-500" href="#">
          READ MORE
        </a>
        <p className="text-sm pl-3 text-white bg-green-500 py-1">{date}</p>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className=" bg-gray-100">
      <div className="xl:mx-[14rem] px-6 md:py-[8rem] py-[3rem]">
        <div className="text-center">
          <h1 data-aos='fade-up' data-aos-duration='1000' className="text-3xl font-serif font-bold">RECENT STORIES</h1>
          <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200' className="pb-9">
            amet consectetur adipisicing elit. Possimus, magni.
          </p>
        </div>

        <div data-aos='fade-up' className="grid md:grid-cols-4 grid-cols-2 gap-3 ">
          {blogData.map((n) => (
            <Card img={n.img} date={n.date} title={n.title} text={n.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
