import React from "react";

export const CTA = () => {
  return (
    <section className="w-screen min-h-[65vh] mt-24 z-30 dark:bg-[url('/BGs/Contact.png')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col gap-y-4 w-full min-h-[65vh] justify-center items-center dark:bg-black/60">
        <div className="z-30">
          <h1 className="font-semibold text-5xl text-center z-30">
            Thank you for your Interest in SquareUp.
          </h1>
        </div>
        <div className="z-30">
          <p className="text-lg text-center text-muted-foreground/110 z-30">
            We would love to hear from you and discuss how we can help bring
            your digital ideas to life. Here are the different ways you can get
            in touch with us.
          </p>
        </div>
      </div>
    </section>
  );
};
