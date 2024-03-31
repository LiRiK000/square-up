import React from "react";

export const WhyChoose = () => {
  return (
    <section className="w-screen min-h-[65vh] mt-12 z-30 dark:bg-[url('/BGs/WhyChoose.png')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col gap-y-4 w-full min-h-[65vh] justify-center items-center dark:bg-black/60">
        <div className="z-30">
          <h1 className="font-semibold text-5xl text-center z-30">
            Why Choose SquareUp?
          </h1>
        </div>
        <div className="z-30">
          <p className="text-lg text-muted-foreground/110 z-30">
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
};
