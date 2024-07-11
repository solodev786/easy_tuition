import Section_one from "@/Components/Aboutus/Section_one";
import Section_two from "@/Components/Aboutus/Section_two";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

function page() {
  return (
    <div className=" ">
      <Navbar />
      <Section_one />
      <Section_two />
      <Footer />
    </div>
  );
}

export default page;
