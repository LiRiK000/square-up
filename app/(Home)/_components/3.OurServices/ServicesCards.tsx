import { LucideBatteryCharging, PanelsLeftRight, Puzzle } from "lucide-react";

import { OurServicesCard } from "./OurServicesCard";
import React from "react";

export const ServicesCards = () => {
  return (
    <div>
      <div className="flex max-md:flex-col flex-row -mt-32 max-w-7xl mx-auto gap-x-4 z-30">
        <OurServicesCard
          icon={PanelsLeftRight}
          title={"Design"}
          description={
            "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
          }
        />
        <OurServicesCard
          icon={Puzzle}
          title={"Engineering"}
          description={
            "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
          }
        />
        <OurServicesCard
          icon={LucideBatteryCharging}
          title={"Project Management"}
          description={
            "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
          }
        />
      </div>
    </div>
  );
};
