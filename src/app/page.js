import Footer from "@/Components/Footer";
import Section_Four from "@/Components/Homepage/Section_Four";
import Section_five from "@/Components/Homepage/Section_five";
import Section_one from "@/Components/Homepage/Section_one";
import Section_three from "@/Components/Homepage/Section_three";
import Section_two from "@/Components/Homepage/Section_two";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-20 ">
        <Navbar />
        <Section_one />
        <Section_two />
        <Section_three />
        <Section_Four />
        <Section_five />
        <Footer />
      </div>
    </>
  );
}
