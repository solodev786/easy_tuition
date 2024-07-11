import { Rowdies } from "next/font/google";
import React from "react";

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

function Section_two() {
  return (
    <div className="w-full px-16 flex items-center justify-between my-32">
      <div className=" w-1/2 flex flex-col gap-10">
        <h1 className={`${rowdies.className} text-5xl font-semibold`}>
          Our Mission
        </h1>
        <div className=" flex flex-col gap-5 w-4/5">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            odit pariatur impedit error ea quos nisi velit blanditiis autem!
            Distinctio quod vel quidem voluptatem officia, ipsam cupiditate
            iusto dicta doloribus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi odit pariatur impedit error ea quos nisi
            velit blanditiis autem! Distinctio quod vel quidem voluptatem
            officia, ipsam cupiditate iusto dicta doloribus?
          </h1>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            odit pariatur impedit error ea quos nisi velit blanditiis autem!
            Distinctio quod vel quidem voluptatem officia, ipsam cupiditate
            iusto dicta doloribus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi odit pariatur impedit error ea quos nisi
            velit blanditiis autem! Distinctio quod vel quidem voluptatem
            officia, ipsam cupiditate iusto dicta doloribus?
          </h1>
        </div>
      </div>
      <div className=" w-1/2 flex  flex-col gap-10">
        <h1 className={`${rowdies.className} text-5xl font-semibold`}>
          Our Vision
        </h1>
        <div className=" flex flex-col gap-5 w-4/5">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            odit pariatur impedit error ea quos nisi velit blanditiis autem!
            Distinctio quod vel quidem voluptatem officia, ipsam cupiditate
            iusto dicta doloribus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi odit pariatur impedit error ea quos nisi
            velit blanditiis autem! Distinctio quod vel quidem voluptatem
            officia, ipsam cupiditate iusto dicta doloribus?
          </h1>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            odit pariatur impedit error ea quos nisi velit blanditiis autem!
            Distinctio quod vel quidem voluptatem officia, ipsam cupiditate
            iusto dicta doloribus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi odit pariatur impedit error ea quos nisi
            velit blanditiis autem! Distinctio quod vel quidem voluptatem
            officia, ipsam cupiditate iusto dicta doloribus?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section_two;
