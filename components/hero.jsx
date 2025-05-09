"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useEffect } from "react";

const HeroSection = () => {

  const imageRef = useRef()

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold){
        imageElement.classList.add("hero-image-scrolled");
      } else {
        imageElement.classList.remove("hero-image-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5x1 md:text-8x1 lg:text-[105px] pb-6 gradient gradient-title">
          Manage Your Finances <br/> with Intelligence
        </h1>
        <p className="text-x1 text-gray-600 mb-8 max-w-2xl mx-auto">
            An AI-powered financial management platefrom that helps you track,
            analyse, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
                Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
          <Image 
            src={"/banner.jpg"}
            width={1280} 
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2x1 border mx-auto"
            priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
