"use client"
import React, { useEffect, useState } from "react";


import Header from '@/components/Header'
import ContectMe from "@/containers/ContectMe";
import Projects from "@/containers/Projects";
import Experience from "@/containers/Experience";
import Greeting from "@/containers/Greeting";

const Home = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-gray-100 shadow-md z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <Header />
      </nav>

      <div className="scroll-smooth">

        <section id="home" className=" bg-yellow-100  pt-10 scroll-mt-20">
          <Greeting />
        </section>
        <section id="experience" className=" pt-10 scroll-mt-20">
          <Experience />
        </section>
        <section id="projects" className=" pt-10 scroll-mt-20">
          <Projects />
        </section>
        <section id="contact" className=" pt-10 scroll-mt-20">
          <ContectMe />
        </section>

      </div>
    </>
  )
}

export default Home