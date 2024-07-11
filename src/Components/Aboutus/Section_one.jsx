import React from "react";

function Section_one() {
  return (
    <div className=" py-10 px-16 flex flex-col gap-10 items-center w-full mt-10">
      <h1 className=" text-5xl font-semibold">About us</h1>
      <div className=" flex items-center w-full justify-between mt-16">
        <div className=" w-1/2 flex flex-col gap-10">
          <h1 className=" text-4xl font-semibold w-3/3 leading-10">
            We empower{" "}
            <span className=" underline text-violet-500">Women's</span>
            <br />
            Through Education
          </h1>
          <div className=" flex flex-col gap-5">
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              delectus, a quibusdam expedita alias recusandae rerum itaque
              dolore, quisquam accusantium aperiam ullam ratione eum blanditiis.
              Voluptatibus provident reprehenderit atque repellat!
            </h1>
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              delectus, a quibusdam expedita alias recusandae rerum itaque
              dolore, quisquam accusantium aperiam ullam ratione eum blanditiis.
              Voluptatibus provident reprehenderit atque repellat!
            </h1>
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              delectus, a quibusdam expedita alias recusandae rerum itaque
              dolore, quisquam accusantium aperiam ullam ratione eum blanditiis.
              Voluptatibus provident reprehenderit atque repellat!
            </h1>
          </div>
        </div>
        <div className=" w-1/2 flex justify-end">
          <div className=" w-2/3 h-96 bg-gray-600 rounded-tr-[80px] rounded-bl-[80px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Section_one;
