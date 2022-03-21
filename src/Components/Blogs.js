import React from "react";
import blog1 from "../assets/blog1.jpg";
const Blogs = () => {
  const blogs = [
    {
      date: new Date().toISOString(),
      title: "Leo Vitae Nibh Malesuada.",
      author: "Abdus",
      img: blog1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis nulla sed turpis pharetra pretium nec eu sem.",
    },
    {
      date: new Date().toISOString(),
      title: "Leo Vitae Nibh Malesuada.",
      author: "Abdus",
      img: blog1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis nulla sed turpis pharetra pretium nec eu sem.",
    },
    {
      date: new Date().toISOString(),
      title: "Leo Vitae Nibh Malesuada.",
      author: "Abdus",
      img: blog1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis nulla sed turpis pharetra pretium nec eu sem.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="border-b-4 border-[#e4e4e4] mb-8">
        <h3 className="text-color font-semibold text-2xl mb-2">
          Latest Articles
        </h3>
      </div>
      <div className="flex flex-wrap -ml-4 -mr-4">
        {blogs.map((data) => {
          return (
            <div className="p-4 basis-1/3 w-1/3">
              <div>
                <img src={data.img} alt="blogs" />
              </div>
              <div>
                <h3>
                  <a
                    href="#"
                    className="text-xl mt-3 font-semibold text-[#252525]"
                  >
                    {data.title}
                  </a>
                </h3>
                <span className="text-xs">
                  by <a href="#" className="underline">{data.author}</a> / <a href="#" className="underline">5 Comments</a>
                </span>
                <p className="text-color text-sm mt-3">
                    {data.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
