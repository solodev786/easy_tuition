import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Section_one from "@/Components/Teachers/Section_one";
import Section_two from "@/Components/Teachers/Section_two";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Section_one />
      <Section_two />
      <Footer />
    </div>
  );
}

export default page;
