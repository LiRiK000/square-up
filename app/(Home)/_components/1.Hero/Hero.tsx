"use client";

import { Button } from "@/components/ui/button";
import { HeroCard } from "./HeroCard";
import Link from "next/link";
import React from "react";
import { useContactModal } from "@/hooks/useContactModal";

export const Hero = () => {
  const contact = useContactModal();
  return (
    <>
      <section className="min-h-screen">
        <div className="absolute dark:bg-[url('/BGs/HeroBG.png')] bg-no-repeat bg-center bg-cover h-full w-full z-0 pointer-events-none rotate-180" />
        <div className="flex w-full max-md:h-[100vh] md:h-[80vh] justify-center items-center z-10">
          <div className="justify-center items-center z-10 text-center">
            <h1 className="text-7xl mb-4">
              <span>A Digital Product Studio </span>
              <br />
              <span>that will Work</span>
            </h1>
            <div className="my-16 flex max-w-[300px] justify-center m-auto gap-x-2 z-30 ">
              <HeroCard title="Startups" />
              <HeroCard title="Enterprise leaders" />
              <HeroCard title="Media & Publishers" />
              <HeroCard title="Social Good" />
            </div>
            <div className="flex justify-center gap-x-4">
              <Link href="/works">
                <Button variant="outline" size="lg" className="z-10">
                  Our Works
                </Button>
              </Link>
              <Button
                variant="hero"
                size="lg"
                className="z-10"
                onClick={contact.onOpen}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
